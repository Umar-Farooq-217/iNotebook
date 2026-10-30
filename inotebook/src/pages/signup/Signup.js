import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  const { name, email, password , cpassword } = credentials;
  const navigate = useNavigate();

  
const signUpHandler = async (e) => {
  e.preventDefault();

  if (password !== cpassword) {
    toast.error("Your passwords do not match!");
    return;
  }

  try {
    const response = await fetch(
      'http://localhost:5000/api/auth/createUser',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      }
    );

    const json = await response.json();

    console.log("Status:", response.status);
    console.log("Backend response:", json);

    if (response.ok && json.success) {
      localStorage.setItem('token', json.authtoken);

      toast.success("Account created successfully!");

      navigate('/');
    }else if (json.error === "User already exists with this email") {

  toast.error("Account already exists! Please login.");

  navigate('/login');

} else {
      toast.error(json.error || json.message || "Signup failed!");
    }

  } catch (error) {
    console.error("Signup Error:", error);

    toast.error("Backend connection failed!");
  }
};

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })

  }
  return (
    <div className="container my-3">
      <h1 className='my-3'>SignUp in INotebook</h1>
      <form onSubmit={signUpHandler}>
        <div className="form-group my-2" >
          <label htmlFor="name">Name </label>
          <input onChange={onChange} name='name' type="text" className="form-control" id="name" aria-describedby="emailHelp" />
        </div>
        <div className="form-group my-2" >
          <label htmlFor="email">Email address</label>
          <input onChange={onChange} name='email' type="email" className="form-control" id="email" aria-describedby="emailHelp" />
        </div>
        <div className="form-group my-2">
          <label htmlFor="password">Password</label>
          <input onChange={onChange} name='password' type="password" className="form-control" id="password" />
        </div>
        <div className="form-group my-2">
          <label htmlFor="cpassword">Confirm Password</label>
          <input onChange={onChange} name='cpassword' type="password" className="form-control" id="cpassword" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup