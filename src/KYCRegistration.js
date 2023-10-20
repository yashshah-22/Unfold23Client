import React, { useState } from 'react';
import { Container, Form, Button, Spinner, Alert } from 'react-bootstrap';
import './KYCRegistration.css';

const KYCRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    accountAddress: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulating form submission with a delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <Container className="kyc-form-container mt-5">
      <h1 className="text-center">KYC Registration Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email/Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your email/username"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="accountAddress">
          <Form.Label>Account Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your account address"
            value={formData.accountAddress}
            onChange={(e) => setFormData({ ...formData, accountAddress: e.target.value })}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
      {loading && (
        <div className="kyc-loading">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {success && (
        <Alert variant="success" className="kyc-success">
          Verification completed successfully!
        </Alert>
      )}
    </Container>
  );
};

export default KYCRegistration;
