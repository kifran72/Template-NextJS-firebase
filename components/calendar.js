import dynamic from "next/dynamic";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import { useState, useEffect } from "react";
import { auth, AddEvent, getEvents } from "@utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// Components
const ModalEvent = dynamic(() => import("@components/styles/modal"));

const Calendar = () => {
  const [user] = useAuthState(auth);
  const [Events, setEvents] = useState([]);
  const [infoEvent, setInfoEvent] = useState(null);
  const [reload, setReload] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = async () => {
    await AddEvent(user, infoEvent);
    setOpen(false);
    setReload(!reload);
  };

  useEffect(() => {
    getEvents()
      .then((test) => {
        setEvents(test);
      })
      .catch((error) => console.error("failFetch", error));
  }, [reload]);

  return (
    <div>
      <FullCalendar
        locale={"fr"}
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
        selectable={true}
        // select={(info) => {
        //   console.log("click", info);
        // }}
        editable={true}
        eventClick={(info) => {
          // console.log("click", info);
        }}
        height={"auto"}
        contentHeight={"auto"}
        expandRows={true}
        events={Events}
        eventResize={(info) => {
          console.log(info.event.title);
          console.log(info.event.end.toISOString());
        }}
        weekends={false}
        eventDrop={(event) => {
          console.log(event.event.title);
          console.log(event.event.start);
        }}
        longPressDelay={100}
      />
      <ModalEvent
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        infoEvent={infoEvent}
      />
    </div>
  );
};

export default Calendar;
