import React from "react";

function ConfiguratorIntro({ onStart }) {
  return (
    <div style={bodyStyle}>
      <h2>Konfigurator servisa</h2>
      <p>
        Pošaljite upit za servis svog vozila pomoću našeg konfiguratora i naš stručan tim će vam se javiti u najkraćem
        mogućem roku.
      </p>
      <button style={buttonStyle} onClick={onStart}>
        Pokreni konfigurator
      </button>
    </div>
  );
}

const bodyStyle = {
  textAlign: "center",
  padding: "20px",
};

const buttonStyle = {
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "16px",
};

export default ConfiguratorIntro;
