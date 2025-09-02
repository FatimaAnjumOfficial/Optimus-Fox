import { useState } from "react";
import axios from "axios";
import "./BookingModal.css";

const BookingModal = ({ flight, onClose }) => {
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    cnic: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/FBooking", {
        ...bookingDetails,
        flightNumber: flight.flightNumber,
        flightName: flight.flightName,
        from: flight.from,
        to: flight.to,
        departure: flight.departure,
        arrival: flight.arrival,
      });
      alert(`Booking confirmed for flight ${flight.flightNumber}.`);
      onClose();
    } catch (error) {
      console.error("Error booking flight:", error);
      alert("There was an error confirming your booking. Please try again.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 style={{ textAlign: "center", fontSize: "25px", top: "0" }}>
          <b>Book Flight</b>
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "65px" }}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={bookingDetails.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              CNIC:
              <input
                type="text"
                name="cnic"
                value={bookingDetails.cnic}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div style={{ display: "flex", gap: "65px" }}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={bookingDetails.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={bookingDetails.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div style={{ display: "flex", gap: "0px" }}>
            <label>
              Flight Name:
              <input type="text" value={flight.flightName} readOnly />
            </label>
            <label>
              Flight No.:
              <input type="text" value={flight.flightNumber} readOnly />
            </label>
          </div>
          <div style={{ display: "flex", gap: "100px" }}>
            <label>
              From:
              <input type="text" value={flight.from} readOnly />
            </label>
            <label>
              To:
              <input type="text" value={flight.to} readOnly />
            </label>
          </div>
          <div style={{ display: "flex", gap: "40px" }}>
            <label>
              Departure:
              <input type="text" value={flight.departure} readOnly />
            </label>
            <label>
              Arrival:
              <input type="text" value={flight.arrival} readOnly />
            </label>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button type="submit">Confirm Booking</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
