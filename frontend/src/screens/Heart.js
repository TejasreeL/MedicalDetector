import React, { useState } from "react";
import axios from "axios";
import "./sep.css";

function HeartDisease() {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
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
      .post("http://127.0.0.1:5000/predict_heart_disease", formData)
      .then((response) => {
        setPrediction(response.data.predicted_heart_disease);
      })
      .catch((error) => {
        console.error("There was an error making the request!", error);
      });
  };

  const formFields = Object.keys(formData);

  return (
    <div className="mx-auto text-center">
      <h1>Heart Disease Prediction</h1>
      <form onSubmit={handleSubmit} className="heart-disease-form">
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
              ? "Positive for Heart Disease"
              : "Negative for Heart Disease"}
          </p>
        </div>
      )}
    </div>
  );
}

export default HeartDisease;
