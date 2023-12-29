/* eslint-disable react/no-unknown-property */

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function ProfileDocument() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="row">
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="breadcrumb-path mb-3">
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
              <div className="col-xl-12 col-sm-12 col-12 mb-3">
                <div className="head-link-set">
                  <ul>
                    <li>
                      <Link to="/profile">Employement</Link>
                    </li>
                    <li>
                      <Link to="/profile-detail">Detail</Link>
                    </li>
                    <li>
                      <Link to="/profile-document" className="active">
                        Document
                      </Link>
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
              <div className="col-xl-12 col-sm-12 col-12 mb-3">
                <div className="row">
                  <div className="col-xl-12 col-sm-6 col-12 ">
                    <div className="card">
                      <div className="card-header">
                        <h2 className="card-titles">Payroll Details</h2>
                      </div>
                      <div className="card-body">
                        <div className="member-date">
                          <ul>
                            <li>
                              <label>Add Bank Name</label>
                              <a className="edit-link">
                                <i data-feather="edit"></i>{" "}
                              </a>
                            </li>
                            <li>
                              <label>Add Bank Account Number</label>
                              <a className="edit-link">
                                <i data-feather="edit"></i>{" "}
                              </a>
                            </li>
                            <li>
                              <label>Add Bank Sort Code</label>
                              <a className="edit-link">
                                <i data-feather="edit"></i>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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
                            <a className="plus">
                              <i data-feather="plus"></i>
                            </a>
                          </li>
                          <li>
                            <a className="delete">
                              <i data-feather="trash-2"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <div className="member-info">
                          <ul>
                            <li>
                              <label>Bank Name</label>
                              <span>Life Essence Banks, Inc.</span>
                            </li>
                            <li>
                              <label>Bank Account Number</label>
                              <span>112300987652</span>
                            </li>
                            <li>
                              <label>Bank Sort Code</label>
                              <span>LE00652</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-12 col-12 d-flex">
                    <div className="card card-lists flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">P45</h2>
                      </div>
                      <div className="card-body">
                        <div className="member-date">
                          <ul>
                            <li className="border-0 px-0">
                              <label>
                                <img
                                  src="assets/img/pdf.png"
                                  alt="pdf"
                                  className="mr-3"
                                />
                                Passport.pdf
                              </label>
                              <a className="edit-link">
                                <i data-feather="edit"></i>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-12 col-12 d-flex">
                    <div className="card card-lists flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">P45</h2>
                      </div>
                      <div className="card-body">
                        <div className="member-date">
                          <ul>
                            <li>
                              <label>Current Salary</label>
                              <a className="edit-link">
                                <i data-feather="edit"></i>{" "}
                              </a>
                            </li>
                          </ul>
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
  );
}

export default ProfileDocument;
