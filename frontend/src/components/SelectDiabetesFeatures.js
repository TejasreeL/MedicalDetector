import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";

export default function SelectDiabetesFeatures() {
  // Define the option list for diabetes features
  const optionList = [
    { value: "Pregnancies", label: "Pregnancies" },
    { value: "Glucose", label: "Glucose" },
    { value: "BloodPressure", label: "Blood Pressure" },
    { value: "SkinThickness", label: "Skin Thickness" },
    { value: "Insulin", label: "Insulin" },
    { value: "BMI", label: "BMI" },
    { value: "DiabetesPedigreeFunction", label: "Diabetes Pedigree Function" },
    { value: "Age", label: "Age" }
  ];

  // State to store selected features and their values
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [featureValues, setFeatureValues] = useState({
    Pregnancies: '',
    Glucose: '',
    BloodPressure: '',
    SkinThickness: '',
    Insulin: '',
    BMI: '',
    DiabetesPedigreeFunction: '',
    Age: ''
  });

  // Handle feature selection change
  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  // Handle feature value change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFeatureValues({ ...featureValues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Extract only the selected feature values
    const dataToSend = selectedOptions.reduce((acc, option) => {
      acc[option.value] = parseFloat(featureValues[option.value]) || 0;
      return acc;
    }, {});

    try {
      const response = await axios.post('http://localhost:5000/predict_diabetes', dataToSend);
      console.log('Prediction response:', response.data);
    } catch (error) {
      console.error('Error during prediction:', error);
    }
  };

  return (
    <div className="app">
      <h2>Select and Enter Feature Values</h2>
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Select features"
          value={selectedOptions}
          onChange={handleSelectChange}
          isSearchable={true}
          isMulti
        />
      </div>
      <div className="feature-inputs">
        {selectedOptions.map((option) => (
          <div key={option.value} className="feature-input">
            <label>{option.label}</label>
            <input
              type="number"
              name={option.value}
              value={featureValues[option.value]}
              onChange={handleInputChange}
              placeholder={`Enter ${option.label}`}
            />
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Predict Diabetes</button>
    </div>
  );
}
