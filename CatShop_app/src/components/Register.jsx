import React from 'react'

const Register = () => {
  return (
    <section style={{ background: 'url("./src/images/background-img.png")' }}>
      <div class="container">
        <div class="row">
          <div class="offset-md-3 col-md-6 my-5">
            <h2 class="display-3 fw-normal text-center">...<span class="text-primary">Register</span>
            </h2>
            <form>
              <div class="mb-3">
                <input type="text" class="form-control form-control-lg" name="username"
                  placeholder="Enter Your Username" />
              </div>
              <div class="mb-3">
                <input type="text" class="form-control form-control-lg" name="firstname"
                  placeholder="Enter Your Firstname" />
              </div>
              <div class="mb-3">
                <input type="text" class="form-control form-control-lg" name="lastname"
                  placeholder="Enter Your Lastname" />
              </div>
              <div class="mb-3">
                <input type="email" class="form-control form-control-lg" name="email"
                  placeholder="Enter Your Email Address" />
              </div>
              <div class="mb-3">
                <input type="date" class="form-control form-control-lg" name="birthdate" />
              </div>
              <div class="mb-3">
                <input type="text" class="form-control form-control-lg" name="gender"
                  placeholder="Enter Your Gender" />
              </div>
              <div class="mb-3">
                <input type="tel" class="form-control form-control-lg" name="phone"
                  placeholder="Enter Your Phone" />
              </div>
              <div class="mb-3">
                <input type="text" class="form-control form-control-lg" name="address"
                  placeholder="Enter Your Address" />
              </div>
              <div class="mb-3">
                <input type="password" class="form-control form-control-lg" name="password"
                  placeholder="Enter Your Password" />
              </div>

              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-dark btn-lg rounded-1">Register it now</button>
              </div>

              <div class="mt-4 text-center">
                <p class="mb-0 fw-normal">Have already an account? <a href="/login" class="fw-bold text-primary">Sign in</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register