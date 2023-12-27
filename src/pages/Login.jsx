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
      <div class="main-wrapper login-body">
        <div class="login-wrapper">
          <div class="container">
            <img
              class="img-fluid logo-dark mb-2"
              src="assets/img/logo.png"
              alt="Logo"
            />
            <div class="loginbox">
              <div class="login-right">
                <div class="login-right-wrap">
                  <h1>Login</h1>
                  <p class="account-subtitle">Welcome to PTGR Super System</p>
                  <form action="index.html">
                    <div class="form-group">
                      <label class="form-control-label">Email Address</label>
                      <input type="email" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label class="form-control-label">Password</label>
                      <div class="pass-group">
                        <input
                          type="password"
                          class="form-control pass-input"
                        />
                        <span class="fas fa-eye toggle-password"></span>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="row">
                        <div class="col-6">
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="cb1"
                            />
                            <label class="custom-control-label" for="cb1">
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div class="col-6 text-right">
                          <a class="forgot-link" href="forgot-password.html">
                            Forgot Password ?
                          </a>
                        </div>
                      </div>
                    </div>
                    <button
                      class="btn btn-lg btn-block btn-primary"
                      type="submit"
                    >
                      Login
                    </button>
                    <div class="login-or">
                      <span class="or-line"></span>
                      <span class="span-or">or</span>
                    </div>

                    <div class="social-login mb-3">
                      <span>Login with</span>
                      <a href="#" class="facebook">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" class="google">
                        <i class="fab fa-google"></i>
                      </a>
                    </div>

                    <div class="text-center dont-have">
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
