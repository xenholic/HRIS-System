/* eslint-disable react/no-unknown-property */

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function ProfileSetting() {
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
                      <a href="index.html">
                        <img
                          src="assets/img/dash.png"
                          className="mr-2"
                          alt="breadcrumb"
                        />
                        Home
                      </a>
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
                      <Link to="/profile-detail">Detail</Link>
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
                      <Link className="active" to="#">
                        Settings
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 mb-4">
                <div className="row">
                  <div className="col-xl-6 col-sm-12 col-12 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">
                          Change Password
                          <span>
                            Your password needs to be at least 8 characters
                            long.
                          </span>
                        </h2>
                      </div>
                      <div className="card-body">
                        <div className="form-group">
                          <input type="text" placeholder="Current Password" />
                        </div>
                        <div className="form-group">
                          <input type="text" placeholder="New Password" />
                        </div>
                        <div className="form-group">
                          <input type="text" placeholder="Repeat Password" />
                        </div>
                        <div className="btn-set pl-0">
                          <a className="btn btn-apply">Change My Password</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12 col-12 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">
                          Company Notification Settings
                          <span>
                            You will receive information across the whole
                            company.
                          </span>
                        </h2>
                      </div>
                      <div className="card-body">
                        <div className="company-set">
                          <ul>
                            <li>
                              <div className="company-path checkworking">
                                <input type="checkbox" id="che1" />
                                <label for="che1">
                                  Weekly Summarize
                                  <span>
                                    Keeping you in the loop with a weekly email
                                    summarizing
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="company-path checkworking">
                                <input type="checkbox" id="che2" />
                                <label for="che2">
                                  Weekly Payroll Summarize
                                  <span>
                                    A weekly email containing all changes
                                    related to your payroll..
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="company-path checkworking">
                                <input type="checkbox" id="che3" />
                                <label for="che3">
                                  Visa Dates
                                  <span>
                                    Informs and notify the day before Visa dates
                                    for each team member.
                                  </span>
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="btn-set pl-0">
                          <a className="btn btn-apply">
                            Update Notification Settings
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="row">
                  <div className="col-xl-12 col-sm-12 col-12 ">
                    <div className="card ">
                      <div className="card-header">
                        <h2 className="card-titles">
                          Team Member Notification Settings
                          <span>
                            You will receive notifications only for Team Leads.
                          </span>
                        </h2>
                      </div>
                      <div className="card-body">
                        <div className="company-set">
                          <ul>
                            <li>
                              <div className="company-path checkworking">
                                <input type="checkbox" id="che6" />
                                <label for="che6">
                                  Birthdays
                                  <span>
                                    Reasons to party with reminders a week and a
                                    day before a team member’s birthday.
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="company-path checkworking">
                                <input type="checkbox" id="che7" />
                                <label for="che7">
                                  Work Anniversaries
                                  <span>
                                    Never miss work anniversaries with reminders
                                    the week and the day before.
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="company-path checkworking">
                                <input type="checkbox" id="che8" />
                                <label for="che8">
                                  Key Dates
                                  <span>
                                    Informs and notify the day before key dates
                                    for each team member.
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="company-path checkworking">
                                <input type="checkbox" id="che4" />
                                <label for="che4">
                                  Off Boardings
                                  <span>
                                    Informs you when a team member has a leaving
                                    date set and reminds you the day before.
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="company-path checkworking">
                                <input type="checkbox" id="che5" />
                                <label for="che5">
                                  Work From Home Notifications
                                  <span>
                                    Never miss a notification that someone will
                                    be working from home.
                                  </span>
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="btn-set pl-0">
                          <a className="btn btn-apply">
                            Update Notification Settings
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
  );
}

export default ProfileSetting;
