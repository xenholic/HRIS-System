/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

function ProfileDetail() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="row">
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="breadcrumb-path mb-4">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <img
                          src="assets/img/dash.png"
                          className="mr-2"
                          alt="breadcrumb"
                        />
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active"> Profile</li>
                  </ul>
                  <h3>Profile </h3>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 mb-4">
                <div className="head-link-set">
                  <ul>
                    <li>
                      <Link to="/profile">Employement</Link>
                    </li>
                    <li>
                      <Link className="active" to="#">
                        Detail
                      </Link>
                    </li>
                    <li>
                      <Link to="/profile-document">Document</Link>
                    </li>
                    <li>
                      <Link to="/profile-payroll">Payroll</Link>
                    </li>
                    <li>
                      <Link to="/profile-timeoff">Timeoff</Link>
                    </li>
                    <li>
                      <Link to="/profile-review">Reviews</Link>
                    </li>
                    <li>
                      <Link to="/profile-setting">Settings</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="row">
                  <div className="col-xl-4 col-sm-12 col-12 d-flex">
                    <div className="card card-lists flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">Basic Information</h2>
                        <ul>
                          <li>
                            <a
                              className="add-link"
                              data-toggle="modal"
                              data-target="#editinformation"
                            >
                              <i data-feather="plus"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="delete-link"
                              data-toggle="modal"
                              data-target="#delete"
                            >
                              <i data-feather="trash-2"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <div className="member-info">
                          <ul>
                            <li>
                              <label>Preferred Name </label>
                              <span>Maria</span>
                            </li>
                            <li>
                              <label>First Name </label>
                              <span>Maria</span>
                            </li>
                            <li>
                              <label>Last Name </label>
                              <span>Cotton</span>
                            </li>
                            <li>
                              <label>Nationality </label>
                              <span>American</span>
                            </li>
                            <li>
                              <label>Date of Birth </label>
                              <span>05 May 1990</span>
                            </li>
                            <li>
                              <label>Gender </label>
                              <span>Female</span>
                            </li>
                            <li>
                              <label>Blood Group</label>
                              <span>A+</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-12 col-12 d-flex">
                    <div className="card card-lists flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">Basic Information</h2>
                        <ul>
                          <li>
                            <a
                              className="add-link"
                              data-toggle="modal"
                              data-target="#editinformations"
                            >
                              <i data-feather="plus"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="delete-link"
                              data-toggle="modal"
                              data-target="#delete"
                            >
                              <i data-feather="trash-2"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <div className="member-info">
                          <ul>
                            <li>
                              <label>Phone Number </label>
                              <span>987654321</span>
                            </li>
                            <li>
                              <label>Personal Email</label>
                              <span>
                                <a
                                  href="/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="7815190a11191b170c0c1716381d00191508141d561b1715"
                                >
                                  [email&#160;protected]
                                </a>
                              </span>
                            </li>
                            <li>
                              <label>Secondary Number </label>
                              <span>986754231</span>
                            </li>
                            <li>
                              <label>Web Site </label>
                              <span>www.focustechnology.com</span>
                            </li>
                            <li>
                              <label>Linkedin </label>
                              <span>#mariacotton</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-12 col-12 ">
                    <div className="card card-lists flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">Dates</h2>
                        <a className="edit-link">
                          <i data-feather="edit"></i>
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="member-info">
                          <ul>
                            <li>
                              <label>Phone Number </label>
                              <span>987654321</span>
                            </li>
                            <li>
                              <label>Personal Email</label>
                              <span>
                                <a
                                  href="/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="e984889b80888a869d9d8687a98c91888499858cc78a8684"
                                >
                                  [email&#160;protected]
                                </a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card card-lists flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">Contact</h2>
                        <label>New Type</label>
                      </div>
                      <div className="member-formcontent-path p-4">
                        <div className="member-date  member-newformat">
                          <ul>
                            <li>
                              <div className="form-group">
                                <input
                                  type="text"
                                  placeholder="Add Start Date"
                                />
                                <div className="addon">
                                  <i data-feather="calendar"></i>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="form-group">
                                <input
                                  type="text"
                                  placeholder="Add Visa Expiry Date"
                                />
                                <div className="addon">
                                  <i data-feather="calendar"></i>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <a className="btn my-3 btn-primary w-100 ">
                            Add A Key Date
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

        <div className="customize_popup">
          <div
            className="modal fade"
            id="editinformation"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Basic Information
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
                      <input type="text" placeholder="Add Preferred Name" />
                    </div>
                    <div className=" form-popup">
                      <input type="text" placeholder="First Name" />
                    </div>
                    <div className=" form-popup">
                      <input type="text" placeholder="Last Name" />
                    </div>
                    <div className=" form-popup">
                      <input type="text" placeholder="Add Nationality" />
                    </div>
                    <div className=" form-popup">
                      <input type="text" placeholder="Add Date of Birth" />
                    </div>
                    <div className=" form-popup">
                      <input type="text" placeholder="Add Gender" />
                    </div>
                    <div className=" form-popup">
                      <input type="text" placeholder="Add Blood Group" />
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
            id="editinformations"
            tabindex="-1"
            aria-labelledby="staticBackdropLabels"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabels">
                    Add Contact
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
                      <input type="text" placeholder="Add Phone Number" />
                    </div>
                    <div className=" form-popup">
                      <input type="text" placeholder="Login Email" />
                    </div>
                    <div className=" form-popup">
                      <input type="text" placeholder="Add Personal Email" />
                    </div>
                    <div className=" form-popup">
                      <input
                        type="text"
                        placeholder="Add Secondary Phone Number"
                      />
                    </div>
                    <div className=" form-popup">
                      <input type="text" placeholder="Add Web Site" />
                    </div>
                    <div className=" form-popup">
                      <input type="text" placeholder="Connect Your Linkedin" />
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
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header text-centers border-0">
                  <h5
                    className="modal-title text-center"
                    id="staticBackdropLabels1"
                  >
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
    </div>
  );
}

export default ProfileDetail;
