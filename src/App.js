import React from "react"
// import { BigCalendar } from 'react-big-calendar/dist/react-big-calendar'
// import moment from 'moment'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
// const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

// const myEventsList =  {
//   title: "hello",
//   start: Date,
//   end: Date,
//   allDay: true
// }

import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';

const App = props => (
  <div>
    <Calendar showWeekNumber />
  </div>
)
export default App