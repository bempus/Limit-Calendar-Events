# Limit Bookings in Google Calendar
A script designed to run on  https://script.google.com/ with the "Caledar"-serivce.

## Pitch
 Imagine you have 4 available timeslots in a day, however you want to close the day once 3 of them are filled. You obviously don't want to check manually. 
 This is what Limit Bookings was designed for.

## Description
  This script will add full-day events to your calendar when the criteria is met.
  ### limitBookings()
  By retrieving recently updated events (default 60 seconds) this function can detect if a day should be closed based on the set criteria.
  
  ### limitBookingsMonthly()
  This function checks every day in a set period of time (default 90 days) and updates the day based on the set criteria. 
  It is recommended that this funciton is only used once or twice a day.

## Resources
- [Google's Apps Script](https://script.google.com/) - Platform to run google scripts ***don't forget to add the Calendar service***
- [Calendar Documentation](https://developers.google.com/apps-script/advanced/calendar) - Good to have if you want to edit any of the code
- [CalendarApp Documentation](https://developers.google.com/apps-script/reference/calendar/calendar) - Good to have if you want to edit any of the code

## Credit
- This script was originally made for [Vhe Intuition](https://vheintution.com/)

## Other projects
[Q-er](https://q-er.live) - A queuing system for Twitch.tv

## Contact
 If you have any questions feel free to [Contact me](mailto:bempus@q-er.live)
