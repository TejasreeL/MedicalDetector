import React, { useState } from "react";
import SelectDiseases from "../components/SelectDiseases";

function DiseasePredict() {
  const [selectedOptions, setSelectedOptions] = useState();
  const [predictedDisease, setPredictedDisease] = useState(null); // State variable to store predicted disease
  const [showTreatmentButton, setShowTreatmentButton] = useState(false); // State variable for showing treatment button

  function handleSelect(data) {
    setSelectedOptions(data);
    console.log(data);
  }

  const sendData = async () => {
    try {
      const response = await fetch("http://localhost:5000/diseases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedOptions),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Success:", responseData);
        // Set the predicted disease in state variable
        setPredictedDisease(responseData.predicted_disease);
        setShowTreatmentButton(true); // Show treatment button when disease is predicted
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleTreatmentClick = () => {
    // Logic to handle treatment button click
    console.log("Treatment measures for:", predictedDisease);
  };

  return (
    <div>
      <div className="p-4 w-50 mx-auto text-center">
        <SelectDiseases func={handleSelect} selectedOptions={selectedOptions} />
      </div>
      <div className="App">
        <button onClick={sendData}>Predict Disease</button>
        {predictedDisease && <p>{predictedDisease}</p>}{" "}
        {/* Display predicted disease if available */}
        {showTreatmentButton && (
          <button onClick={handleTreatmentClick}>Treatment Measures</button>
        )}{" "}
        {/* Conditionally render treatment button */}
      </div>
    </div>
  );
}

export default DiseasePredict;
