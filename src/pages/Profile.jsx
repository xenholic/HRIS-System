/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

function Profile() {
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
                          src="../assets/img/dash.png"
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
                      <a className="active" href="#">
                        Employement
                      </a>
                    </li>
                    <li>
                      <Link to="/profile-detail">Detail</Link>
                    </li>
                    <li>
                      <Link to="/profile-document">Document</Link>
                    </li>
                    <li>
                      <a href="profile-payroll.html">Payroll</a>
                    </li>
                    <li>
                      <a href="profile-timeoff.html">Timeoff</a>
                    </li>
                    <li>
                      <a href="profile-review.html">Reviews</a>
                    </li>
                    <li>
                      <a href="profile-setting.html">Settings</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="row">
                  <div className="col-xl-6 col-sm-12 col-12 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">
                          Add Maria Cotton to Another Team
                        </h2>
                      </div>
                      <div className="card-body">
                        <div className="form-group">
                          <select className="select">
                            <option value="Select leave">Select Team</option>
                            <option value="leave">Team A</option>
                            <option value="leave">Team B</option>
                          </select>
                        </div>
                        <div className="form-btn">
                          <a href="#" className="btn btn-applys">
                            New Team
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12 col-12 d-flex">
                    <div className="card card-lists flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">PHP Team</h2>
                        <ul>
                          <li>
                            <a
                              className="edit-link"
                              data-toggle="modal"
                              data-target="#edit_working"
                            >
                              <i data-feather="edit"></i>
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
                      <div className="card-body d-flex align-items-center">
                        <div className="member-img">
                          <img
                            src="assets/img/profiles/avatar-14.jpg"
                            alt="profile"
                            className="mr-3"
                          />
                          <label>Maria Cotton</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="card card-lists flex-fill">
                  <div className="card-header">
                    <h2 className="card-titles">
                      Focus Technologies<span>Head Office</span>
                    </h2>
                    <a
                      className="btn btn-header"
                      data-toggle="modal"
                      data-target="#changeoffice"
                    >
                      Change Office
                    </a>
                  </div>
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <div className="member-head employee-image">
                      <h2>Members</h2>
                      <div className="avatar-group">
                        <div className="avatar avatar-xs group_img group_header">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/profiles/avatar-10.jpg"
                          />
                        </div>
                        <div className="avatar avatar-xs group_img group_header">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/profiles/avatar-15.jpg"
                          />
                        </div>
                        <div className="avatar avatar-xs group_img group_header">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/profiles/avatar-16.jpg"
                          />
                        </div>
                        <div className="avatar avatar-xs group_img group_header">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/profiles/avatar-17.jpg"
                          />
                        </div>
                        <div className="avatar avatar-xs group_img group_header">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/profiles/avatar-14.jpg"
                          />
                        </div>
                        <div className="avatar avatar-xs group_img group_header">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/profiles/avatar-18.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="member_link">
                      <a className="btn btn-visit">Visit Office</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="row">
                  <div className="col-xl-6 col-sm-12 col-12 d-flex">
                    <div className="card card-lists flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">Maria Cottons Manager</h2>
                        <ul>
                          <li>
                            <a
                              className="edit-link"
                              data-toggle="modal"
                              data-target="#changemanager"
                            >
                              <i data-feather="edit"></i>
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
                        <div className="member-formcontent  border-0 ">
                          <div className="member-imgs">
                            <img
                              src="assets/img/profiles/avatar-14.jpg"
                              alt="profile"
                            />
                            <div className="member-name">
                              <label>Maria Cotton</label>
                              <span>
                                <a
                                  href="/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="056864776c64666a71716a6b45607d64687569602b666a68"
                                >
                                  [email&#160;protected]
                                </a>
                              </span>
                            </div>
                          </div>
                          <div className="member-btn">
                            <a
                              href="#"
                              className="btn btn-applys"
                              data-toggle="modal"
                              data-target="#changemanager"
                            >
                              Change Manager
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12 col-12 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">Who Reports to Maria Cotton</h2>
                      </div>
                      <div className="card-body">
                        <div className="member-formcontent ">
                          <div className="avatar-group">
                            <div className="avatar avatar-xs group_img group_header">
                              <img
                                className="avatar-img rounded-circle"
                                alt="User Image"
                                src="assets/img/profiles/avatar-14.jpg"
                              />
                            </div>
                            <div className="avatar avatar-xs group_img group_header">
                              <img
                                className="avatar-img rounded-circle"
                                alt="User Image"
                                src="assets/img/profiles/avatar-10.jpg"
                              />
                            </div>
                            <div className="avatar avatar-xs group_img group_header">
                              <img
                                className="avatar-img rounded-circle"
                                alt="User Image"
                                src="assets/img/profiles/avatar-15.jpg"
                              />
                            </div>
                          </div>
                          <div className="member-btn">
                            <a href="#" className="btn btn-applys">
                              Add people
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="row">
                  <div className="col-xl-6 col-sm-12 col-12 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">Position</h2>
                      </div>
                      <div className="card-body">
                        <div className="form-group">
                          <input type="text" placeholder="Job Title" />
                        </div>
                        <div className="form-group">
                          <input type="text" placeholder="Permanent" />
                        </div>
                        <div className="form-btn">
                          <a href="#" className="btn btn-applys">
                            PHP Team Lead
                          </a>
                          <a href="#" className="btn btn-applys">
                            Permanent
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12 col-12 d-flex">
                    <div className="card card-lists flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">
                          Working Week
                          <span>Set the dates that your company works.</span>
                        </h2>
                        <a
                          className="edit-link"
                          data-toggle="modal"
                          data-target="#edit_workings"
                        >
                          <i data-feather="edit"></i>
                        </a>
                      </div>
                      <div className="card-body d-flex ">
                        <div className="form-week">
                          <ul>
                            <li>
                              <a className="active">Mon</a>
                            </li>
                            <li>
                              <a className="active">Tue</a>
                            </li>
                            <li>
                              <a className="active">Wed</a>
                            </li>
                            <li>
                              <a className="active">Thur</a>
                            </li>
                            <li>
                              <a className="active">Fri</a>
                            </li>
                            <li>
                              <a className="inactive">Sat</a>
                            </li>
                            <li>
                              <a className="inactive">Sun</a>
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

        <div className="customize_popup">
          <div
            className="modal fade"
            id="add_company"
            data-backdrop="static"
            data-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabeladd"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabeladd">
                    Company Default
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
                      <label>Time Off Allowance</label>
                      <input type="text" placeholder="" value="25 days" />
                    </div>
                    <div className=" form-popup">
                      <label>Year Start</label>
                      <input type="text" placeholder="" value="01-01-2021" />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">
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

        <div className="customize_popup">
          <div
            className="modal fade"
            id="edit_working"
            tabindex="-1"
            aria-labelledby="staticBackdropL"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropL">
                    Change Team
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
                    <div className=" form-popup form-group">
                      <select className="select">
                        <option selected>PHP</option>
                        <option>IOS</option>
                        <option>Design</option>
                        <option>Testing</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn  btn-primary">
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
            id="changemanager"
            tabindex="-1"
            aria-labelledby="staticBackdropLa"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLa">
                    Change Manager
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
                    <div className=" form-popup form-group">
                      <select className="select">
                        <option selected>Richard Wilson</option>
                        <option>Danny Ward</option>
                        <option>Linda Craver</option>
                        <option>John Gibbs</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn  btn-primary">
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
            id="changeoffice"
            tabindex="-1"
            aria-labelledby="staticBackdropLab"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLab">
                    Change Office
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
                    <div className=" form-popup form-group">
                      <input type="text" placeholder="Name" />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn  btn-primary">
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
            id="position"
            tabindex="-1"
            aria-labelledby="staticBackdropLabe"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabe">
                    Edit Position
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
                    <div className=" form-popup form-group">
                      <input type="text" placeholder="Job Title" />
                    </div>
                    <div className=" form-popup form-group">
                      <input type="text" placeholder="Permanent" />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn  btn-primary">
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
            id="adddpeople"
            tabindex="-1"
            aria-labelledby="staticB"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticB">
                    Add People
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
                    <div className=" form-popup form-group">
                      <input type="text" placeholder="Name" />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn  btn-primary">
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
            id="edit_workings"
            tabindex="-1"
            aria-labelledby="staticBackd"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackd">
                    Edit Working Week
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
                    <div className="checkworking">
                      <ul>
                        <li>
                          <input type="checkbox" id="mon" checked />
                          <label for="mon">Mon</label>
                        </li>
                        <li>
                          <input type="checkbox" id="tue" checked />
                          <label for="tue">Tue</label>
                        </li>
                        <li>
                          <input type="checkbox" id="wed" checked />
                          <label for="wed">Wed</label>
                        </li>
                        <li>
                          <input type="checkbox" id="thur" checked />
                          <label for="thur">Thur</label>
                        </li>
                        <li>
                          <input type="checkbox" id="fri" checked />
                          <label for="fri">Fri</label>
                        </li>
                        <li>
                          <input type="checkbox" id="sat" />
                          <label for="sat">Sat</label>
                        </li>
                        <li>
                          <input type="checkbox" id="sun" />
                          <label for="sun">Sun</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn  btn-primary">
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

export default Profile;
