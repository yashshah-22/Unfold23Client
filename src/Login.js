import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css'; // Create a custom CSS file for additional styling
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="login-form p-4 border shadow rounded">
        <h2>Login to Your Wallet</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/wallet">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
