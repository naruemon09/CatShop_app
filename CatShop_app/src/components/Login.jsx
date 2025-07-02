import React from 'react'

const Login = () => {
  return (
    <section class="vh-100 d-flex justify-content-center align-items-center" style={{background: 'url("./src/images/background-img.png")'}}>
    <div class="container">
      <div class="row">
        <div class="offset-md-3 col-md-6 my-5">
          <h2 class="display-3 fw-normal text-center">...<span class="text-primary">Login</span>
          </h2>
          <form>
            <div class="mb-3">
              <input type="text" class="form-control form-control-lg" name="username"
                placeholder="Enter Your Username"/>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control form-control-lg" name="password"
                placeholder="Enter Your Password"/>
            </div>
            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-dark btn-lg rounded-1">Login it now</button>
            </div>
            <div class="mt-4 text-center">
              <p class="mb-0 fw-normal">Don't have an account? <a href="/register" class="fw-bold text-primary">Sign Up</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login