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
      <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6 my-5">
            <h2 className="display-3 fw-normal text-center">...<span className="text-primary">Register</span>
            </h2>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control form-control-lg" name="username"
                  placeholder="Enter Your Username" />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control form-control-lg" name="password"
                  placeholder="Enter Your Password" />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control form-control-lg" name="firstname"
                    placeholder="Enter Your Firstname" />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control form-control-lg" name="lastname"
                    placeholder="Enter Your Lastname" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="date" className="form-control form-control-lg" name="birthdate" />
                </div>

                <div className="col-md-6 mt-2">
                  <label className="form-control-lg">Gender :</label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                    // checked={gender === 0}

                    />
                    <label className="px-2">Male</label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                    // checked={gender === 1}
                    />
                    <label className="px-2">Female</label>
                </div>
              </div>
              <div className="mb-3">
                <input type="email" className="form-control form-control-lg" name="email"
                  placeholder="Enter Your Email Address" />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control form-control-lg" name="phone"
                  placeholder="Enter Your Phone" />
              </div>
              <div className="mb-3">
                <textarea type="text" className="form-control form-control-lg" name="address"
                  placeholder="Enter Your Address" />
              </div>
              
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-dark btn-lg rounded-1">Register it now</button>
              </div>

              <div className="mt-4 text-center">
                <p className="mb-0 fw-normal">Have already an account? <a href="/login" className="fw-bold text-primary">Sign in</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register