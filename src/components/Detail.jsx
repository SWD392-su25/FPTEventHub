import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import allEvents from "../utils/mockEvents";
import "../styles/DetailScreen.css";

export default function DetailScreen() {
  const { eventID } = useParams();
  const navigate = useNavigate();

  // Chuyển ID từ chuỗi sang số để tìm đúng
  const event = allEvents.find((item) => item.id === Number(eventID));

  if (!event) {
    return (
      <div className="center">
        <p className="errorText">Không tìm thấy sự kiện</p>
      </div>
    );
  }

  return (
    <div className="detailContainer">
      <div className="detailContent">
        <img src={event.image} alt={event.name} className="detailImage" />
        <h1 className="detailTitle">{event.name}</h1>
        <p className="detailDescription">
          Thời gian: {event.time} <br />
          Địa điểm: {event.room} <br />
          Số lượng: {event.quantity} người
        </p>

        <button
          className="registerButton"
          onClick={() =>
            navigate(`/register/${event.id}`, {
              state: { title: event.name },
            })
          }
        >
          Đăng ký tham gia
        </button>
      </div>
    </div>
  );
}
