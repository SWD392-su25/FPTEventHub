// src/utils/mockEvents.js

import Event01 from "../assets/events/Event01.png";
import Event02 from "../assets/events/Event02.png";
import Event03 from "../assets/events/Event03.png";
import Event04 from "../assets/events/Event04.png";
import Event05 from "../assets/events/Event05.png";

const allEvents = [
  {
    id: 1,
    name: "Event 01",
    time: "2025-07-15 08:00",
    room: "A101",
    quantity: 100,
    image: Event01,
  },
  {
    id: 2,
    name: "Event 02",
    time: "2025-07-20 13:30",
    room: "B202",
    quantity: 80,
    image: Event02,
  },
  {
    id: 3,
    name: "Event 03",
    time: "2025-08-05 09:00",
    room: "Hall C",
    quantity: 150,
    image: Event03,
  },
  {
    id: 4,
    name: "Event 04",
    time: "2025-08-06 09:00",
    room: "D303",
    quantity: 120,
    image: Event04,
  },
  {
    id: 5,
    name: "Event 05",
    time: "2025-08-07 14:00",
    room: "E404",
    quantity: 90,
    image: Event05,
  },
];

export default allEvents;