import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center">
        <div className="col-12 col-sm-8 col-lg-6 mx-auto mt-5">
          <h1 className="--text-center">SignUp</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Password</label>
              <input type="password" name="password" placeholder="Password" required />
            </div>

            <div>
              <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </div>
            <span>
              Already have an account? <Link to='/login'>Login</Link>
            </span>
          </form>
        </div>

      </div>
    </div>
  )
}





