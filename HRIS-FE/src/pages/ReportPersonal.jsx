/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

function ReportPersonal() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className="div">
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
                    <li className="breadcrumb-item active"> Reports</li>
                  </ul>
                  <h3>Reports </h3>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 mb-4">
                <div className="head-link-set">
                  <ul>
                    <li>
                      <Link className="active" to="/report">
                        Team Reports
                      </Link>
                    </li>
                    <li>
                      <Link to="/report-leaves">Leave Reports</Link>
                    </li>
                    <li>
                      <Link to="/report-payroll">Payroll Reports</Link>
                    </li>
                    <li>
                      <Link to="/report-contact">Contact Reports</Link>
                    </li>
                    <li>
                      <Link to="/report-email">Email Reports</Link>
                    </li>
                    <li>
                      <Link to="/report-security">Security Reports</Link>
                    </li>
                    <li>
                      <Link to="/report-wfh">W F H Reports</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 mb-4">
                <div className="form-set">
                  <div className="row">
                    <div className="col-xl-3 col-sm-6 col-12 ">
                      <div className="form-group">
                        <input type="text" placeholder="start Date" />
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="From" />
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12 ">
                      <div className="form-group">
                        <input type="text" placeholder="To" />
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12 ">
                      <a className="btn btn-save">Apply Filter</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 mb-4">
                <div className="head-link-set">
                  <ul>
                    <li>
                      <Link to="/report">Offical Reports</Link>
                    </li>
                    <li>
                      <Link className="active" to="#">
                        Personal Reports
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="card">
                  <div className="table-responsive">
                    <table className="table  custom-table  no-footer">
                      <thead>
                        <tr>
                          <th>Reviewers</th>
                          <th>Gender </th>
                          <th>Salary Current</th>
                          <th>DOB</th>
                          <th>Phone Number </th>
                          <th>Address</th>
                          <th>Bank Name </th>
                          <th>Account Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="table-img">
                              <a href="profile.html">
                                <img
                                  src="assets/img/profiles/avatar-13.jpg"
                                  alt="profile"
                                  className="img-table"
                                />
                              </a>
                              <label>Sean Black</label>
                            </div>
                          </td>
                          <td>
                            <label>Male</label>
                          </td>
                          <td>
                            <label>$3000</label>
                          </td>
                          <td>
                            <label>25 Jun 1984 </label>
                          </td>
                          <td>
                            <label>9876543221</label>
                          </td>
                          <td>
                            <label>
                              201 Lunetta Street,Plant City,Florida(FL), 33566
                            </label>
                          </td>
                          <td>
                            <label>Life Essence Banks, Inc. </label>
                          </td>
                          <td>
                            <label>112300987652 </label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-img">
                              <a href="profile.html">
                                <img
                                  src="assets/img/profiles/avatar-16.jpg"
                                  alt="profile"
                                  className="img-table"
                                />
                              </a>
                              <label>Linda Craver</label>
                            </div>
                          </td>
                          <td>
                            <label>Female</label>
                          </td>
                          <td>
                            <label>$2000</label>
                          </td>
                          <td>
                            <label>14 Feb 1984 </label>
                          </td>
                          <td>
                            <label>9876543231</label>
                          </td>
                          <td>
                            <label>
                              683 Longview Avenue,New York,New York(NY), 10011{" "}
                            </label>
                          </td>
                          <td>
                            <label>Life Essence Banks, Inc. </label>
                          </td>
                          <td>
                            <label>112300987652 </label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-img">
                              <a href="profile.html">
                                <img
                                  src="assets/img/profiles/avatar-17.jpg"
                                  alt="profile"
                                  className="img-table"
                                />
                              </a>
                              <label> Jenni Sims</label>
                            </div>
                          </td>
                          <td>
                            <label>Female</label>
                          </td>
                          <td>
                            <label>$1000</label>
                          </td>
                          <td>
                            <label>15 Jul 1984 </label>
                          </td>
                          <td>
                            <label>9876534214 </label>
                          </td>
                          <td>
                            <label>
                              4923 Front Street,Detroit, Michigan(MI), 48226{" "}
                            </label>
                          </td>
                          <td>
                            <label>Life Essence Banks, Inc. </label>
                          </td>
                          <td>
                            <label>112300987652 </label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-img">
                              <a href="profile.html">
                                <img
                                  src="assets/img/profiles/avatar-19.jpg"
                                  alt="profile"
                                  className="img-table"
                                />
                              </a>
                              <label> Stacey Linville</label>
                            </div>
                          </td>
                          <td>
                            <label>Male</label>
                          </td>
                          <td>
                            <label>$1000</label>
                          </td>
                          <td>
                            <label>15 Jul 1984 </label>
                          </td>
                          <td>
                            <label>9876534214 </label>
                          </td>
                          <td>
                            <label>
                              4923 Front Street,Detroit, Michigan(MI), 48226{" "}
                            </label>
                          </td>
                          <td>
                            <label>Life Essence Banks, Inc. </label>
                          </td>
                          <td>
                            <label>112300987652 </label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-img">
                              <a href="profile.html">
                                <img
                                  src="assets/img/profiles/avatar-14.jpg"
                                  alt="profile"
                                  className="img-table"
                                />
                              </a>
                              <label>Maria Cotton</label>
                            </div>
                          </td>
                          <td>
                            <label>Male</label>
                          </td>
                          <td>
                            <label>$3000</label>
                          </td>
                          <td>
                            <label>25 Jun 1984 </label>
                          </td>
                          <td>
                            <label>9876543221 </label>
                          </td>
                          <td>
                            <label>
                              201 Lunetta Street,Plant City,Florida(FL), 33566
                            </label>
                          </td>
                          <td>
                            <label>Life Essence Banks, Inc. </label>
                          </td>
                          <td>
                            <label>112300987652 </label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-img">
                              <a href="profile.html">
                                <img
                                  src="assets/img/profiles/avatar-18.jpg"
                                  alt="profile"
                                  className="img-table"
                                />
                              </a>
                              <label>Sean Black</label>
                            </div>
                          </td>
                          <td>
                            <label>Male</label>
                          </td>
                          <td>
                            <label>$2000</label>
                          </td>
                          <td>
                            <label>14 Feb 1984 </label>
                          </td>
                          <td>
                            <label>9876543231 </label>
                          </td>
                          <td>
                            <label>
                              683 Longview Avenue,New York,New York(NY), 10011{" "}
                            </label>
                          </td>
                          <td>
                            <label>Life Essence Banks, Inc. </label>
                          </td>
                          <td>
                            <label>112300987652 </label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-img">
                              <a href="profile.html">
                                <img
                                  src="assets/img/profiles/avatar-10.jpg"
                                  alt="profile"
                                  className="img-table"
                                />
                              </a>
                              <label>Maria Cotton</label>
                            </div>
                          </td>
                          <td>
                            <label>Male</label>
                          </td>
                          <td>
                            <label>$1000</label>
                          </td>
                          <td>
                            <label>15 Jul 1984 </label>
                          </td>
                          <td>
                            <label>9876543231 </label>
                          </td>
                          <td>
                            <label>
                              4923 Front Street,Detroit,Michigan(MI), 48226{" "}
                            </label>
                          </td>
                          <td>
                            <label>Life Essence Banks, Inc. </label>
                          </td>
                          <td>
                            <label>112300987652 </label>
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
  );
}

export default ReportPersonal;
