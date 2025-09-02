import "../components/StylishButton.css";
import Slider from "./Slider";

function Body() {
  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        padding: "20px 80px",
        background: "linear-gradient(to right, #f0f8ff, #e0f7fa)",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <img
          src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Beach Resort"
          style={{
            width: "100%",
            maxWidth: "1200px",
            height: "auto",
            borderRadius: "25px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
      <h1
        style={{
          fontSize: "40px",
          fontFamily: "cursive",
          marginBottom: "10px",
          color: "#2c3e50",
          marginTop: "120px",
        }}
      >
        <b>Let's Go on an Adventure</b>
      </h1>
      <h2 style={{ fontSize: "22px", color: "#7f8c8d", marginBottom: "30px" }}>
        Find and book a great experience
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "90px",
          flexWrap: "wrap", // Wrap images if they overflow
          marginTop: "120px",
          marginBottom: "130px",
        }}
      >
        <div style={{ display: "flex", gap: "15px" }}>
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img
              src="https://img.freepik.com/premium-vector/landscape-beach-rest-zone-with-sun-lounger-sun-parasol-theme-summer_955564-56.jpg"
              alt="Beech Resort"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <div
            style={{
              marginTop: "55px",
              justifyContent: "flex-start",
            }}
          >
            <p>Luxury Resort at</p>
            <p style={{ margin: 0 }}>the Sea</p>
            <p style={{ backgroundColor: "#CED5DC", borderRadius: "10px" }}>
              10,684 Places
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "15px" }}>
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://img.freepik.com/premium-vector/summer-camping-forest-tent-gear-hand-drawn-flat-stylish-cartoon-sticker-icon-concept-isolated_730620-323236.jpg"
              alt="Camp"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <div
            style={{
              marginTop: "55px",
              justifyContent: "flex-start",
            }}
          >
            <p>Camping amidst the</p>
            <p style={{ margin: 0 }}>Wild</p>
            <p style={{ backgroundColor: "#CED5DC", borderRadius: "10px" }}>
              1,924 Places
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "15px" }}>
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://media.istockphoto.com/id/1357894841/vector/bonfire-with-marshmallow-cartoon-camp-background-sweets-roasting-on-fire-night-and-forest.jpg?s=612x612&w=0&k=20&c=FbVy1gxLfkIiz7vrK5yvokp9Ab6JHepKmKLAi4qAr_8="
              alt="Camp"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <div
            style={{
              marginTop: "55px",
              justifyContent: "flex-start",
            }}
          >
            <p>Bonfire at Snowy</p>
            <p style={{ margin: 0 }}>Mountains</p>
            <p style={{ backgroundColor: "#CED5DC", borderRadius: "10px" }}>
              9,326 Places
            </p>
          </div>
        </div>
      </div>
      <h1
        style={{
          fontSize: "40px",
          fontFamily: "cursive",
          marginBottom: "10px",
          color: "#2c3e50",
          marginTop: "160px",
        }}
      >
        <b>Travel to make Memories</b>
        <br />
        <b>all around the World</b>
      </h1>
      <h2 style={{ fontSize: "22px", color: "#7f8c8d", marginBottom: "30px" }}>
        Find trips that fit a flexible lifestyle
      </h2>

      <div style={{ display: "flex", gap: "280px" }}>
        <div
          style={{
            justifyContent: "flex-start",
            marginTop: "5px",
            padding: "70px",
          }}
        >
          <h1
            style={{
              fontSize: "25px",
              backgroundColor: "grey",
              borderRadius: "20px",
              padding: "0px 20px",
            }}
          >
            01
          </h1>
          <h1
            style={{
              fontSize: "25px",
              textAlign: "left",
            }}
          >
            <b>Travel with more Confidence</b>
          </h1>
          <p style={{ textAlign: "left" }}>
            Explore the world with peace of mind and assurance.
          </p>
          <p style={{ textAlign: "left" }}>
            Our services ensure every journey is smooth, safe,
          </p>
          <p style={{ textAlign: "left" }}>
            {" "}
            and enjoyable, so you can travel with more confidence.
          </p>
          <br />
          <br />
          <h1
            style={{
              fontSize: "25px",
              backgroundColor: "grey",
              borderRadius: "20px",
              padding: "0px 20px",
            }}
          >
            02
          </h1>
          <h1
            style={{
              fontSize: "25px",
              textAlign: "left",
            }}
          >
            <b>See what's really included</b>
          </h1>
          <p style={{ textAlign: "left" }}>
            Discover exactly what’s included in your travel
          </p>
          <p style={{ textAlign: "left" }}>
            package with full transparency and detailed information.
          </p>
        </div>

        <Slider />
      </div>

      <h1
        style={{
          fontSize: "40px",
          fontFamily: "cursive",
          marginBottom: "10px",
          color: "#2c3e50",
          marginTop: "80px",
        }}
      >
        <b>Live Anywhere</b>
      </h1>
      <h2 style={{ fontSize: "22px", color: "#7f8c8d", marginBottom: "30px" }}>
        Keep calm & travel on
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap", // Wrap images if they overflow
          marginTop: "40px",
          marginBottom: "130px",
        }}
      >
        <div style={{ flexDirection: "column" }}>
          <div
            style={{
              width: "310px",
              height: "390px",
              overflow: "hidden",
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://finestayslovenia.com/wp-content/uploads/2020/03/fine-stay-apartments-spring-snow-21.jpg"
              alt="Camp"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <h2 style={{ fontSize: "15px" }}>
              <b>Enjoy the great cold</b>
            </h2>
            <p style={{ color: "grey", fontSize: "14px" }}>6,986 Properties</p>
          </div>
        </div>
        <div>
          <div
            style={{
              width: "310px",
              height: "390px",
              overflow: "hidden",
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://media.istockphoto.com/id/1319606736/photo/idyllic-country-house-at-sunrise.jpg?s=612x612&w=0&k=20&c=nVKccrQ24p0PE31iNK4Nko24VZOGMHxpKm763LAiKOw="
              alt="Camp"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <h2 style={{ fontSize: "15px" }}>
              <b>Pick up the earliest sunrise</b>
            </h2>
            <p style={{ color: "grey", fontSize: "14px" }}>3,834 Properties</p>
          </div>
        </div>
        <div style={{ flexDirection: "column" }}>
          <div
            style={{
              width: "310px",
              height: "390px",
              overflow: "hidden",
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://content.tui.co.uk/adamtui/2023_8/2_13/6f7a2308-271d-4375-a301-b05200e123d1/ACC_003672_CYP_45WebOriginalCompressed.jpg?i10c=img.resize(width:1080);img.crop(width:1080%2Cheight:608)"
              alt="Camp"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <h2 style={{ fontSize: "15px" }}>
              <b>Unique & Luxurious Stay</b>
            </h2>
            <p style={{ color: "grey", fontSize: "14px" }}>5,727 Properties</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
