/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function ReportPayroll() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div>
        <div class="page-wrapper">
          <div class="content container-fluid">
            <div class="row">
              <div class="col-xl-12 col-sm-12 col-12 ">
                <div class="breadcrumb-path mb-4">
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">
                        <img
                          src="assets/img/dash.png"
                          class="mr-2"
                          alt="breadcrumb"
                        />
                        Home
                      </a>
                    </li>
                    <li class="breadcrumb-item active"> Reports</li>
                  </ul>
                  <h3>Reports </h3>
                </div>
              </div>
              <div class="col-xl-12 col-sm-12 col-12 mb-4">
                <div class="head-link-set">
                  <ul>
                    <li>
                      <Link to="/report">Team Reports</Link>
                    </li>
                    <li>
                      <Link to="/report-leaves">Leave Reports</Link>
                    </li>
                    <li>
                      <Link class="active" to="/report-payroll">
                        Payroll Reports
                      </Link>
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
              <div class="col-xl-12 col-sm-12 col-12 mb-4">
                <div class="form-set">
                  <div class="row">
                    <div class="col-xl-3 col-sm-6 col-12 ">
                      <div class="form-group">
                        <input type="text" placeholder="start Date" />
                      </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                      <div class="form-group">
                        <input type="text" placeholder="From" />
                      </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 ">
                      <div class="form-group">
                        <input type="text" placeholder="To" />
                      </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 ">
                      <a class="btn btn-save">Apply Filter</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-12 col-sm-12 col-12 ">
                <div class="card">
                  <div class="table-responsive">
                    <table class="table  custom-table no-footer">
                      <thead>
                        <tr>
                          <th>Team Member </th>
                          <th>Active </th>
                          <th>Email</th>
                          <th>Salary</th>
                          <th>Bank Name</th>
                          <th>Account Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="table-img">
                              <img
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="profile"
                                class="img-table"
                              />
                              <label>Danny Ward</label>
                            </div>
                          </td>
                          <td class="tab-select">
                            <select class="select">
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
                            </select>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                class="__cf_email__"
                                data-cfemail="99fdf8f7e0eef8ebfdd9fce1f8f4e9f5fcb7faf6f4"
                              >
                                [email&#160;protected]
                              </a>{" "}
                            </label>
                          </td>
                          <td>
                            <label>$4000</label>
                          </td>
                          <td>
                            <label>Life Essence Banks, Inc.</label>
                          </td>
                          <td>
                            <label>112300987652</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="table-img">
                              <img
                                src="assets/img/profiles/avatar-16.jpg"
                                alt="profile"
                                class="img-table"
                              />
                              <label>Linda Craver</label>
                            </div>
                          </td>
                          <td class="tab-select">
                            <select class="select">
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
                            </select>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                class="__cf_email__"
                                data-cfemail="fe9297909a9f9d8c9f889b8cbe9b869f938e929bd09d9193"
                              >
                                [email&#160;protected]
                              </a>
                            </label>
                          </td>
                          <td>
                            <label>$3000</label>
                          </td>
                          <td>
                            <label>Life Essence Banks, Inc.</label>
                          </td>
                          <td>
                            <label>112300987652</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="table-img">
                              <img
                                src="assets/img/profiles/avatar-17.jpg"
                                alt="profile"
                                class="img-table"
                              />
                              <label>Jenni Sims</label>
                            </div>
                          </td>
                          <td class="tab-select">
                            <select class="select">
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
                            </select>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                class="__cf_email__"
                                data-cfemail="adc7c8c3c3c4dec4c0deedc8d5ccc0ddc1c883cec2c0"
                              >
                                [email&#160;protected]
                              </a>
                            </label>
                          </td>
                          <td>
                            <label>$2000</label>
                          </td>
                          <td>
                            <label>Life Essence Banks, Inc.</label>
                          </td>
                          <td>
                            <label>112300987652</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="table-img">
                              <img
                                src="assets/img/profiles/avatar-14.jpg"
                                alt="profile"
                                class="img-table"
                              />
                              <label>Maria Cottons </label>
                            </div>
                          </td>
                          <td class="tab-select">
                            <select class="select">
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
                            </select>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                class="__cf_email__"
                                data-cfemail="e38e82918a82808c97978c8da3869b828e938f86cd808c8e"
                              >
                                [email&#160;protected]
                              </a>
                            </label>
                          </td>
                          <td>
                            <label>$4000</label>
                          </td>
                          <td>
                            <label>Life Essence Banks, Inc.</label>
                          </td>
                          <td>
                            <label>112300987652</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="table-img">
                              <img
                                src="assets/img/profiles/avatar-18.jpg"
                                alt="profile"
                                class="img-table"
                              />
                              <label>John Gibbs </label>
                            </div>
                          </td>
                          <td class="tab-select">
                            <select class="select">
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
                            </select>
                          </td>
                          <td>
                            <label>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                class="__cf_email__"
                                data-cfemail="8ae0e5e2e4eef8f3f9eeebe6efcaeff2ebe7fae6efa4e9e5e7"
                              >
                                [email&#160;protected]
                              </a>
                            </label>
                          </td>
                          <td>
                            <label>$4500</label>
                          </td>
                          <td>
                            <label>Life Essence Banks, Inc.</label>
                          </td>
                          <td>
                            <label>112300987652</label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="btn-set">
                    <a class="btn btn-dwnd mt-3 mb-3">Download Report</a>
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

export default ReportPayroll;
