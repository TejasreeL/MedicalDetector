from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the pre-trained diabetes prediction model
model = joblib.load('.\SepModels\diabetes_model.sav')
# List of features for diabetes prediction
features = [
    'Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 
    'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age'
]

@app.route('/predict_diabetes', methods=['POST'])
def predict_diabetes():
    data = request.get_json()
    
    # Extract feature values in the order expected by the model
    feature_values = [data.get(feature, 0) for feature in features]
    print(f"Received features: {feature_values}")

    # Convert the feature values to a numpy array
    input_vector = np.array(feature_values).reshape(1, -1)
    
    # Predict the probability of diabetes
    prediction = model.predict(input_vector)
    predicted_diabetes = prediction[0]
    print(f"Predicted diabetes: {predicted_diabetes}")
    
    response = {"status": "success", "predicted_diabetes": predicted_diabetes}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
