const calendar = 'CALENDAR_ID (typically your gmail)'
const searchPhrases = ['Phrase 1', 'Phrase 2', 'Phrase 3']
const maxSessions = 3
const maxSessionsThursday = 4
const days = 90


function limitBookings() {
    /**
     * Retrieves newly updated events and handles them accordingly
     */
  console.log('Running...')
  const dates = getUpdatedEvents_()  
  if(!dates) return
  console.info(`Checking dates: ${dates}`)
  dates.forEach(date => {
    console.log(handleCalendar_(date))
  })
}



function limitBookingsMonthly() {
    /**
     * Updates every day in time range (Default 90 days)
     */
  const date = new Date()
 

  for(i = 0; i < days; i++){
    console.log(`Date: ${date}`, `Verdict: ${handleCalendar_(date)}`)
    date.setDate(date.getDate() + 1)
  }
 
}


function getBookingsForDay_ (date) {
    /**
     *  Counts the events based on strings it contains.
     *  Can be in both title or description.
     */

    let events = 0
    searchPhrases.forEach(search => events += CalendarApp.getEventsForDay(date, {search}).length)
    return events
}

function handleCalendar_ (date) {
    /**
     * limitSessions defines how many events are allowed before the calendar closes the day.
     * The script checks if the day is closed and acts accordingly.
     * If the day should be closed a Full-day "closed" event is added to the day.
     * If the day should not be closed the Full-day event "closed" is removed.
     */


  const closedEvent   =   CalendarApp.getEventsForDay(date, {search: 'closed'})
  const limitSessions = date.getDay() === 4 ? maxSessionsThursday : maxSessions

  if(getBookingsForDay_(date) >= limitSessions) {
      // Day is already and should remain closed
      if(closedEvent.length > 0) return 'Day stays closed!'
      // Day will be closed
      CalendarApp.createAllDayEvent('Closed', date)
      return 'Close the day!'
  }
    // Day is already and should be open
    if(closedEvent.length < 1 ) return 'Day stays open!'
    // Day will be opened
    closedEvent[0].deleteEvent()
    return 'Open the day!'

}

function getUpdatedEvents_ (seconds = 60) {
    /**
     * Retrieves newly updated events (default 1 minute range)
     */
  const date = new Date
    const dates = Calendar.Events.list(calendar, {
    orderBy: 'Updated',
    updatedMin: new Date(date.getTime() - seconds * 1000).toISOString()
    })
    .items
    .map(({id}) => CalendarApp.getEventById(id).getStartTime())
  if(!dates.length) return null
  return dates
}
