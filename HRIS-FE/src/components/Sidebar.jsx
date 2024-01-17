/* eslint-disable react/no-unknown-property */
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  let navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    swal({
      title: "Logout Success",
      text: "You have been logged out successfully",
      icon: "success",
      button: "OK",
    })
    navigate("/login");
  };
  
  return (
    <div>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div className="sidebar-contents">
            <div id="sidebar-menu" className="sidebar-menu">
              <div className="mobile-show">
                <div className="offcanvas-menu">
                  <div className="user-info align-center bg-theme text-center">
                    <span
                      className="lnr lnr-cross  text-white"
                      id="mobile_btn_close"
                    >
                      X
                    </span>
                    <Link
                      href="javascript:void(0)"
                      className="d-block menu-style text-white"
                    >
                      <div className="user-avatar d-inline-block mr-3">
                        <img
                          src="../assets/img/profiles/avatar-18.jpg"
                          alt="user avatar"
                          className="rounded-circle"
                          width="50"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="sidebar-input">
                  <div className="top-nav-search">
                    <form>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search here"
                      />
                      <button className="btn" type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <ul>
                <li className="active">
                  <Link to="/">
                    <img src="../assets/img/home.svg" alt="sidebar_img" />{" "}
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to="/employees">
                    <img src="../assets/img/employee.svg" alt="sidebar_img" />
                    <span> Employees</span>
                  </Link>
                </li>
                <li>
                  <Link to="/companies">
                    <img src="../assets/img/company.svg" alt="sidebar_img" />{" "}
                    <span> Company</span>
                  </Link>
                </li>
                <li>
                  <Link to="/approvement">
                    <img src="../assets/img/check-square.svg" alt="sidebar_img" />{" "}
                    <span>Approvement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/leaves">
                    <img src="../assets/img/leave.svg" alt="sidebar_img" />{" "}
                    <span>Leave</span>
                  </Link>
                </li>
                <li>
                  <Link to="/review">
                    <img src="../assets/img/review.svg" alt="sidebar_img" />
                    <span>Review</span>
                  </Link>
                </li>
                <li>
                  <Link to="/report">
                    <img src="../assets/img/report.svg" alt="sidebar_img" />
                    <span>Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/manage">
                    <img src="../assets/img/manage.svg" alt="sidebar_img" />{" "}
                    <span>Manage</span>
                  </Link>
                </li>
                <li>
                  <Link to="/setting">
                    <img src="../assets/img/settings.svg" alt="sidebar_img" />
                    <span>Settings</span>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <img src="../assets/img/user-plus.svg" alt="sidebar_img" />
                    <span>Register New User</span>
                  </Link>
                </li>
                <li>
                  <Link to="/profile">
                    <img src="../assets/img/profile.svg" alt="sidebar_img" />{" "}
                    <span>Profile</span>
                  </Link>
                </li>
              </ul>
              <ul className="logout">
                <li>
                  <a className="">
                  <button className="btn btn-outline-light" onClick={(e) => handleLogout(e)}>
                    <img 
                    src="../assets/img/logout.svg" alt="sidebar_img" />
                    <span>Log out</span>
                  </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
