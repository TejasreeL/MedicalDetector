from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the pre-trained ML model
diseases_model = joblib.load('./multiplediseases/multiple_diseases.sav')

# List of all possible symptoms
all_symptoms = [
    'itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 
    'joint_pain', 'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting', 
    'burning_micturition', 'spotting_ urination', 'fatigue', 'weight_gain', 'anxiety', 
    'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy', 
    'patches_in_throat', 'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes', 
    'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish_skin', 
    'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 
    'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine', 
    'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach', 
    'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 
    'throat_irritation', 'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 
    'chest_pain', 'weakness_in_limbs', 'fast_heart_rate', 'pain_during_bowel_movements', 
    'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness', 
    'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 
    'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties', 
    'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 
    'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints', 
    'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness', 
    'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort', 'foul_smell_of urine', 
    'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)', 
    'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 
    'belly_pain', 'abnormal_menstruation', 'dischromic _patches', 'watering_from_eyes', 
    'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 
    'lack_of_concentration', 'visual_disturbances', 'receiving_blood_transfusion', 
    'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen', 
    'history_of_alcohol_consumption', 'fluid_overload', 'blood_in_sputum', 
    'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 
    'blackheads', 'scurring', 'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails', 
    'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze'
]

@app.route('/diseases', methods=['POST'])
def receive_data():
    data = request.get_json()
    # Extract only the 'value' fields from the received data
    received_symptoms = [item['value'] for item in data]
    print(f"Received symptoms: {received_symptoms}")

    # Create a binary vector for the symptoms
    symptoms_vector = [1 if symptom in received_symptoms else 0 for symptom in all_symptoms]
    symptoms_vector = np.array(symptoms_vector).reshape(1, -1)
    
    # Predict the disease using the ML model
    prediction = diseases_model.predict(symptoms_vector)
    predicted_disease = prediction[0]
    print(f"Predicted disease: {predicted_disease}")
    
    response = {"status": "success", "predicted_disease": predicted_disease.tolist()}
    return jsonify(response)

diabetes_model = joblib.load('./SepModels/diabetes_model.sav')

# List of features for diabetes prediction
features_diabetes = [
    'Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 
    'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age'
]

@app.route('/predict_diabetes', methods=['POST'])
def predict_diabetes():
    data = request.get_json()
    
    # Extract feature values in the order expected by the model
    feature_values = [data.get(feature, 0) for feature in features_diabetes]
    print(f"Received features: {feature_values}")

    # Convert the feature values to a numpy array
    input_vector = np.array(feature_values).reshape(1, -1)
    
    # Predict the probability of diabetes
    prediction = diabetes_model.predict(input_vector)
    predicted_diabetes = int(prediction[0])  # Convert int64 to int
    print(f"Predicted diabetes: {predicted_diabetes}")
    
    response = {"status": "success", "predicted_diabetes": predicted_diabetes}
    return jsonify(response)

model = joblib.load('./SepModels/heartDisease_model.sav')

@app.route('/predict_heart_disease', methods=['POST'])
def predict_heart_disease():
    data = request.get_json()
    features = np.array([[
        data['age'],
        data['sex'],
        data['cp'],
        data['trestbps'],
        data['chol'],
        data['fbs'],
        data['restecg'],
        data['thalach'],
        data['exang'],
        data['oldpeak'],
        data['slope'],
        data['ca'],
        data['thal']
    ]])
    prediction = model.predict(features)
    return jsonify({'predicted_heart_disease': int(prediction[0])})

parkinsons = joblib.load('./SepModels/parkinsons_model.sav')

@app.route('/predict_parkinsons', methods=['POST'])
def predict_parkinsons():
    data = request.get_json()
    features = np.array([[
        data['MDVP:Fo(Hz)'],
        data['MDVP:Fhi(Hz)'],
        data['MDVP:Flo(Hz)'],
        data['MDVP:Jitter(%)'],
        data['MDVP:Jitter(Abs)'],
        data['MDVP:RAP'],
        data['MDVP:PPQ'],
        data['Jitter:DDP'],
        data['MDVP:Shimmer'],
        data['MDVP:Shimmer(dB)'],
        data['Shimmer:APQ3'],
        data['Shimmer:APQ5'],
        data['MDVP:APQ'],
        data['Shimmer:DDA'],
        data['NHR'],
        data['HNR'],
        data['RPDE'],
        data['DFA'],
        data['spread1'],
        data['spread2'],
        data['D2'],
        data['PPE']
    ]])
    prediction = parkinsons.predict(features)
    return jsonify({'predicted_parkinsons': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
