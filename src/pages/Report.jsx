/* eslint-disable react/no-unknown-property */
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom"

function report() {
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
                          src="../assets/img/dash.png"
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
                      <Link to="contact-report.html">Contact Reports</Link>
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
                      <Link className="active" to="/report">
                        Offical Reports
                      </Link>
                    </li>
                    <li>
                      <Link to="/report-personal">Personal Reports</Link>
                    </li>
                  </ul>
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
                          <th>Employment</th>
                          <th>Email</th>
                          <th>Job Title </th>
                          <th>Line Manager </th>
                          <th>Team Name </th>
                          <th>Start Date </th>
                        </tr>
                      </thead>
                      <tbody>
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
                            <label>Permanent</label>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="1276737c6b6573607652776a737f627e773c717d7f"
                              >
                                [email&#160;protected]
                              </a>{" "}
                            </label>
                          </td>
                          <td>
                            <label>Team Lead</label>
                          </td>
                          <td>
                            <label>Richard Wilson </label>
                          </td>
                          <td>
                            <label>Designing</label>
                          </td>
                          <td>
                            <label>Designing</label>
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
                            <label>Permanent</label>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="167a7f78727775647760736456736e777b667a733875797b"
                              >
                                [email&#160;protected]
                              </a>
                            </label>
                          </td>
                          <td>
                            <label>Team Lead</label>
                          </td>
                          <td>
                            <label>Richard Wilson </label>
                          </td>
                          <td>
                            <label>Designing</label>
                          </td>
                          <td>
                            <label>Designing</label>
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
                            <label>Permanent</label>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="18727d7676716b71756b587d60797568747d367b7775"
                              >
                                [email&#160;protected]
                              </a>
                            </label>
                          </td>
                          <td>
                            <label>Team Lead</label>
                          </td>
                          <td>
                            <label>Richard Wilson </label>
                          </td>
                          <td>
                            <label>Designing</label>
                          </td>
                          <td>
                            <label>Designing</label>
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
                          <td className="tab-select">
                            <select className="select">
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
                            </select>
                          </td>
                          <td>
                            <label>Permanent</label>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="bad7dbc8d3dbd9d5ceced5d4fadfc2dbd7cad6df94d9d5d7"
                              >
                                [email&#160;protected]
                              </a>
                            </label>
                          </td>
                          <td>
                            <label>Team Lead</label>
                          </td>
                          <td>
                            <label>Richard Wilson </label>
                          </td>
                          <td>
                            <label>Designing</label>
                          </td>
                          <td>
                            <label>Designing</label>
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
                          <td className="tab-select">
                            <select className="select">
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
                            </select>
                          </td>
                          <td>
                            <label>Permanent</label>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="3c56535452584e454f585d50597c59445d514c5059125f5351"
                              >
                                [email&#160;protected]
                              </a>
                            </label>
                          </td>
                          <td>
                            <label>Team Lead</label>
                          </td>
                          <td>
                            <label>Richard Wilson </label>
                          </td>
                          <td>
                            <label>Designing</label>
                          </td>
                          <td>
                            <label>Designing</label>
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

export default report;
