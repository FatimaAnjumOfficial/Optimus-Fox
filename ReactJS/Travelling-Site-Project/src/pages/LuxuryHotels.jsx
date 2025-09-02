import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import HotelCard from "../components/booking/HotelCard";
import { hotels } from "../data/hotels";
import { Search } from "../assets/Icons";
import "./Hotels.css";
import axios from "axios";

const BookingForm = ({ hotel, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    cnic: "",
    email: "",
    room: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/HBooking", {
        ...formData,
        hotelName: hotel.name,
        hotelCountry: hotel.country,
        hotelCity: hotel.city,
        hotelRent: hotel.rent,
      })
      .then((response) => {
        console.log("Form submitted:", response.data);
        onClose();
      })
      .catch((error) => {
        console.error("There was an error submitting the form:", error);
      });
  };

  return (
    <div className="booking-form-popup">
      <div className="booking-form-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 style={{ textAlign: "center", fontSize: "20px" }}>
          <b>Book Your Stay at {hotel.name}</b>
        </h2>
        <br />
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "140px" }}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              CNIC:
              <input
                type="text"
                name="cnic"
                value={formData.cnic}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div style={{ display: "flex", gap: "140px" }}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Room:
              <input
                type="text"
                name="room"
                value={formData.room}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div style={{ display: "flex", gap: "140px" }}>
            <label>
              Hotel Name:
              <input type="text" name="hotelName" value={hotel.name} readOnly />
            </label>
            <label>
              Country:
              <input
                type="text"
                name="hotelCountry"
                value={hotel.country}
                readOnly
              />
            </label>
          </div>
          <div style={{ display: "flex", gap: "140px" }}>
            <label>
              City:
              <input type="text" name="hotelCity" value={hotel.city} readOnly />
            </label>
            <label>
              Rent:
              <input type="text" name="hotelRent" value={hotel.rent} readOnly />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

const LuxuryHotels = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleCardClick = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleClosePreview = () => {
    setSelectedHotel(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredHotels = hotels.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(searchQuery) ||
      hotel.country.toLowerCase().includes(searchQuery) ||
      hotel.city.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="luxury-hotels-container">
      <header className="page-header">
        <h1>Luxury Hotels</h1>
        <p>Explore the finest luxury hotels around the world.</p>
      </header>
      <main className="content">
        <div className="search-bar relative">
          <input
            type="text"
            placeholder="Search by name, country, or city..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div style={{ position: "absolute", left: "365px", bottom: "15px" }}>
            <Search />
          </div>
        </div>

        <section className="hotel-list">
          {filteredHotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              image={hotel.image}
              name={hotel.name}
              rooms={hotel.rooms}
              rent={hotel.rent}
              country={hotel.country}
              city={hotel.city}
              onClick={() => handleCardClick(hotel)}
            />
          ))}
        </section>
        {selectedHotel && (
          <section className="preview">
            <button
              className="close-button"
              onClick={handleClosePreview}
              style={{ top: 1, padding: "0px 8px" }}
            >
              &times;
            </button>
            <h2 style={{ fontSize: "1.5rem" }}>
              <b>{selectedHotel.name}</b>
            </h2>
            <br />
            <div style={{ display: "flex", gap: "20px" }}>
              <img src={selectedHotel.image} alt={selectedHotel.name} />

              <div style={{ textAlign: "left", marginTop: "30px" }}>
                <p>
                  <b>Rooms:</b> {selectedHotel.rooms}
                </p>
                <p>
                  <b>Rent:</b> {selectedHotel.rent}
                </p>
                <p>
                  <b>Country:</b> {selectedHotel.country}
                </p>
                <p>
                  <b>City:</b> {selectedHotel.city}
                </p>
                <div style={{ marginLeft: "-10px", marginTop: "10px" }}>
                  <button
                    onClick={() => setShowForm(true)}
                    className="stylish-button"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <p style={{ textAlign: "left" }}>{selectedHotel.description}</p>
            <br />
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <div>
                <img
                  src={selectedHotel.interior}
                  alt="Interior"
                  style={{
                    width: "250px",
                    height: "140px",
                    border: "black solid 1px",
                  }}
                />
                <p style={{ fontSize: "14px", top: 0 }}>Interior</p>
              </div>
              <div>
                <img
                  src={selectedHotel.bedroom}
                  alt="Bedroom"
                  style={{
                    width: "250px",
                    height: "140px",
                    border: "black solid 1px",
                  }}
                />
                <p style={{ fontSize: "14px", top: 0 }}>Bedroom</p>
              </div>
            </div>
          </section>
        )}
        {showForm && (
          <BookingForm
            hotel={selectedHotel}
            onClose={() => setShowForm(false)}
          />
        )}
        <section className="map-container">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {filteredHotels.map((hotel) => (
              <Marker key={hotel.id} position={hotel.position}>
                <Popup>
                  {hotel.name}
                  <br />
                  {hotel.country}, {hotel.city}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </section>
      </main>
    </div>
  );
};

export default LuxuryHotels;
