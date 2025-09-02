
import "./HotelCard.css";
import "../StylishButton.css";

const HotelCard = ({ image, name, country, city, rooms, rent, onClick }) => {
  return (
    <div className="hotel-card" onClick={onClick}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <div style={{ textAlign: "left", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: "150px" }}>
          <p>
            <b>Rooms: </b>
            {rooms}
          </p>
          <p>
            <b>Rent: </b>
            {rent}
          </p>
        </div>
        <div style={{ display: "flex", gap: "140px" }}>
          <p>
            <b>Country: </b>
            {country}
          </p>
          <p>
            <b>City: </b>
            {city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
