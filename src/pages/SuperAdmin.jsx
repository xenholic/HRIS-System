/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

function SuperAdmin() {
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
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active"> Manage</li>
                  </ul>
                  <h3>Super Admin</h3>
                </div>
              </div>
              <div class="col-xl-12 col-sm-12 col-12 mb-4">
                <div class="head-link-set">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <a
                        class="active nav-link"
                        id="tabdetails"
                        data-toggle="tab"
                        href="#details"
                        role="tab"
                        aria-controls="details"
                        aria-selected="true"
                      >
                        Manage Details
                      </a>
                    </li>
                    <li>
                      <a
                        class="nav-link"
                        id="tabtimeoff"
                        data-toggle="tab"
                        href="#timeoff"
                        role="tab"
                        aria-controls="timeoff"
                        aria-selected="false"
                      >
                        Manage Time Off
                      </a>
                    </li>
                    <li>
                      <a
                        class="nav-link"
                        id="tabsalaries"
                        data-toggle="tab"
                        href="#salaries"
                        role="tab"
                        aria-controls="salaries"
                        aria-selected="false"
                      >
                        Manage Salaries
                      </a>
                    </li>
                    <li>
                      <a
                        class="nav-link"
                        id="tabmanageall"
                        data-toggle="tab"
                        href="#manageall"
                        role="tab"
                        aria-controls="manageall"
                        aria-selected="false"
                      >
                        Manage All
                      </a>
                    </li>
                    <li>
                      <a
                        class="nav-link"
                        id="tabsettings"
                        data-toggle="tab"
                        href="#settings"
                        role="tab"
                        aria-controls="settings"
                        aria-selected="false"
                      >
                        Manage All
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-12 col-sm-12 col-12 ">
                <div class="card">
                  <div class="card-body p-0">
                    <div class="tab-content" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="details"
                        role="tabpanel"
                        aria-labelledby="tabdetails"
                      >
                        <div class="table-responsive">
                          <table class="table  custom-table  no-footer tablenoheader">
                            <thead>
                              <tr>
                                <th>Rule Description</th>
                                <th>View</th>
                                <th>Manage</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">Basic Information</h6>
                                    <p class="ctm-text-sm">
                                      Preferred Name, and birthday{" "}
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch1"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch1"
                                    ></label>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch2"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch2"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">Personal Information</h6>
                                    <p class="ctm-text-sm">
                                      Nationality, full date of birth, and home
                                      address{" "}
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch3"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch3"
                                    ></label>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch4"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch4"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">Contact Information</h6>
                                    <p class="ctm-text-sm">
                                      Email And Phone Number{" "}
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch5"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch5"
                                    ></label>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch6"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch6"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">Login Information</h6>
                                    <p class="ctm-text-sm">Login email </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch7"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch7"
                                    ></label>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch8"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch8"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">Social Media</h6>
                                    <p class="ctm-text-sm">Web Site </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch9"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch3"
                                    ></label>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch10"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch10"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6>Company Information</h6>
                                    <p class="ctm-text-sm">
                                      Roll and Employment type{" "}
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch11"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch11"
                                    ></label>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch12"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch12"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">Working Week</h6>
                                    <p class="ctm-text-sm">
                                      View or Manage the days worked{" "}
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch13"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch13"
                                    ></label>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch14"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch14"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">Key Dates</h6>
                                    <p class="ctm-text-sm">
                                      Keep track of important occasions for
                                      people in your team. Such as start date,
                                      probation date, or visa expiration
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch15"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch15"
                                    ></label>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch16"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch16"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">Manage Key Date Types</h6>
                                    <p class="ctm-text-sm">
                                      Create and manage all date types that can
                                      be applied to anyone in the company.
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch17"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch17"
                                    ></label>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch38"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch38"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="timeoff"
                        role="tabpanel"
                        aria-labelledby="tabtimeoff"
                      >
                        <div class="table-responsive">
                          <table class="table  custom-table  no-footer tablenoheader">
                            <thead>
                              <tr>
                                <th>Rule Description</th>
                                <th>Allow?</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">
                                      Approve or Deny Time Off
                                    </h6>
                                    <p class="ctm-text-sm">
                                      Manage time off requests for anyone in
                                      their team.{" "}
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch1812"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch1812"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">Book Time Off Behalf</h6>
                                    <span>
                                      Book time off for anyone in their team{" "}
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch19"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch19"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">Manage Allowances</h6>
                                    <span>
                                      Adjust the holiday allowance for people in
                                      their team{" "}
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch20"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch20"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">
                                      Manage Time Off settings for The Company
                                    </h6>
                                    <span>
                                      Manage custom leave types, roll over,
                                      company holidays and restricted days, the
                                      company working week, and your company
                                      holiday allowance.
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch21"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch21"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">
                                      Manage Working From Home
                                    </h6>
                                    <p class="ctm-text-sm">
                                      Create, edit, or delete working from home
                                      requests for people in their team
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch22"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch22"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="salaries"
                        role="tabpanel"
                        aria-labelledby="tabsalaries"
                      >
                        <div class="table-responsive">
                          <table class="table  custom-table  no-footer tablenoheader">
                            <thead>
                              <tr>
                                <th>Rule Description</th>
                                <th>View</th>
                                <th>Manage</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">Salary</h6>
                                    <p class="ctm-text-sm">
                                      View or manage salaries{" "}
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch18"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch18"
                                    ></label>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch181"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch181"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="manageall"
                        role="tabpanel"
                        aria-labelledby="tabmanageall"
                      >
                        <div class="table-responsive">
                          <table class="table  custom-table  no-footer tablenoheader">
                            <thead>
                              <tr>
                                <th>Rule Description</th>
                                <th>Allow?</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">
                                      Invite People To Their Team
                                    </h6>
                                    <p class="ctm-text-sm">
                                      View or manage future starters at your
                                      company that will join their team{" "}
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch25"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch25"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">
                                      Off Board Everyone Else
                                    </h6>
                                    <p class="ctm-text-sm">
                                      Archive everyone else and revoke their
                                      access
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch26"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch26"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">Manage Roles</h6>
                                    <p class="ctm-text-sm">
                                      Edit and assign Roles to anyone in the
                                      company
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch27"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch27"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">Create Teams</h6>
                                    <p class="ctm-text-sm">Create new teams </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch28"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch28"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">Edit Team Names</h6>
                                    <p class="ctm-text-sm">
                                      Can edit team name{" "}
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch29"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch29"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">Edit Team Members</h6>
                                    <p class="ctm-text-sm">
                                      Can move people in or out of their team
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch30"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch30"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">Manage Offices</h6>
                                    <p class="ctm-text-sm">
                                      Create and edit all offices
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch31"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch31"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="settings"
                        role="tabpanel"
                        aria-labelledby="tabsettings"
                      >
                        <div class="table-responsive">
                          <table class="table  custom-table  no-footer tablenoheader">
                            <thead>
                              <tr>
                                <th>Rule Description</th>
                                <th>Allow?</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">
                                      Customize The Company Branding
                                    </h6>
                                    <p class="ctm-text-sm">
                                      Set your company name, logo, mission, and
                                      cover photo
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch32"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch32"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">On-boarding Slides</h6>
                                    <p class="ctm-text-sm">
                                      Create, edit, and delete the slides shown
                                      to new starters when they first join .
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch33"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch33"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">
                                      Manage All Company Tools
                                    </h6>
                                    <p class="ctm-text-sm">
                                      Add, update and remove tools from the
                                      company tools section
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch34"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch34"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">Slack Integration</h6>
                                    <p class="ctm-text-sm">
                                      Manage the Slack integration, including
                                      automating slack accounts for new
                                      starters, and customizing notifications
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch35"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch35"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">
                                      Time Off Calendar Integration
                                    </h6>
                                    <p class="ctm-text-sm">
                                      Ability to disable the calendar
                                      integration for everyone{" "}
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch36"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch36"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>
                                    <h6 class="mb-0">
                                      Manage Account Subscription
                                    </h6>
                                    <p class="ctm-text-sm">
                                      Can update card details and see all
                                      invoices
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch37"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="switch37"
                                    ></label>
                                  </div>
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

export default SuperAdmin;
