/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function EmployeeGrid() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="row">
              <div className="col-xl-12 col-sm-12 col-12 mb-4">
                <div className="breadcrumb-path ">
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
                    <li className="breadcrumb-item active"> Employees</li>
                  </ul>
                  <h3>Employees</h3>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 mb-4">
                <div className="head-link-set">
                  <ul>
                    <li>
                      <a className="active" href="#">
                        All
                      </a>
                    </li>
                    <li>
                    <Link to="/employees/office">Office</Link>
                  </li>
                  <li>
                    <Link to="/employees/team">Team</Link>
                  </li>
                  </ul>
                  <Link className="btn-add" to="/add-employee">
                    <i data-feather="plus"></i> Add Employee
                  </Link>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 mb-4">
                <div className="row">
                  <div className="col-xl-10 col-sm-8 col-12 ">
                    <label className="employee_count">7 People</label>
                  </div>
                  <div className="col-xl-1 col-sm-2 col-12 ">
                  <Link to="/employees-grid" className="btn-view active">
                    <img src="../assets/img/grid.svg"></img>{" "}
                  </Link>
                </div>
                <div className="col-xl-1 col-sm-2 col-12 ">
                  <Link to="/employees" className="btn-view">
                    <img src="../assets/img/list.svg"></img>{" "}
                  </Link>
                </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="card grid-views">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-4 col-sm-12 col-12 ">
                        <div className="employee_grid">
                          <a href="profile.html">
                            <img
                              src="assets/img/profiles/avatar-14.jpg"
                              alt="profile"
                            />
                          </a>
                          <h5>Maria Cotton</h5>
                          <label>PHP Team Lead</label>
                          <a>
                            <span
                              className="__cf_email__"
                              data-cfemail="254844574c44464a51514a4b65405d44485549400b464a48"
                            >
                              [email&#160;protected]
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="col-xl-4 col-sm-12 col-12 ">
                        <div className="employee_grid">
                          <a href="profile.html">
                            <img
                              src="assets/img/profiles/avatar-15.jpg"
                              alt="profile"
                            />
                          </a>
                          <h5>Danny Ward</h5>
                          <label>Designing Team Lead</label>
                          <a>
                            <span
                              className="__cf_email__"
                              data-cfemail="187c797676616f796a7c587d60797568747d367b7775"
                            >
                              [email&#160;protected]
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="col-xl-4 col-sm-12 col-12 ">
                        <div className="employee_grid">
                          <a href="profile.html">
                            <img
                              src="assets/img/profiles/avatar-16.jpg"
                              alt="profile"
                            />
                          </a>
                          <h5>Linda Craver</h5>
                          <label>IOS Team Lead</label>
                          <a>
                            <span
                              className="__cf_email__"
                              data-cfemail="0f6366616b6e6c7d6e796a7d4f6a776e627f636a216c6062"
                            >
                              [email&#160;protected]
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-4 col-sm-12 col-12 ">
                        <div className="employee_grid">
                          <a href="profile.html">
                            <img
                              src="assets/img/profiles/avatar-17.jpg"
                              alt="profile"
                            />
                          </a>
                          <h5>Jenni Sims</h5>
                          <label>Android Team Lead</label>
                          <a>
                            <span
                              className="__cf_email__"
                              data-cfemail="345e515a5a5d475d594774514c55594458511a575b59"
                            >
                              [email&#160;protected]
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="col-xl-4 col-sm-12 col-12 ">
                        <div className="employee_grid">
                          <a href="profile.html">
                            <img
                              src="assets/img/profiles/avatar-18.jpg"
                              alt="profile"
                            />
                          </a>
                          <h5>John Gibbs</h5>
                          <label>Business Team Lead</label>
                          <a>
                            <span
                              className="__cf_email__"
                              data-cfemail="573d383f3933252e2433363b3217322f363a273b327934383a"
                            >
                              [email&#160;protected]
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="col-xl-4 col-sm-12 col-12 ">
                        <div className="employee_grid">
                          <a href="profile.html">
                            <img
                              src="assets/img/profiles/avatar-19.jpg"
                              alt="profile"
                            />
                          </a>
                          <h5>Stacey Linville</h5>
                          <label>Testing Team Lead</label>
                          <a>
                            <span
                              className="__cf_email__"
                              data-cfemail="85f6f1e4e6e0fce9ecebf3ece9e9e0c5e0fde4e8f5e9e0abe6eae8"
                            >
                              [email&#160;protected]
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-4 col-sm-12 col-12 ">
                        <div className="employee_grid">
                          <a href="profile.html">
                            <img
                              src="assets/img/profiles/avatar-10.jpg"
                              alt="profile"
                            />
                          </a>
                          <h5>Richard Wilson</h5>
                          <label>Operation Manager</label>
                          <a>
                            <span
                              className="__cf_email__"
                              data-cfemail="a3d1cac0cbc2d1c7d4cacfd0cccde3c6dbc2ced3cfc68dc0ccce"
                            >
                              [email&#160;protected]
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="col-xl-4 col-sm-12 col-12 ">
                        <div className="employee_grid">
                          <a href="profile.html">
                            <img
                              src="assets/img/profiles/avatar-20.jpg"
                              alt="profile"
                            />
                          </a>
                          <h5>Daniel Griffing</h5>
                          <label>Designing Team</label>
                          <a>
                            <span
                              className="__cf_email__"
                              data-cfemail="8ce8ede2e5e9e0ebfee5eaeae5e2ebcce9f4ede1fce0e9a2efe3e1"
                            >
                              [email&#160;protected]
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="col-xl-4 col-sm-12 col-12 ">
                        <div className="employee_grid">
                          <a href="profile.html">
                            <img
                              src="assets/img/profiles/avatar-21.jpg"
                              alt="profile"
                            />
                          </a>
                          <h5>Michelle Fairfax</h5>
                          <label>PHP Team</label>
                          <a>
                            <span
                              className="__cf_email__"
                              data-cfemail="f19c989299949d9d9497909883979089b19489909c819d94df929e9c"
                            >
                              [email&#160;protected]
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row pagination_path">
                      <div className="col-sm-12 col-md-5">
                        <div
                          className="dataTables_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 10 of 12 entries
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-7">
                        <div className="dataTables_paginate paging_simple_number">
                          <ul className="pagination">
                            <li className="paginate_button page-item previous disabled">
                              <a
                                href="#"
                                data-dt-idx="0"
                                tabindex="0"
                                className="page-link btnnavingation"
                              >
                                <i data-feather="arrow-left"></i>
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a href="#" className="page-link">
                                1
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a href="#" tabindex="0" className="page-link">
                                2
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a href="#" tabindex="0" className="page-link">
                                3
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a href="#" tabindex="0" className="page-link">
                                4
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a href="#" tabindex="0" className="page-link">
                                . . .
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a href="#" tabindex="0" className="page-link">
                                10
                              </a>
                            </li>
                            <li className="paginate_button page-item next">
                              <a
                                href="#"
                                tabindex="0"
                                className="page-link btnnavingation"
                              >
                                <i data-feather="arrow-right"></i>
                              </a>
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
      </div>
    </div>
  );
}

export default EmployeeGrid;
