
import React from "react";
import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
import { parse, startOfWeek, getDay, format } from "date-fns";
import vi from "date-fns/locale/vi";
import "react-big-calendar/lib/css/react-big-calendar.css";
import allEvents from "../utils/mockEvents";

const locales = {
  vi: vi,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

// Chuyển mock event thành event chuẩn cho calendar
const registeredEventIds = [1, 2, 4]; // tạm giả định user đăng ký các event này
const events = allEvents
  .filter((event) => registeredEventIds.includes(event.id))
  .map((event) => {
    const [dateStr, timeStr] = event.time.split(" ");
    const [hour, minute] = timeStr.split(":").map(Number);
    const start = new Date(dateStr);
    start.setHours(hour, minute);

    const end = new Date(start);
    end.setHours(start.getHours() + 1); // mỗi event kéo dài 1 tiếng

    return {
      title: event.name,
      start,
      end,
      room: event.room,
    };
  });

export default function RealTimeCalendar() {
  return (
    <div style={{ height: "calc(100vh - 100px)", padding: 20 }}>
      <h2>Lịch sự kiện thực tế</h2>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView={Views.WEEK}
        views={[Views.DAY, Views.WEEK, Views.MONTH]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        messages={{
          today: "Hôm nay",
          previous: "Trước",
          next: "Sau",
          month: "Tháng",
          week: "Tuần",
          day: "Ngày",
          agenda: "Danh sách",
          date: "Ngày",
          time: "Giờ",
          event: "Sự kiện",
        }}
      />
    </div>
  );
}
