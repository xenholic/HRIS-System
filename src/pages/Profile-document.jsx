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
        <div class="page-wrapper">
          <div class="content container-fluid">
            <div class="row">
              <div class="col-xl-12 col-sm-12 col-12 ">
                <div class="breadcrumb-path mb-3">
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">
                        <img
                          src="assets/img/dash.png"
                          class="mr-2"
                          alt="breadcrumb"
                        />
                        Home
                      </Link>
                    </li>
                    <li class="breadcrumb-item active"> Profile</li>
                  </ul>
                  <h3>Profile </h3>
                </div>
              </div>
              <div class="col-xl-12 col-sm-12 col-12 mb-3">
                <div class="head-link-set">
                  <ul>
                    <li>
                      <Link to="/profile">Employement</Link>
                    </li>
                    <li>
                      <Link to="/profile-detail">Detail</Link>
                    </li>
                    <li>
                      <Link to="/profile-document" class="active">
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
              <div class="col-xl-12 col-sm-12 col-12 mb-3">
                <div class="row">
                  <div class="col-xl-12 col-sm-6 col-12 ">
                    <div class="card">
                      <div class="card-header">
                        <h2 class="card-titles">Payroll Details</h2>
                      </div>
                      <div class="card-body">
                        <div class="member-date">
                          <ul>
                            <li>
                              <label>Add Bank Name</label>
                              <a class="edit-link">
                                <i data-feather="edit"></i>{" "}
                              </a>
                            </li>
                            <li>
                              <label>Add Bank Account Number</label>
                              <a class="edit-link">
                                <i data-feather="edit"></i>{" "}
                              </a>
                            </li>
                            <li>
                              <label>Add Bank Sort Code</label>
                              <a class="edit-link">
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
              <div class="col-xl-12 col-sm-12 col-12 ">
                <div class="row">
                  <div class="col-xl-4 col-sm-12 col-12 d-flex">
                    <div class="card card-lists flex-fill">
                      <div class="card-header">
                        <h2 class="card-titles">Basic Information</h2>
                        <ul>
                          <li>
                            <a class="plus">
                              <i data-feather="plus"></i>
                            </a>
                          </li>
                          <li>
                            <a class="delete">
                              <i data-feather="trash-2"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="card-body">
                        <div class="member-info">
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
                  <div class="col-xl-4 col-sm-12 col-12 d-flex">
                    <div class="card card-lists flex-fill">
                      <div class="card-header">
                        <h2 class="card-titles">P45</h2>
                      </div>
                      <div class="card-body">
                        <div class="member-date">
                          <ul>
                            <li class="border-0 px-0">
                              <label>
                                <img
                                  src="assets/img/pdf.png"
                                  alt="pdf"
                                  class="mr-3"
                                />
                                Passport.pdf
                              </label>
                              <a class="edit-link">
                                <i data-feather="edit"></i>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-sm-12 col-12 d-flex">
                    <div class="card card-lists flex-fill">
                      <div class="card-header">
                        <h2 class="card-titles">P45</h2>
                      </div>
                      <div class="card-body">
                        <div class="member-date">
                          <ul>
                            <li>
                              <label>Current Salary</label>
                              <a class="edit-link">
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
