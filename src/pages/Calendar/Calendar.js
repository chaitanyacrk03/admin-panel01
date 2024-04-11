import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timegridPlugin from '@fullcalendar/timegrid';
import {useSelector, useDispatch} from 'react-redux'
import {calendarActions} from '../../store/Calendar'
import "./Calendar.css"
import {createEventId} from '../../data/data'
/*eslint-disable no-restricted-globals */
//the above comment allows us to use confirm() popup else we get an error
const Calendar = () => {
    const dispatch=useDispatch();
    const calendarData=useSelector(state=>state.calendar.calendarEvents)
    async function handleEvents(events){
        let newCalendarData=[]
        events.map((event)=>{
            newCalendarData.push(event.toPlainObject())//redux store cant take event objects so we need to convert event objects into json 
        })
        dispatch(calendarActions.setCurrentEvents(newCalendarData))
    }
    const handleDataSelect=(selectedInfo)=>{
        console.log(selectedInfo)
        let title= prompt("Please enter the title for the event")
        let calendarApi=selectedInfo.view.calendar
        calendarApi.unselect();
        if(title){
            calendarApi.addEvent({
                id:createEventId(),
                title,
                start:selectedInfo.start,
                end:selectedInfo.end,
                allDay:selectedInfo.allDay
            })
        }
    }
    function handleEventClick(clickInfo){
        const isDelete=confirm("Are yuu sure you want to delete it?")
        if(isDelete){
            clickInfo.event.remove()
        }
    }
  return (
    <div className="calendar-container">
        <div id="title">Add Your Events</div>
        
        <div>
        <FullCalendar //full documentation of the calendar api -->  https://fullcalendar.io/docs#toc
    plugins={[dayGridPlugin,interactionPlugin,timegridPlugin]}//the daGrid and timeGrid plugin is to format calendar in day wise or month wise used in headers
    headerToolbar={{//data shown above calendar||interactionPlugin is used to interact with cal.without it click won't work as expected
        left: 'prev,next, today', //shows next day previous day
        center:"title",// today date
        right:"dayGridMonth,timeGridWeek,timeGridDay"// view calendar by month,week or date 
    }}
    allDaySlot={false}//Determines if the “all-day” slot is displayed at the top of the calendar.
    initialView="dayGridMonth"//timeGridMonth means calendar will be divided based on each hour not day
    slotDuration={"01:00:00"}//The frequency for displaying time slots.
    editable={true}//Determines whether the events on the calendar can be modified.
    selectable={true}//Allows a user to highlight multiple days or timeslots by clicking and dragging.
    selectMirror={true}//Whether to draw a “placeholder” event while the user is dragging.
    dayMaxEvent={true}//if true is specified, the number of events will be limited to the height of the day cell.
    weekends={true}//Whether to include Saturday/Sunday columns in any of the calendar views.
    nowIndicator={true}//indicates the current date and time
    initialEvents={calendarData}//shows all initial events in the calendar. each event has title,id and start-->time of event
    eventsSet={handleEvents}//a function called when event data initialized or changes. it gets and events param by default which is an array of event objects
    select={handleDataSelect}//function is called when we click on any date or time in the calendar
    eventClick={handleEventClick}//Triggered when the user clicks an already created event to edit it.
    />
        </div>
    </div>
  )
}
//install individually because npm i was giving error
export default Calendar