import React, { useState } from "react";
import ConfiguratorHeader from "./ConfiguratorHeader";
import ConfiguratorIntro from "./ConfiguratorIntro";
import ServiceConfiguratorStep1 from "./ServiceConfiguratorStep1";
import ReviewStep from "./ReviewStep";

function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const startConfigurator = () => {
    setStep(1); // Prvi korak konfiguratora
  };

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1); // Prelazak na sljedeći korak
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://fe-interview-project-backend.accounts-a35.workers.dev/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-authentication-token": "borealis-fe-interview-token",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Vaš zahtjev je uspješno poslan!");
        setStep(0); // Vraća korisnika na početak nakon potvrde
        setFormData({}); // Resetira podatke nakon slanja
      } else {
        alert("Došlo je do greške pri slanju zahtjeva.");
      }
    } catch (error) {
      alert("Pogreška u povezivanju s API-jem.");
      console.error(error);
    }
  };

  return (
    <div>
      <ConfiguratorHeader />

      {step === 0 && <ConfiguratorIntro onStart={startConfigurator} />}
      {step === 1 && <ServiceConfiguratorStep1 onNext={handleNext} />}
      {step === 2 && <ReviewStep data={formData} onSubmit={handleSubmit} />}
    </div>
  );
}

export default App;
