import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form , setForm] = useState({
    username : "",
    firstname : "",
    lastname : "",
    email : "",
    birthdate : "",
    phone : "",
    address : "",
    password : "",
  });

  const onSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:7092/api/register" , form);
      alert("Register Successed")
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

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
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  placeholder="Enter Your Username" />
              </div>
              <div class="mb-3">
                <input type="text" class="form-control form-control-lg" name="firstname"
                  value={form.firstname}
                  onChange={(e) => setForm({ ...form, firstname: e.target.value })}
                  placeholder="Enter Your Firstname" />
              </div>
              <div class="mb-3">
                <input type="text" class="form-control form-control-lg" name="lastname"
                  value={form.lastname}
                  onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                  placeholder="Enter Your Lastname" />
              </div>
              <div class="mb-3">
                <input type="email" class="form-control form-control-lg" name="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Enter Your Email Address" />
              </div>
              <div class="mb-3">
                <input type="date" class="form-control form-control-lg" name="birthdate" 
                  value={form.birthdate}
                  onChange={(e) => setForm({ ...form, birthdate: e.target.value })}/>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control form-control-lg" name="gender"
                  value={form.gender}
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                  placeholder="Enter Your Gender" />
              </div>
              <div class="mb-3">
                <input type="tel" class="form-control form-control-lg" name="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Enter Your Phone" />
              </div>
              <div class="mb-3">
                <input type="text" class="form-control form-control-lg" name="address"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="Enter Your Address" />
              </div>
              <div class="mb-3">
                <input type="password" class="form-control form-control-lg" name="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Enter Your Password" />
              </div>

              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-dark btn-lg rounded-1" onClick={onSubmit}>Register it now</button>
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