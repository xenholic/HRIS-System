/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

function EmployeeOffice() {
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
                    <Link className="active" to="Office">
                        Office
                      </Link>
                    </li>
                    <li>
                      <Link to="/employees/team">
                        Team
                      </Link>
                    </li>
                  </ul>
                  <Link className="btn-add" to="/add-employee">
                    <i data-feather="plus"></i> Add Person
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-xl-10 col-sm-8 col-12 ">
                <label className="employee_count">1 Office</label>
              </div>
              
            </div>
            <div className="row">
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="card  card-lists">
                  <div className="card-header  ">
                    <h2 className="card-titles">Create New Office</h2>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-8 col-sm-12 col-12 ">
                        <input
                          type="text"
                          placeholder="Office Name"
                          className="input-form"
                        />
                      </div>
                      <div className="col-xl-2 col-sm-6 col-6 ">
                        <a href="#" className="btn-create ">
                          Create Office{" "}
                        </a>
                      </div>
                      <div className="col-xl-2 col-sm-6 col-6 ">
                        <a href="#" className="btn-cancel ">
                          Cancel{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="card">
                  <div className="card-header create-formhead">
                    <h2 className="card-titles">
                      Focus Technologies<span>Head Office</span>
                    </h2>
                    <a
                      data-toggle="modal"
                      data-target="#edit"
                      className="edit-link"
                    >
                      <i data-feather="edit"></i>{" "}
                    </a>
                  </div>
                  <div className="card-body">
                    <div className="member-formcontent member-row">
                      <div className="member-head">
                        <h2>Members</h2>
                        <div className="avatar-group">
                          <div className="avatar avatar-xs group_img group_header">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="../assets/img/profiles/avatar-10.jpg"
                            />
                          </div>
                          <div className="avatar avatar-xs group_img group_header">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="../assets/img/profiles/avatar-15.jpg"
                            />
                          </div>
                          <div className="avatar avatar-xs group_img group_header">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="../assets/img/profiles/avatar-16.jpg"
                            />
                          </div>
                          <div className="avatar avatar-xs group_img group_header">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="../assets/img/profiles/avatar-17.jpg"
                            />
                          </div>
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
                              src="../assets/img/profiles/avatar-18.jpg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="member_link">
                        <a
                          data-toggle="collapse"
                          href="#table"
                          role="button"
                          aria-expanded="false"
                          aria-controls="table"
                        >
                          <i data-feather="chevron-down"></i>
                        </a>
                      </div>
                    </div>
                    <div className="table-responsive collapse show" id="table">
                      <table className="table  custom-table  no-footer">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Line Manager</th>
                            <th>Team</th>
                            <th>Office</th>
                            <th>Permissions</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="table-img">
                                <a href="profile.html">
                                  <img
                                    src="../assets/img/profiles/avatar-13.jpg"
                                    alt="profile"
                                    className="img-table"
                                  />
                                </a>
                                <label>Sean Black</label>
                              </div>
                            </td>
                            <td>
                              <label className="action_label">
                                Richard Wilson{" "}
                              </label>
                            </td>
                            <td>
                              <label className="action_label2">Design </label>
                            </td>
                            <td>
                              <label>Focus Technologies </label>
                            </td>
                            <td>
                              <label>Team Lead</label>
                            </td>
                            <td className="tab-select">
                              <select className="select">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="table-img">
                                <a href="profile.html">
                                  <img
                                    src="../assets/img/profiles/avatar-16.jpg"
                                    alt="profile"
                                    className="img-table"
                                  />
                                </a>
                                <label>Linda Craver</label>
                              </div>
                            </td>
                            <td>
                              <label className="action_label">
                                Richard Wilson{" "}
                              </label>
                            </td>
                            <td>
                              <label className="action_label2">IOS </label>
                            </td>
                            <td>
                              <label>Focus Technologies </label>
                            </td>
                            <td>
                              <label>Team Lead</label>
                            </td>
                            <td className="tab-select">
                              <select className="select">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="table-img">
                                <a href="profile.html">
                                  <img
                                    src="../assets/img/profiles/avatar-17.jpg"
                                    alt="profile"
                                    className="img-table"
                                  />
                                </a>
                                <label>Jenni Sims</label>
                              </div>
                            </td>
                            <td>
                              <label className="action_label">
                                Richard Wilson{" "}
                              </label>
                            </td>
                            <td>
                              <label className="action_label2">Android </label>
                            </td>
                            <td>
                              <label>Focus Technologies </label>
                            </td>
                            <td>
                              <label>Team Lead</label>
                            </td>
                            <td className="tab-select">
                              <select className="select">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="table-img">
                                <a href="profile.html">
                                  <img
                                    src="../assets/img/profiles/avatar-19.jpg"
                                    alt="profile"
                                    className="img-table"
                                  />
                                </a>
                                <label>Stacey Linville</label>
                              </div>
                            </td>
                            <td>
                              <label className="action_label">
                                Richard Wilson{" "}
                              </label>
                            </td>
                            <td>
                              <label className="action_label2">Testing </label>
                            </td>
                            <td>
                              <label>Focus Technologies </label>
                            </td>
                            <td>
                              <label>Team Lead</label>
                            </td>
                            <td className="tab-select">
                              <select className="select">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="table-img">
                                <a href="profile.html">
                                  <img
                                    src="../assets/img/profiles/avatar-14.jpg"
                                    alt="profile"
                                    className="img-table"
                                  />
                                </a>
                                <label>Maria Cotton</label>
                              </div>
                            </td>
                            <td>
                              <label className="action_label">
                                Richard Wilson{" "}
                              </label>
                            </td>
                            <td>
                              <label className="action_label2">PHP </label>
                            </td>
                            <td>
                              <label>Focus Technologies </label>
                            </td>
                            <td>
                              <label>Team Lead</label>
                            </td>
                            <td className="tab-select">
                              <select className="select">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="table-img">
                                <a href="profile.html">
                                  <img
                                    src="../assets/img/profiles/avatar-18.jpg"
                                    alt="profile"
                                    className="img-table"
                                  />
                                </a>
                                <label>John Gibbs</label>
                              </div>
                            </td>
                            <td>
                              <label className="action_label">
                                Richard Wilson{" "}
                              </label>
                            </td>
                            <td>
                              <label className="action_label2">PHP </label>
                            </td>
                            <td>
                              <label>Focus Technologies </label>
                            </td>
                            <td>
                              <label>Team Lead</label>
                            </td>
                            <td className="tab-select">
                              <select className="select">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="table-img">
                                <a href="profile.html">
                                  <img
                                    src="../assets/img/profiles/avatar-10.jpg"
                                    alt="profile"
                                    className="img-table"
                                  />
                                </a>
                                <label>Richard Wilson</label>
                              </div>
                            </td>
                            <td>
                              <label className="action_label in_active">No </label>
                            </td>
                            <td>
                              <label className="action_label2">Business </label>
                            </td>
                            <td>
                              <label>Focus Technologies </label>
                            </td>
                            <td>
                              <label>Super Admin</label>
                            </td>
                            <td className="tab-select">
                              <select className="select">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                              </select>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
            id="edit"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Edit Office
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
                      <label>Office Name</label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-apply">
                    Apply
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

export default EmployeeOffice;
