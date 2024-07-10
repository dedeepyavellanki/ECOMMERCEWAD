import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    username: '',
    profilePicture: null
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', user);
      Navigate('/Login')
      console.log(res.data);
      // Add success handling (e.g., redirect, notification) here
    } catch (err) {
      console.error(err.response.data.msg);
      // Add error handling (e.g., show error message) here
    }
  };

  return (
    <main className="container-fluid mt-5" >
      <form className="mx-auto w-50 bg-purple-50 p-4 rounded shadow"style={{backgroundColor: '#F3E5F5'}} onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Register</h2>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name="password" value={user.password} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input type="text" className="form-control" name="address" value={user.address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input type="text" className="form-control" name="city" value={user.city} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">State</label>
          <input type="text" className="form-control" name="state" value={user.state} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Zipcode</label>
          <input type="text" className="form-control" name="zipCode" value={user.zipCode} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Country</label>
          <input type="text" className="form-control" name="country" value={user.country} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="text" className="form-control" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input type="text" className="form-control" name="dateOfBirth" value={user.dateOfBirth} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select className="form-select" name="gender" value={user.gender} onChange={handleChange}>
            <option value="select">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" name="username" value={user.username} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Profile Picture</label>
          <input type="file" className="form-control" name="profilePicture" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-purle w-100"style={{backgroundColor:'#7E57C2'}}>Register</button>
      </form>
    </main>
  );
};

export default Register;
