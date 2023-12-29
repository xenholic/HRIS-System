/* eslint-disable react/no-unknown-property */

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

function Login() {

  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [formLogin, setFormLogin] = useState({
  //   email: "",
  //   password: "",
  // });

  // const inputDatahandler = (e) => {
  //   e.preventDefault();
  //   const newLogin = {
  //     ...formLogin,
  //   };
  //   newLogin[e.target.name] = e.target.value;
  //   setFormLogin(newLogin);
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log("haha");
  //   console.log(formLogin, "<<< form login");
  //   dispatch(loginUser(formLogin))
  //     .then((response) => {
  //       console.log(response, "data");
  //       localStorage.setItem("access_token", response.data.access_token);
  //       localStorage.setItem("username", response.data.username);
  //       localStorage.setItem("email", response.data.email);
  //       localStorage.setItem("id", response.data.id);
  //       localStorage.setItem("profilePic", response.data.profilePic);
  //       localStorage.setItem("role", "freelancer");
  //       navigate("/user");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     }); 
  // };

  // const login = async (provider) => {
  //   const result = await signInWithPopup(auth, provider);
  //   // console.log(result.user);
  //   try {
  //     console.log("test");
  //     const response = await axios({
  //       method: "POST",
  //       url: "http://localhost:3000/users/socialLogin",
  //       data: result.user,
  //     });
  //     console.log(response, "data");
  //     localStorage.setItem("access_token", response.data.access_token);
  //     localStorage.setItem("username", response.data.username);
  //     localStorage.setItem("email", response.data.email);
  //     localStorage.setItem("id", response.data.id);
  //     localStorage.setItem("profilePic", response.data.profilePic);
  //     localStorage.setItem("role", "freelancer");
  //     navigate("/user");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <img
              className="img-fluid logo-dark mb-2"
              src="../assets/img/logo.png"
              alt="Logo"
            />
            <div className="loginbox">
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Login</h1>
                  <p className="account-subtitle">Welcome to PTGR Super System</p>
                  <form action="index.html">
                    <div className="form-group">
                      <label className="form-control-label">Email Address</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">Password</label>
                      <div className="pass-group">
                        <input
                          type="password"
                          className="form-control pass-input"
                        />
                        <span className="fas fa-eye toggle-password"></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-6">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cb1"
                            />
                            <label className="custom-control-label" for="cb1">
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col-6 text-right">
                          <a className="forgot-link" href="forgot-password.html">
                            Forgot Password ?
                          </a>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-lg btn-block btn-primary"
                      type="submit"
                    >
                      Login
                    </button>
                    <div className="login-or">
                      <span className="or-line"></span>
                      <span className="span-or">or</span>
                    </div>

                    <div className="social-login mb-3">
                      <span>Login with</span>
                      <a href="#" className="facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="google">
                        <i className="fab fa-google"></i>
                      </a>
                    </div>

                    <div className="text-center dont-have">
                    If you need account{" "}
                      <a href="/login">Please Contact Miss Sarah</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
