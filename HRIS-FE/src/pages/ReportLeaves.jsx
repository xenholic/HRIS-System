/* eslint-disable react/no-unknown-property */
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function ReportLeaves() {
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
                    <li className="breadcrumb-item active"> Reports</li>
                  </ul>
                  <h3>Reports </h3>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 mb-4">
                <div className="head-link-set">
                  <ul>
                    <li>
                      <Link to="/report">Team Reports</Link>
                    </li>
                    <li>
                      <Link className="active" to="/report-leaves">
                        Leave Reports
                      </Link>
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
              <div className="col-xl-12 col-sm-12 col-12">
                <div className="card">
                  <div className="table-responsive">
                    <table className="table  custom-table  no-footer">
                      <thead>
                        <tr>
                          <th>Reviewers</th>
                          <th>Active </th>
                          <th>Email</th>
                          <th>Days Allowed</th>
                          <th>Days Approved</th>
                          <th>Sick Days</th>
                          <th>Work From Home </th>
                          <th>Days Remaining</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="table-img">
                              <a href="profile.html">
                                <img
                                  src="assets/img/profiles/avatar-15.jpg"
                                  alt="profile"
                                  className="img-table"
                                />
                              </a>
                              <label>Danny Ward</label>
                            </div>
                          </td>
                          <td className="tab-select">
                            <select className="select">
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
                            </select>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="096d6867707e687b6d496c71686479656c276a6664"
                              >
                                [email&#160;protected]
                              </a>{" "}
                            </label>
                          </td>
                          <td>
                            <label>12</label>
                          </td>
                          <td>
                            <label>2</label>
                          </td>
                          <td>
                            <label>0</label>
                          </td>
                          <td>
                            <label>1</label>
                          </td>
                          <td>
                            <label>10</label>
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
                          <td className="tab-select">
                            <select className="select">
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
                            </select>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="503c393e3431332231263522103528313d203c357e333f3d"
                              >
                                [email&#160;protected]
                              </a>
                            </label>
                          </td>
                          <td>
                            <label>12</label>
                          </td>
                          <td>
                            <label>3</label>
                          </td>
                          <td>
                            <label>1</label>
                          </td>
                          <td>
                            <label>1</label>
                          </td>
                          <td>
                            <label>8</label>
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
                              <label>Jenni Sims</label>
                            </div>
                          </td>
                          <td className="tab-select">
                            <select className="select">
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
                            </select>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="49232c2727203a20243a092c31282439252c672a2624"
                              >
                                [email&#160;protected]
                              </a>
                            </label>
                          </td>
                          <td>
                            <label>12</label>
                          </td>
                          <td>
                            <label>10</label>
                          </td>
                          <td>
                            <label>0</label>
                          </td>
                          <td>
                            <label>1</label>
                          </td>
                          <td>
                            <label>5</label>
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
                              <label>Maria Cotton</label>
                            </div>
                          </td>
                          <td className="tab-select">
                            <select className="select">
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
                            </select>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="fb969a89929a98948f8f9495bb9e839a968b979ed5989496"
                              >
                                [email&#160;protected]
                              </a>
                            </label>
                          </td>
                          <td>
                            <label>12</label>
                          </td>
                          <td>
                            <label>8</label>
                          </td>
                          <td>
                            <label>0</label>
                          </td>
                          <td>
                            <label>1</label>
                          </td>
                          <td>
                            <label>7</label>
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
                              <label>Johndry</label>
                            </div>
                          </td>
                          <td className="tab-select">
                            <select className="select">
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
                            </select>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="bfd5d0d7d1dbcdc6ccdbded3daffdac7ded2cfd3da91dcd0d2"
                              >
                                [email&#160;protected]
                              </a>
                            </label>
                          </td>
                          <td>
                            <label>12</label>
                          </td>
                          <td>
                            <label>5</label>
                          </td>
                          <td>
                            <label>0</label>
                          </td>
                          <td>
                            <label>1</label>
                          </td>
                          <td>
                            <label>10</label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="btn-set">
                    <a className="btn btn-dwnd mt-3 mb-3">Download Report</a>
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

export default ReportLeaves;
