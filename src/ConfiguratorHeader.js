import React from "react";

function ConfiguratorHeader() {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Konfigurator servisa</h1>
    </header>
  );
}

const headerStyle = {
  backgroundColor: "#007BFF", // Plava boja
  padding: "20px",
  textAlign: "center",
};

const titleStyle = {
  color: "white", // Bijeli tekst
  margin: 0,
};

export default ConfiguratorHeader;
