import React, { useState } from "react";
import SelectDiseases from "../components/SelectDiseases";

function DiseasePredict() {
  const [selectedOptions, setSelectedOptions] = useState();
  const [predictedDisease, setPredictedDisease] = useState(null); // State variable to store predicted disease

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
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
      </div>
    </div>
  );
}

export default DiseasePredict;
