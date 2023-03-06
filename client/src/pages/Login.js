// state to store the email e password
import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import axios from "axios";

export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/sinup", {
        ...values,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center">
        <div className="col-12 col-sm-8 col-lg-6 mx-auto mt-5">
          <h1 className="--text-center">Login</h1>

          <form onSubmit={(e) => handleSubmit(e)}>

            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email" name="email"
                placeholder="Email"
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
                required />
            </div>

            <div className="mb-3">
              <label htmlFor="email">Password</label>
              <input
                type="password" name="password"
                placeholder="Password"
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
                required />
            </div>

            <div>
              <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </div>
            <span>
              If you don't an account? <Link to='/signup'>Signup</Link>
            </span>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}





