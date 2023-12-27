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
        <div class="page-wrapper">
          <div class="content container-fluid">
            <div class="row">
              <div class="col-xl-12 col-sm-12 col-12 ">
                <div class="breadcrumb-path mb-4">
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/index">
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
              <div class="col-xl-12 col-sm-12 col-12 mb-4">
                <div class="head-link-set">
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
                      <Link class="active" to="#">
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
              <div class="col-xl-12 col-sm-12 col-12 mb-4">
                <div class="row">
                  <div class="col-xl-12 col-sm-12 col-12">
                    <div class="card ">
                      <div class="card-header">
                        <h2 class="card-titles">Payroll Forms</h2>
                      </div>
                      <div class="card-body">
                        <div class="table-responsive">
                          <table class="table  custom-table no-footer border">
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
                                  <div class="table-img">
                                    <a href="profile.html">
                                      <img
                                        src="assets/img/profiles/avatar-10.jpg"
                                        alt="profile"
                                        class="img-table"
                                      />
                                    </a>
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
                                  <div class="table-img">
                                    <a href="profile.html">
                                      <img
                                        src="assets/img/profiles/avatar-17.jpg"
                                        alt="profile"
                                        class="img-table"
                                      />
                                    </a>
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
                                  <div class="table-img">
                                    <Link to="/profile">
                                      <img
                                        src="assets/img/profiles/avatar-19.jpg"
                                        alt="profile"
                                        class="img-table"
                                      />
                                    </Link>
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
                                  <div class="table-img">
                                    <Link to="/profile">
                                      <img
                                        src="assets/img/profiles/avatar-14.jpg"
                                        alt="profile"
                                        class="img-table"
                                      />
                                    </Link>
                                    <label>Maria Cotton</label>
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
                                      to="/cdn-cgi/l/email-protection"
                                      class="__cf_email__"
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
                                  <div class="table-img">
                                    <Link to="/profile">
                                      <img
                                        src="assets/img/profiles/avatar-18.jpg"
                                        alt="profile"
                                        class="img-table"
                                      />
                                    </Link>
                                    <label>John Gibbs</label>
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
                                    <Link
                                      to="/cdn-cgi/l/email-protection"
                                      class="__cf_email__"
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
