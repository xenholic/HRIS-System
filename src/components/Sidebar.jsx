/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div class="sidebar" id="sidebar">
        <div class="sidebar-inner slimscroll">
          <div class="sidebar-contents">
            <div id="sidebar-menu" class="sidebar-menu">
              <div class="mobile-show">
                <div class="offcanvas-menu">
                  <div class="user-info align-center bg-theme text-center">
                    <span
                      class="lnr lnr-cross  text-white"
                      id="mobile_btn_close"
                    >
                      X
                    </span>
                    <Link
                      href="javascript:void(0)"
                      class="d-block menu-style text-white"
                    >
                      <div class="user-avatar d-inline-block mr-3">
                        <img
                          src="../assets/img/profiles/avatar-18.jpg"
                          alt="user avatar"
                          class="rounded-circle"
                          width="50"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div class="sidebar-input">
                  <div class="top-nav-search">
                    <form>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search here"
                      />
                      <button class="btn" type="submit">
                        <i class="fas fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <ul>
                <li class="active">
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
                  <Link to="/calendar">
                    <img src="../assets/img/calendar.svg" alt="sidebar_img" />{" "}
                    <span>Calendar</span>
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
                  <Link to="/profile">
                    <img src="../assets/img/profile.svg" alt="sidebar_img" />{" "}
                    <span>Profile</span>
                  </Link>
                </li>
              </ul>
              <ul class="logout">
                <li>
                  <a href="profile.html">
                    <img src="../assets/img/logout.svg" alt="sidebar_img" />
                    <span>Log out</span>
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
