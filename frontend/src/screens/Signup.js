import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setloading]=useState(false);
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      setloading(true);
  
      const { data } = await axios.post('http://localhost:8080/api/users', {
        firstName,lastName, email, password
      }, config);

     
  
      
        // Redirect to registration form page
        navigate('/login');
      
  
      setloading(false);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };
  

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="fw-bold mb-4 text-center">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">FirstName</label>
                  <input type="text" className="form-control" id="name" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">LastName</label>
                  <input type="text" className="form-control" id="name" value={lastName} onChange={(e) => setlastName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign Up</button>
              </form>
              <div className="text-center mt-3">
                Already have an account? <Link to="/login">Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
