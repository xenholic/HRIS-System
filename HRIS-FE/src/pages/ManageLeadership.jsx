/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

function ManageLeadership() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="row">
              <div className="col-xl-12 col-sm-12 col-12">
                <div className="breadcrumb-path mb-4">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">
                        <img
                          src="assets/img/dash.png"
                          className="mr-2"
                          alt="breadcrumb"
                        />
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active"> Manage</li>
                  </ul>
                  <h3>Manage</h3>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 mb-4">
                <div className="head-link-set">
                  <ul>
                    <li>
                      <Link to="/manage">Account Roles</Link>
                    </li>
                    <li>
                      <a className="active" href="#">
                        Leadership Roles
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 mb-4">
                <div className="card grid-views">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12">
                        <div className="card">
                          <div className="card-header">
                            <div className="employee-head">
                              <h2>Line Manager</h2>
                              <ul>
                                <li>
                                  <img
                                    src="../assets/img/profiles/avatar-15.jpg"
                                    alt="profile"
                                    className="img-table"
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="employee-contents">
                              <p>
                                They can see and do everything – best not to
                                have many with this role.
                              </p>
                              <Link className="btn-addmembers" to="/super-admin">
                                View Permission
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12">
                        <div className="card">
                          <div className="card-header">
                            <div className="employee-head">
                              <h2>Team Lead</h2>
                              <ul>
                                <li>
                                  <img
                                    src="../assets/img/profiles/avatar-14.jpg"
                                    alt="profile"
                                    className="img-table"
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="employee-contents">
                              <p>
                                Admin to help sort stuff, but have less access
                                to confidential information like salaries.
                              </p>
                              <Link className="btn-addmembers" to="/super-admin">
                                View Permission
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12">
                        <div className="card">
                          <div className="card-header">
                            <div className="employee-head">
                              <h2>Time Off Approver</h2>
                              <ul>
                                <li>
                                  <img
                                    src="../assets/img/profiles/avatar-10.jpg"
                                    alt="profile"
                                    className="img-table"
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="employee-contents">
                              <p>
                                They sort out your payroll and have access to
                                everyones salary information.
                              </p>
                              <Link className="btn-addmembers" to="/super-admin">
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

        <div className="customize_popup">
          <div
            className="modal fade"
            id="addteam"
            data-backdrop="static"
            data-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lgs">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Create New Team
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className=" col-md-12 p-0">
                    <div className=" form-popup">
                      <label>Team Name</label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">
                    Add
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
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

export default ManageLeadership;
