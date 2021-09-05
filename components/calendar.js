import { Component } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = (props) => {
  const setOpen = props.setOpen;
  const setInfoEvent = props.setInfoEvent;
  const events = [];

  return (
    <FullCalendar
      headerToolbar={{
        center: "prevYear,dayGridMonth,timeGridWeek,timeGridDay,nextYear",
      }}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      dateClick={(info) => {
        setOpen(true);
        setInfoEvent({
          dateStr: info.dateStr,
          start: info.date,
          id: "a",
          title: "my event",
          display: "block",
          allDay: true,
        });
      }}
      nowIndicator={true}
      selectable={false}
      // select={(info) => {
      //   console.log("click", info);
      // }}
      editable={true}
      eventClick={(info) => {
        // console.log("click", info);
      }}
      height={500}
      contentHeight={"100%"}
      expandRows={true}
      events={events}
      eventResize={(info) => {
        alert(info.event.title + " end is now " + info.event.end.toISOString());

        if (!confirm("is this okay?")) {
          info.revert();
        }
      }}
      weekends={false}
    />
  );
};

export default Calendar;
