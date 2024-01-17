/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../store/actions/actionEmployee";
import swal from 'sweetalert';

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function Register() {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [loading, setLoading] = useState(false);
    const [inputFormUser, setInputFormUser] = useState({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        role: "",
      });

      const handleRegister = (e) => {
        e.preventDefault();
        dispatch(register(inputFormUser))
          .then((response) => {
            if (response.ok) {
              swal ("Good job!", "Register Success!", "success")
              navigate("/");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };



  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className="mt-5">
        <div className="main-wrapper login-body mt-4">
            <div className="container mt-4">
            <img className="img-fluid logo-dark mb-2" src="assets/img/logo.png" alt="Logo"/>
                    <h1 className="mt-4">Register</h1>
                    <h1 className="account-subtitle">Registering New Account</h1>

                    <form method="POST">
                      <div className="form-group">
                        <label className="form-control-label mb-2">Username</label>
                        <input
                         onChange={(e) => {
                            setInputFormUser({
                              ...inputFormUser,
                              username: e.target.value,
                            });
                          }}
                        className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label className="form-control-label mb-2">Email Address</label>
                        <input
                          onChange={(e) => {
                            setInputFormUser({
                              ...inputFormUser,
                              email: e.target.value,
                            });
                          }}
                        className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label className="form-control-label mb-2">Password</label>
                        <input
                          onChange={(e) => {
                            setInputFormUser({
                              ...inputFormUser,
                              password: e.target.value,
                            });
                          }}
                        className="form-control" type="password" />
                      </div>
                      <div className="form-group">
                        <label className="form-control-label mb-2">Phone Number</label>
                        <input
                          onChange={(e) => {
                            setInputFormUser({
                              ...inputFormUser,
                              phoneNumber: e.target.value,
                            });
                          }}
                        className="form-control" type="text" />
                      </div>
                      {/* <div className="form-group">
                        <label className="form-control-label mb-2">
                          profile Pic
                        </label>
                        <input className="form-control" type="text" />
                      </div> */}
                      <div className="form-group">
                        <label className="form-control-label mb-2">
                          Role
                        </label>
                       <select
                           onChange={(e) => {
                            setInputFormUser({
                              ...inputFormUser,
                              role: e.target.value,
                            });
                          }}
                          name="type"
                       className="form-control">
                            <option value="Manager">Manager</option>
                            <option value="admin">Admin</option>
                            <option value="staff">Staff</option>
                        </select>
                      </div>
                      <div className="form-group mb-0">
                        <button
                          onClick={(e) => {
                            handleRegister(e);
                          }}
                          className="btn btn-lg btn-block btn-primary mt-3"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                    <div className="text-center dont-have">
                      Already have an account? <Link to="/">Login</Link>
                    </div>

            </div>
          </div>
        </div>
    </div>
  );
}

export default Register;
