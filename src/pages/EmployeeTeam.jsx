/* eslint-disable react/no-unknown-property */

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";


function EmployeeTeam() {
  return (
    <div>
    <Topbar/>
      <Sidebar/>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-xl-12 col-sm-12 col-12 mb-4">
              <div className="breadcrumb-path ">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <img
                        src="../assets/img/dash.png"
                        className="mr-2"
                        alt="breadcrumb"
                      />
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active"> Employees</li>
                </ul>
                <h3>Employees</h3>
              </div>
            </div>
            <div className="col-xl-12 col-sm-12 col-12 mb-4">
              <div className="head-link-set">
                <ul>
                  <li>
                    <Link to="/employees">All</Link>
                  </li>
                  <li>
                    <Link to="/employees/office">
                      Office
                    </Link>
                  </li>
                  <li>
                    <Link className="active" to="/employees/team">Team</Link>
                  </li>
                </ul>
                <Link className="btn-add" data-toggle="modal" data-target="#addteam">
                  <i data-feather="plus"></i> Add Team
                </Link>
              </div>
            </div>
            <div className="col-xl-12 col-sm-12 col-12 ">
              <div className="card m-0">
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="card">
                        <div className="card-header">
                          <div className="employee-head">
                            <h2>PHP</h2>
                            <ul>
                              <li>
                                <a
                                  className="edit_employee"
                                  data-toggle="modal"
                                  data-target="#edit"
                                >
                                  <i data-feather="edit"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="edit_delete"
                                  data-toggle="modal"
                                  data-target="#delete"
                                >
                                  <i data-feather="trash-2"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="employee-content">
                            <div className="employee-image">
                              <div className="avatar-group">
                                <div className="avatar avatar-xs group_img group_header">
                                  <img
                                    className="avatar-img rounded-circle"
                                    alt="User Image"
                                    src="../assets/img/profiles/avatar-14.jpg"
                                  />
                                </div>
                                <div className="avatar avatar-xs group_img group_header">
                                  <img
                                    className="avatar-img rounded-circle"
                                    alt="User Image"
                                    src="../assets/img/profiles/avatar-15.jpg"
                                  />
                                </div>
                              </div>
                            </div>
                            <a
                              className="btn-addmember"
                              data-toggle="modal"
                              data-target="#addteam"
                            >
                              Add Members
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="card">
                        <div className="card-header">
                          <div className="employee-head">
                            <h2>Designing</h2>
                            <ul>
                              <li>
                                <a
                                  className="edit_employee"
                                  data-toggle="modal"
                                  data-target="#edit"
                                >
                                  <i data-feather="edit"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="edit_delete"
                                  data-toggle="modal"
                                  data-target="#delete"
                                >
                                  <i data-feather="trash-2"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="employee-content">
                            <div className="employee-image">
                              <div className="avatar-group">
                                <div className="avatar avatar-xs group_img group_header">
                                  <img
                                    className="avatar-img rounded-circle"
                                    alt="User Image"
                                    src="../assets/img/profiles/avatar-14.jpg"
                                  />
                                </div>
                                <div className="avatar avatar-xs group_img group_header">
                                  <img
                                    className="avatar-img rounded-circle"
                                    alt="User Image"
                                    src="../assets/img/profiles/avatar-15.jpg"
                                  />
                                </div>
                              </div>
                            </div>
                            <a
                              className="btn-addmember"
                              data-toggle="modal"
                              data-target="#addteam"
                            >
                              Add Members
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="card">
                        <div className="card-header">
                          <div className="employee-head">
                            <h2>IOS</h2>
                            <ul>
                              <li>
                                <a
                                  className="edit_employee"
                                  data-toggle="modal"
                                  data-target="#edit"
                                >
                                  <i data-feather="edit"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="edit_delete"
                                  data-toggle="modal"
                                  data-target="#delete"
                                >
                                  <i data-feather="trash-2"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="employee-content">
                            <div className="employee-image">
                              <div className="avatar-group">
                                <div className="avatar avatar-xs group_img group_header">
                                  <img
                                    className="avatar-img rounded-circle"
                                    alt="User Image"
                                    src="../assets/img/profiles/avatar-14.jpg"
                                  />
                                </div>
                                <div className="avatar avatar-xs group_img group_header">
                                  <img
                                    className="avatar-img rounded-circle"
                                    alt="User Image"
                                    src="../assets/img/profiles/avatar-15.jpg"
                                  />
                                </div>
                              </div>
                            </div>
                            <a
                              className="btn-addmember"
                              data-toggle="modal"
                              data-target="#addteam"
                            >
                              Add Members
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="card">
                        <div className="card-header">
                          <div className="employee-head">
                            <h2>Android</h2>
                            <ul>
                              <li>
                                <a
                                  className="edit_employee"
                                  data-toggle="modal"
                                  data-target="#edit"
                                >
                                  <i data-feather="edit"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="edit_delete"
                                  data-toggle="modal"
                                  data-target="#delete"
                                >
                                  <i data-feather="trash-2"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="employee-content">
                            <div className="employee-image">
                              <div className="avatar-group">
                                <div className="avatar avatar-xs group_img group_header">
                                  <img
                                    className="avatar-img rounded-circle"
                                    alt="User Image"
                                    src="../assets/img/profiles/avatar-14.jpg"
                                  />
                                </div>
                                <div className="avatar avatar-xs group_img group_header">
                                  <img
                                    className="avatar-img rounded-circle"
                                    alt="User Image"
                                    src="../assets/img/profiles/avatar-15.jpg"
                                  />
                                </div>
                              </div>
                            </div>
                            <a
                              className="btn-addmember"
                              data-toggle="modal"
                              data-target="#addteam"
                            >
                              Add Members
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="card">
                        <div className="card-header">
                          <div className="employee-head">
                            <h2>Business</h2>
                            <ul>
                              <li>
                                <a
                                  className="edit_employee"
                                  data-toggle="modal"
                                  data-target="#edit"
                                >
                                  <i data-feather="edit"></i>
                                </a>
                              </li>
                              <li>
                                <a className="edit_delete">
                                  <i data-feather="trash-2"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="employee-content">
                            <div className="employee-image">
                              <div className="avatar-group">
                                <div className="avatar avatar-xs group_img group_header">
                                  <img
                                    className="avatar-img rounded-circle"
                                    alt="User Image"
                                    src="../assets/img/profiles/avatar-14.jpg"
                                  />
                                </div>
                                <div className="avatar avatar-xs group_img group_header">
                                  <img
                                    className="avatar-img rounded-circle"
                                    alt="User Image"
                                    src="../assets/img/profiles/avatar-15.jpg"
                                  />
                                </div>
                              </div>
                            </div>
                            <a
                              className="btn-addmember"
                              data-toggle="modal"
                              data-target="#addteam"
                            >
                              Add Members
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="card">
                        <div className="card-header">
                          <div className="employee-head">
                            <h2>Testing</h2>
                            <ul>
                              <li>
                                <a
                                  className="edit_employee"
                                  data-toggle="modal"
                                  data-target="#edit"
                                >
                                  <i data-feather="edit"></i>
                                </a>
                              </li>
                              <li>
                                <a className="edit_delete">
                                  <i data-feather="trash-2"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="employee-content">
                            <div className="employee-image">
                              <div className="avatar-group">
                                <div className="avatar avatar-xs group_img group_header">
                                  <img
                                    className="avatar-img rounded-circle"
                                    alt="User Image"
                                    src="../assets/img/profiles/avatar-14.jpg"
                                  />
                                </div>
                                <div className="avatar avatar-xs group_img group_header">
                                  <img
                                    className="avatar-img rounded-circle"
                                    alt="User Image"
                                    src="../assets/img/profiles/avatar-15.jpg"
                                  />
                                </div>
                              </div>
                            </div>
                            <a
                              className="btn-addmember"
                              data-toggle="modal"
                              data-target="#addteam"
                            >
                              Add Members
                            </a>
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
          tabindex="-1"
          aria-labelledby="staticBackdropLabela"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabela">
                  Create New Team
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className=" col-md-12 p-0">
                  <div className=" form-popup m-0">
                    <input type="text" placeholder="Name" />
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
      <div className="customize_popup">
        <div
          className="modal fade"
          id="edit"
          tabindex="-1"
          aria-labelledby="staticBackdropLa"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLa">
                  Edit Employee
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className=" col-md-12 p-0">
                  <div className=" form-popup m-0">
                    <input type="text" placeholder="Name" />
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
      <div className="customize_popup">
        <div
          className="modal fade"
          id="delete"
          tabindex="-1"
          aria-labelledby="staticBackdropLabels1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
              <div className="modal-header text-centers border-0">
                <h5 className="modal-title text-center" id="staticBackdropLabels1">
                  Are You Sure Want to Delete?
                </h5>
              </div>
              <div className="modal-footer text-centers">
                <button type="button" className="btn btn-primary">
                  Delete
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
  );
}

export default EmployeeTeam;
