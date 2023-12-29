/* eslint-disable react/no-unknown-property */

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function ProfilePayroll() {
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
                      <Link to="/index">
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
                      <Link className="active" to="#">
                        Payroll
                      </Link>
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
              <div className="col-xl-12 col-sm-12 col-12 mb-4">
                <div className="row">
                  <div className="col-xl-12 col-sm-12 col-12">
                    <div className="card ">
                      <div className="card-header">
                        <h2 className="card-titles">Payroll Forms</h2>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table  custom-table no-footer border">
                            <thead>
                              <tr>
                                <th> Name </th>
                                <th>Active</th>
                                <th>Email</th>
                                <th>Salary </th>
                                <th>Bank Name</th>
                                <th>Account Number</th>
                              </tr>
                            </thead>
                            <tbody>
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
                                      data-cfemail="4420252a3d3325362004213c25293428216a272b29"
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
                                  <div className="table-img">
                                    <a href="profile.html">
                                      <img
                                        src="assets/img/profiles/avatar-17.jpg"
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
                                      data-cfemail="187471767c797b6a796e7d6a587d60797568747d367b7775"
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
                                  <div className="table-img">
                                    <Link to="/profile">
                                      <img
                                        src="assets/img/profiles/avatar-19.jpg"
                                        alt="profile"
                                        className="img-table"
                                      />
                                    </Link>
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
                                      data-cfemail="79131c1717100a10140a391c01181409151c571a1614"
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
                                  <div className="table-img">
                                    <Link to="/profile">
                                      <img
                                        src="assets/img/profiles/avatar-14.jpg"
                                        alt="profile"
                                        className="img-table"
                                      />
                                    </Link>
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
                                      to="/cdn-cgi/l/email-protection"
                                      className="__cf_email__"
                                      data-cfemail="c3aea2b1aaa2a0acb7b7acad83a6bba2aeb3afa6eda0acae"
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
                                  <div className="table-img">
                                    <Link to="/profile">
                                      <img
                                        src="assets/img/profiles/avatar-18.jpg"
                                        alt="profile"
                                        className="img-table"
                                      />
                                    </Link>
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
                                  <label>
                                    <Link
                                      to="/cdn-cgi/l/email-protection"
                                      className="__cf_email__"
                                      data-cfemail="8fe5e0e7e1ebfdf6fcebeee3eacfeaf7eee2ffe3eaa1ece0e2"
                                    >
                                      [email&#160;protected]
                                    </Link>
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
      </div>
    </div>
  );
}

export default ProfilePayroll;
