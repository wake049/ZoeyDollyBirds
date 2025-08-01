import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const BookingPage = () => {
  return (
    <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <NavBar />
      <h2 style={{ fontFamily: "Playfair Display, serif", marginBottom: "2rem" }}>
        Book an Appointment
      </h2>

      <iframe
        title="Zoey Booking"
        src="https://book.squareup.com/appointments/1oigyyy9x1945r/location/LSHP5V6W4MDMP"
        style={{
          border: "none",
          width: "100%",
          maxWidth: "900px",
          height: "1000px",
          margin: "0 auto",
          display: "block",
        }}
      />
      <Footer />
    </div>
  );
};

export default BookingPage;
