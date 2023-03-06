import React from 'react'

export default function Login() {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center">
        <div className="col-12 col-sm-8 col-lg-6  mt-5">
          <h1 className="--text-center">Login</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Password</label>
              <input type="password" name="password" placeholder="Password" required />
            </div>

            <div >
              <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}










