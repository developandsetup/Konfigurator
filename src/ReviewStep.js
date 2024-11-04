import React from "react";

function ReviewStep({ data, onSubmit }) {
  const { selectedManufacturer, selectedServices, totalPrice, name, phone, email, note } = data;

  return (
    <div style={reviewStyle}>
      <h2>Pregled vašeg odabira</h2>
      <p>
        <strong>Proizvođač:</strong> {selectedManufacturer}
      </p>

      <p>
        <strong>Odabrane usluge:</strong>
      </p>
      <ul>
        {selectedServices.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>

      <p>
        <strong>Ukupno:</strong> {totalPrice} kn
      </p>

      <h3>Vaši podaci</h3>
      <p>
        <strong>Ime i prezime:</strong> {name}
      </p>
      <p>
        <strong>Broj telefona:</strong> {phone}
      </p>
      <p>
        <strong>Email adresa:</strong> {email}
      </p>
      {note && (
        <p>
          <strong>Napomena:</strong> {note}
        </p>
      )}

      <button style={buttonStyle} onClick={onSubmit}>
        Potvrdi i pošalji
      </button>
    </div>
  );
}

const reviewStyle = {
  padding: "20px",
  textAlign: "center",
};

const buttonStyle = {
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "16px",
  marginTop: "20px",
};

export default ReviewStep;
