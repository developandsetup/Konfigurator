import React, { useState } from "react";

function ServiceConfiguratorStep1({ onNext }) {
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    note: "",
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const manufacturers = ["Peugeot", "Volkswagen", "Citroen", "BMW", "Seat"];
  const services = [
    { name: "Zamjena ulja i filtera", price: 100 },
    { name: "Promjena pakni", price: 150 },
    { name: "Servis klima uređaja", price: 200 },
    { name: "Balansiranje guma", price: 50 },
  ];

  const handleManufacturerChange = (event) => {
    setSelectedManufacturer(event.target.value);
  };

  const handleServiceChange = (event) => {
    const value = event.target.value;
    const price = services.find((service) => service.name === value).price;

    setSelectedServices((prevServices) =>
      prevServices.includes(value) ? prevServices.filter((service) => service !== value) : [...prevServices, value]
    );

    setTotalPrice((prevPrice) => (selectedServices.includes(value) ? prevPrice - price : prevPrice + price));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCouponApply = () => {
    if (couponCode === "Kupon123") {
      setTotalPrice((prevPrice) => prevPrice * 0.9); // Popust od 10%
      setDiscountApplied(true);
      setCouponError("");
    } else {
      setCouponError("Neispravan kod kupona.");
    }
  };

  const handleNext = () => {
    if (!selectedManufacturer || selectedServices.length === 0) {
      alert("Molimo odaberite proizvođača i barem jednu uslugu.");
    } else {
      onNext({ selectedManufacturer, selectedServices, totalPrice, ...formData });
    }
  };

  return (
    <div style={stepStyle}>
      <h2>Odaberite proizvođača vašeg vozila</h2>
      {manufacturers.map((manufacturer) => (
        <label key={manufacturer}>
          <input
            type="radio"
            name="manufacturer"
            value={manufacturer}
            checked={selectedManufacturer === manufacturer}
            onChange={handleManufacturerChange}
          />
          {manufacturer}
        </label>
      ))}

      <h2>Odaberite jednu ili više usluga koje trebate</h2>
      {services.map((service) => (
        <label key={service.name}>
          <input
            type="checkbox"
            value={service.name}
            checked={selectedServices.includes(service.name)}
            onChange={handleServiceChange}
          />
          {service.name} - {service.price} kn
        </label>
      ))}

      <h3>Ukupno: {totalPrice} kn</h3>

      <div>
        <button onClick={() => setDiscountApplied(false)}>Imam kupon</button>
        {!discountApplied && (
          <>
            <input
              type="text"
              placeholder="Unesite kupon"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button onClick={handleCouponApply}>Primijeni kupon</button>
            {couponError && <p style={{ color: "red" }}>{couponError}</p>}
          </>
        )}
      </div>

      <h2>Vaši podaci</h2>
      <label>
        Ime i prezime:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        Broj telefona:
        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
      </label>
      <label>
        Email adresa:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <label>
        Napomena (opcionalno):
        <textarea name="note" value={formData.note} onChange={handleInputChange} />
      </label>

      <button style={buttonStyle} onClick={handleNext}>
        Dalje
      </button>
    </div>
  );
}

const stepStyle = {
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

export default ServiceConfiguratorStep1;
