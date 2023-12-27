/* eslint-disable react/no-unknown-property */
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function Manage() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div>
        <div class="page-wrapper">
          <div class="content container-fluid">
            <div class="row">
              <div class="col-xl-12 col-sm-12 col-12">
                <div class="breadcrumb-path mb-4">
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">
                        <img
                          src="../assets/img/dash.png"
                          class="mr-2"
                          alt="breadcrumb"
                        />
                        Home
                      </a>
                    </li>
                    <li class="breadcrumb-item active"> Manage</li>
                  </ul>
                  <h3>Manage</h3>
                </div>
              </div>
              <div class="col-xl-12 col-sm-12 col-12 mb-4">
                <div class="head-link-set">
                  <ul>
                    <li>
                      <a class="active" href="#">
                        Account Roles
                      </a>
                    </li>
                    <li>
                      <Link to="/manage-leadership">Leadership Roles</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-12 col-sm-12 col-12 mb-4">
                <div class="card grid-views">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-xl-6 col-sm-12 col-12">
                        <div class="card">
                          <div class="card-header">
                            <div class="employee-head">
                              <h2>Super Admin</h2>
                              <ul>
                                <li>
                                  <img
                                    src="../assets/img/profiles/avatar-15.jpg"
                                    alt="profile"
                                    class="img-table"
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="employee-contents">
                              <p>
                                They can see and do everything – best not to
                                have many with this role.
                              </p>
                              <Link class="btn-addmembers" to="/super-admin">
                                View Permission
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6 col-sm-12 col-12">
                        <div class="card">
                          <div class="card-header">
                            <div class="employee-head">
                              <h2> Admin</h2>
                              <ul>
                                <li>
                                  <img
                                    src="../assets/img/profiles/avatar-14.jpg"
                                    alt="profile"
                                    class="img-table"
                                  />
                                </li>{" "}
                              </ul>
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="employee-contents">
                              <p>
                                Admin to help sort stuff, but have less access
                                to confidential information like salaries.
                              </p>
                              <Link class="btn-addmembers" to="/super-admin">
                                View Permission
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6 col-sm-12 col-12">
                        <div class="card">
                          <div class="card-header">
                            <div class="employee-head">
                              <h2>Payroll Admin</h2>
                              <ul>
                                <li>
                                  <img
                                    src="../assets/img/profiles/avatar-10.jpg"
                                    alt="profile"
                                    class="img-table"
                                  />
                                </li>{" "}
                              </ul>
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="employee-contents">
                              <p>
                                They sort out your payroll and have access to
                                everyones salary information.
                              </p>
                              <Link class="btn-addmembers" to="/super-admin">
                                View Permission
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6 col-sm-12 col-12">
                        <div class="card">
                          <div class="card-header">
                            <div class="employee-head">
                              <h2>Team Member</h2>
                              <ul>
                                <li>
                                  <img
                                    src="../assets/img/profiles/avatar-15.jpg"
                                    alt="profile"
                                    class="img-table"
                                  />
                                </li>{" "}
                              </ul>
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="employee-contents">
                              <p>
                                Team Members have the most limited access  most
                                people should have this role.
                              </p>
                              <Link class="btn-addmembers" to="/super-admin">
                                View Permission
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="customize_popup">
          <div
            class="modal fade"
            id="addteam"
            data-backdrop="static"
            data-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lgs">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Create New Team
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class=" col-md-12 p-0">
                    <div class=" form-popup">
                      <label>Team Name</label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary">
                    Add
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage;
