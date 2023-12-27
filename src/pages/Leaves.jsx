/* eslint-disable react/no-unknown-property */

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

function Leaves() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className="div">
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="row">
              <div className="col-xl-12 col-sm-12 col-12 mb-4">
                <div className="breadcrumb-path ">
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
                    <li className="breadcrumb-item active"> Leave</li>
                  </ul>
                  <h3>Leave</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-sm-12 col-12 d-flex	">
                <div className="card card-lists flex-fill">
                  <div className="card-header">
                    <h2 className="card-titles">
                      Focus Technologies<span>Head Office</span>
                    </h2>
                    <a
                      className="edit-link"
                      data-toggle="modal"
                      data-target="#editmember"
                    >
                      {" "}
                      <i data-feather="edit"></i>
                    </a>
                  </div>
                  <div className="card-body d-flex align-items-center">
                    <div className=" member-head employee-image">
                      <h2>Members</h2>
                      <div className="avatar-group">
                        <div className="avatar avatar-xs group_img group_header">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="../assets/img/profiles/avatar-10.jpg"
                          />
                        </div>
                        <div className="avatar avatar-xs group_img group_header">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="../assets/img/profiles/avatar-15.jpg"
                          />
                        </div>
                        <div className="avatar avatar-xs group_img group_header">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="../assets/img/profiles/avatar-16.jpg"
                          />
                        </div>
                        <div className="avatar avatar-xs group_img group_header">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="../assets/img/profiles/avatar-17.jpg"
                          />
                        </div>
                        <div className="avatar avatar-xs group_img group_header">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="../assets/img/profiles/avatar-14.jpg"
                          />
                        </div>
                        <div className="avatar avatar-xs group_img group_header">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="../assets/img/profiles/avatar-18.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="employee_status text-center">
                      <img
                        alt="User Image"
                        src="../assets/img/profiles/avatar-17.jpg"
                      />
                      <label>Jenni Sims is working from home today.</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="employee_status text-center">
                      <img
                        alt="User Image"
                        src="../assets/img/profiles/avatar-18.jpg"
                      />
                      <label>John Gibbs is away today.</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-titles">Apply Leaves</h2>
                  </div>
                  <div className="form-creation">
                    <div className="row">
                      <div className="col-xl-6 col-sm-6 col-12 ">
                        <div className="form-group">
                          <label>
                            Leave Type <span className="mandatory">*</span>{" "}
                          </label>
                          <select className="select">
                            <option value="Select leave">Select leave</option>
                            <option value="leave">Casual leave</option>
                            <option value="leave">Earned leave</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-6 col-12 ">
                        <div className="form-group">
                          <label>Remaining Leaves</label>
                          <input type="text" value="10" disabled />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>From </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>To</label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>
                            Half Day <span className="mandatory">*</span>{" "}
                          </label>
                          <select className="select">
                            <option value="Select leave">Select </option>
                            <option value="leave">Casual leave</option>
                            <option value="leave">Earned leave</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>Remaining Leaves</label>
                          <input type="text" value="2" disabled />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>From </label>
                          <textarea rows="4" cols="50">
                            {" "}
                          </textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-sm-12 col-12 ">
                        <div className="form-btn">
                          <a href="#" className="btn btn-apply">
                            Apply
                          </a>
                          <a href="#" className="btn btn-secondary">
                            Cancel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-titles">Leave Details</h2>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table  custom-table  no-footer">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Total Employees </th>
                            <th>First Half </th>
                            <th>Second Half </th>
                            <th>Working From Home </th>
                            <th>Absent</th>
                            <th>Today Aways</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <label>05 May 2019 </label>
                            </td>
                            <td>
                              <label>7 </label>
                            </td>
                            <td>
                              <label>6 </label>
                            </td>
                            <td>
                              <label>6 </label>
                            </td>
                            <td>
                              <label>1 </label>
                            </td>
                            <td>
                              <label>0 </label>
                            </td>
                            <td>
                              <label>1 </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="card ">
                  <div className="card-header">
                    <h2 className="card-titles">Leave Details</h2>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table  custom-table  no-footer">
                        <thead>
                          <tr>
                            <th>Employee</th>
                            <th>Leave Type </th>
                            <th>From </th>
                            <th>To</th>
                            <th>Days</th>
                            <th>Remaining Days </th>
                            <th>Notes</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="table-img">
                                <a href="profile.html">
                                  <img
                                    src="../assets/img/profiles/avatar-13.jpg"
                                    alt="profile"
                                    className="img-table"
                                  />
                                </a>
                                <label>Sean Black</label>
                              </div>
                            </td>
                            <td>
                              <label>Parental Leave </label>
                            </td>
                            <td>
                              <label>05 Dec 2019 </label>
                            </td>
                            <td>
                              <label>07 Dec 2019 </label>
                            </td>
                            <td>
                              <label>3</label>
                            </td>
                            <td>
                              <label>9</label>
                            </td>
                            <td>
                              <label>Parenting Leave</label>
                            </td>
                            <td>
                              <label>
                                <a className="action_label3">Approved</a>
                              </label>
                            </td>
                            <td>
                              <label>
                                <a
                                  className="action_label4"
                                  data-toggle="modal"
                                  data-target="#delete"
                                >
                                  Delete <i data-feather="trash-2"></i>{" "}
                                </a>
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="table-img">
                                <a href="profile.html">
                                  <img
                                    src="../assets/img/profiles/avatar-16.jpg"
                                    alt="profile"
                                    className="img-table"
                                  />
                                </a>
                                <label>Linda Craver</label>
                              </div>
                            </td>
                            <td>
                              <label>Parental Leave </label>
                            </td>
                            <td>
                              <label>05 Dec 2019 </label>
                            </td>
                            <td>
                              <label>07 Dec 2019 </label>
                            </td>
                            <td>
                              <label>3</label>
                            </td>
                            <td>
                              <label>9</label>
                            </td>
                            <td>
                              <label>Going to Hospital</label>
                            </td>
                            <td>
                              <label>
                                <a className="action_label3">Approved</a>
                              </label>
                            </td>
                            <td>
                              <label>
                                <a
                                  className="action_label4"
                                  data-toggle="modal"
                                  data-target="#delete"
                                >
                                  Delete <i data-feather="trash-2"></i>{" "}
                                </a>
                              </label>
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
                                <label>Jenni Sims</label>
                              </div>
                            </td>
                            <td>
                              <label>Parental Leave </label>
                            </td>
                            <td>
                              <label>05 Dec 2019 </label>
                            </td>
                            <td>
                              <label>07 Dec 2019 </label>
                            </td>
                            <td>
                              <label>3</label>
                            </td>
                            <td>
                              <label>9</label>
                            </td>
                            <td>
                              <label>Raining</label>
                            </td>
                            <td>
                              <label>
                                <a className="action_label3">Approved</a>
                              </label>
                            </td>
                            <td>
                              <label>
                                <a
                                  className="action_label4"
                                  data-toggle="modal"
                                  data-target="#delete"
                                >
                                  Delete <i data-feather="trash-2"></i>{" "}
                                </a>
                              </label>
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

        <div className="customize_popup">
          <div
            className="modal fade"
            id="edit"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Edit Office
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className=" col-md-12 p-0">
                    <div className=" form-popup">
                      <label>Office Name</label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-apply">
                    Apply
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="customize_popup">
          <div
            className="modal fade"
            id="editmember"
            tabindex="-1"
            aria-labelledby="staticBackdropLabels"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabels">
                    Edit Member
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className=" col-md-12 p-0">
                    <div className=" form-popup">
                      <input type="text" placeholder="Member Name" />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="customize_popup">
          <div
            className="modal fade"
            id="delete"
            tabindex="-1"
            aria-labelledby="staticBackdropLabels1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header text-centers border-0">
                  <h5
                    className="modal-title text-center"
                    id="staticBackdropLabels1"
                  >
                    Are You Sure Want to Delete?
                  </h5>
                </div>
                <div className="modal-footer text-centers">
                  <button type="button" className="btn btn-primary">
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
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

export default Leaves;
