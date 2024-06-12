import React, { useState } from "react";
import axios from "axios";
import "./sep.css";

function Parkinsons() {
  const [formData, setFormData] = useState({
    "MDVP:Fo(Hz)": "",
    "MDVP:Fhi(Hz)": "",
    "MDVP:Flo(Hz)": "",
    "MDVP:Jitter(%)": "",
    "MDVP:Jitter(Abs)": "",
    "MDVP:RAP": "",
    "MDVP:PPQ": "",
    "Jitter:DDP": "",
    "MDVP:Shimmer": "",
    "MDVP:Shimmer(dB)": "",
    "Shimmer:APQ3": "",
    "Shimmer:APQ5": "",
    "MDVP:APQ": "",
    "Shimmer:DDA": "",
    NHR: "",
    HNR: "",
    RPDE: "",
    DFA: "",
    spread1: "",
    spread2: "",
    D2: "",
    PPE: "",
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/predict_parkinsons", formData)
      .then((response) => {
        setPrediction(response.data.predicted_parkinsons);
      })
      .catch((error) => {
        console.error("There was an error making the request!", error);
      });
  };

  const formFields = Object.keys(formData);

  return (
    <div className="mx-auto text-center">
      <h1>Parkinson's Disease Prediction</h1>
      <form onSubmit={handleSubmit} className="parkinsons-form">
        {formFields.map((key, index) => (
          <React.Fragment key={key}>
            {index % 2 === 0 ? (
              <div className="form-group-double">
                <label className="form-label-double">
                  {key}:
                  <input
                    className="form-input-double"
                    type="number"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    required
                  />
                </label>
                {formFields[index + 1] && (
                  <label className="form-label-double">
                    {formFields[index + 1]}:
                    <input
                      className="form-input-double"
                      type="number"
                      name={formFields[index + 1]}
                      value={formData[formFields[index + 1]]}
                      onChange={handleChange}
                      required
                    />
                  </label>
                )}
              </div>
            ) : null}
          </React.Fragment>
        ))}
        <button type="submit" className="submit-button1">
          Predict
        </button>
      </form>
      {prediction !== null && (
        <div>
          <p>
            {prediction === 1
              ? "Positive for Parkinson's Disease"
              : "Negative for Parkinson's Disease"}
          </p>
        </div>
      )}
    </div>
  );
}

export default Parkinsons;
