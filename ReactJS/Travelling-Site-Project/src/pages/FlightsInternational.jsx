import React, { useState } from "react";
import { internationalFlights } from "../data/internationalFlights";
import BookingModal from "../components/booking/BookingModal";
import "../components/StylishButton.css";
import "./FlightsInternational.css";

const FlightsInternational = () => {
  const [search, setSearch] = useState({
    from: "",
    to: "",
    date: "",
  });
  const [flights, setFlights] = useState(internationalFlights);
  const [filteredFlights, setFilteredFlights] = useState(internationalFlights);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const { from, to, date } = search;
    const filtered = flights.filter((flight) => {
      return (
        flight.from.toLowerCase().includes(from.toLowerCase()) &&
        flight.to.toLowerCase().includes(to.toLowerCase()) &&
        flight.departure.startsWith(date)
      );
    });

    setFilteredFlights(filtered);
    console.log("Search submitted:", search);
  };

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedFlight(null);
  };

  return (
    <div
      className="flights-domestic-container"
      style={{ padding: "0px 80px", marginBottom: "30px" }}
    >
      <header className="page-header">
        <h1>International Flights</h1>
        <p>Explore and bookinternational flights across the World.</p>
        <br />
      </header>
      <main className="content">
        <section className="flight-search">
          <h2 style={{ fontSize: "20px" }}>
            <b>Search for Flights</b>
          </h2>
          <br />
          <form onSubmit={handleSearch} className="search-form">
            <div style={{ gap: "30px", display: "flex" }}>
              <label>
                From:
                <input
                  type="text"
                  name="from"
                  value={search.from}
                  onChange={handleChange}
                  placeholder="City or Airport"
                  required
                />
              </label>
              <label>
                To:
                <input
                  type="text"
                  name="to"
                  value={search.to}
                  onChange={handleChange}
                  placeholder="City or Airport"
                  required
                />
              </label>
            </div>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={search.date}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Search</button>
          </form>
        </section>
        <section className="flight-list">
          <h2 style={{ fontSize: "25px" }}>Available Flights</h2>
          {filteredFlights.length > 0 ? (
            <ul className="flight-grid">
              {filteredFlights.map((flight) => (
                <li key={flight.id} className="flight-card">
                  <h3 style={{ textAlign: "center", fontSize: "18px" }}>
                    <b>
                      {flight.from} to {flight.to}
                    </b>
                  </h3>
                  <br />
                  <h1>
                    <b>Flight Name:</b> {flight.flightName}
                  </h1>
                  <h1>
                    <b>Flight No.:</b> {flight.flightNumber}
                  </h1>
                  <p>
                    <b>Departure:</b> {flight.departure}
                  </p>
                  <p>
                    <b>Arrival:</b> {flight.arrival}
                  </p>
                  <p>
                    <b>Price:</b> {flight.price}
                  </p>
                  <button
                    onClick={() => handleSelectFlight(flight)}
                    className="stylish-button"
                  >
                    Book Now
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No flights available for the selected criteria.</p>
          )}
        </section>
      </main>
      {modalOpen && selectedFlight && (
        <BookingModal flight={selectedFlight} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default FlightsInternational;
