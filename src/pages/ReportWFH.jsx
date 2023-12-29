/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

function ReportWFH() {
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
                      <Link className="active" to="/report-wfh">
                        W F H Reports
                      </Link>
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
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="card">
                  <div className="table-responsive">
                    <table className="table  custom-table  no-footer">
                      <thead>
                        <tr>
                          <th>Team Member </th>
                          <th>Email</th>
                          <th>Working From Home (This Year)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="table-img">
                              <img
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="profile"
                                className="img-table"
                              />
                              <label>Danny Ward</label>
                            </div>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="f397929d8a84928197b3968b929e839f96dd909c9e"
                              >
                                [email&#160;protected]
                              </a>{" "}
                            </label>
                          </td>
                          <td>
                            <label>5</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-img">
                              <img
                                src="assets/img/profiles/avatar-16.jpg"
                                alt="profile"
                                className="img-table"
                              />
                              <label>Linda Craver</label>
                            </div>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="9cf0f5f2f8fdffeefdeaf9eedcf9e4fdf1ecf0f9b2fff3f1"
                              >
                                [email&#160;protected]
                              </a>
                            </label>
                          </td>
                          <td>
                            <label>3</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-img">
                              <img
                                src="assets/img/profiles/avatar-17.jpg"
                                alt="profile"
                                className="img-table"
                              />
                              <label>Jenni Sims</label>
                            </div>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="97fdf2f9f9fee4fefae4d7f2eff6fae7fbf2b9f4f8fa"
                              >
                                [email&#160;protected]
                              </a>
                            </label>
                          </td>
                          <td>
                            <label>4</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-img">
                              <img
                                src="assets/img/profiles/avatar-14.jpg"
                                alt="profile"
                                className="img-table"
                              />
                              <label>Maria Cottons </label>
                            </div>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="acc1cddec5cdcfc3d8d8c3c2ecc9d4cdc1dcc0c982cfc3c1"
                              >
                                [email&#160;protected]
                              </a>
                            </label>
                          </td>
                          <td>
                            <label>6</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-img">
                              <img
                                src="assets/img/profiles/avatar-18.jpg"
                                alt="profile"
                                className="img-table"
                              />
                              <label>John Gibbs </label>
                            </div>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="e2888d8a8c86909b9186838e87a2879a838f928e87cc818d8f"
                              >
                                [email&#160;protected]
                              </a>
                            </label>
                          </td>
                          <td>
                            <label>7</label>
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

export default ReportWFH;
