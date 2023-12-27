/* eslint-disable react/no-unknown-property */
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

function Company() {
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
                    <li className="breadcrumb-item active"> Company</li>
                  </ul>
                  <h3>Company </h3>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="row">
                  <div className="col-xl-8 col-sm-12 col-12 d-flex ">
                    <div className="card card-lists flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">Focus Technologies</h2>
                        <a
                          className="edit-link"
                          data-toggle="modal"
                          data-target="#editcompany"
                        >
                          {" "}
                          <i data-feather="edit"></i>
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-6 col-sm-12 col-12 d-flex ">
                            <div className="member-registor flex-fill">
                              <ul>
                                <li>
                                  <label>Register Number</label>
                                  <span>FT0070</span>
                                </li>
                                <li>
                                  <label>Incorporation Date</label>
                                  <span>07 May 2000</span>
                                </li>
                                <li>
                                  <label>VAT Number</label>
                                  <span>VT0070</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xl-6 col-sm-12 col-12 d-flex">
                            <div className="member-address flex-fill">
                              <label>Address</label>
                              <span>
                                Santiago de Surco Av.Caminos del Inca 1325
                                United States
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12 col-sm-12 col-12 ">
                            <div className="btn-link my-3">
                              <a
                                className="btn btn-new"
                                data-toggle="modal"
                                data-target="#addcompany"
                              >
                                Add Company Information
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-12 col-12 d-flex">
                    <div className="card  flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">Focus Technologies</h2>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-12 col-sm-12 col-12 ">
                            <div className="member-edits">
                              <ul>
                                <li>
                                  <label>07448503267</label>
                                  <a className="edit-link">
                                    {" "}
                                    <i data-feather="edit"></i>
                                  </a>
                                </li>
                                <li>
                                  <label>focustechnology.com</label>
                                  <a className="edit-link">
                                    {" "}
                                    <i data-feather="edit"></i>
                                  </a>
                                </li>
                                <li>
                                  <label>
                                    <a
                                      href="/cdn-cgi/l/email-protection"
                                      className="__cf_email__"
                                      data-cfemail="f29a80b2949d9187818697919a9c9d9e9d958bdc919d9f"
                                    >
                                      [email&#160;protected]
                                    </a>
                                  </label>
                                  <a className="edit-link">
                                    {" "}
                                    <i data-feather="edit"></i>
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
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="card card-lists ">
                  <div className="card-header">
                    <h2 className="card-titles">DocumentsAdd </h2>
                    <a className="btn btn-head"> Add Document </a>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table  custom-table  no-footer">
                        <thead>
                          <tr>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Size</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="table-img">
                                <img src="assets/img/pdf.png" alt="pdf" />
                              </div>
                            </td>
                            <td>
                              <label>Leave & Attendance Policy</label>
                            </td>
                            <td>
                              <label> 05 Jan 2012 </label>
                            </td>
                            <td>
                              <label>20 MB</label>
                            </td>
                            <td>
                              <label>
                                <a
                                  className="action_label4"
                                  data-toggle="modal"
                                  data-target="#delete"
                                >
                                  Delete <i data-feather="trash-2"></i>
                                </a>
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="table-img">
                                <img src="assets/img/word.png" alt="profile" />
                              </div>
                            </td>
                            <td>
                              <label>Dress Code Policy </label>
                            </td>
                            <td>
                              <label> 05 Jan 2012 </label>
                            </td>
                            <td>
                              <label> 30MB </label>
                            </td>
                            <td>
                              <label>
                                <a
                                  className="action_label4"
                                  data-toggle="modal"
                                  data-target="#delete"
                                >
                                  Delete <i data-feather="trash-2"></i>
                                </a>
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="table-img">
                                <img src="assets/img/pdf.png" alt="pdf" />
                              </div>
                            </td>
                            <td>
                              <label>Leave & Attendance Policy</label>
                            </td>
                            <td>
                              <label> 05 Jan 2012 </label>
                            </td>
                            <td>
                              <label>20 MB</label>
                            </td>
                            <td>
                              <label>
                                <a
                                  className="action_label4"
                                  data-toggle="modal"
                                  data-target="#delete"
                                >
                                  Delete <i data-feather="trash-2"></i>
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
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="row">
                  <div className="col-xl-6 col-sm-12 col-12 d-flex">
                    <div className="card card-lists flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">
                          Focus Technologies<span>Head Office</span>
                        </h2>
                        <a
                          className="edit-link"
                          data-toggle="modal"
                          data-target="#editoffice"
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
                  <div className="col-xl-6 col-sm-12 col-12  d-flex">
                    <div className="card card-lists flex-fill">
                      <div className="card-header">
                        <h2 className="card-title">Overview </h2>
                        <a className="btn btn-head" href="manage.html">
                          {" "}
                          Manage Teams{" "}
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="over-view-path">
                          <ul>
                            <li>
                              <label>Teams</label>
                              <span>6</span>
                            </li>
                            <li>
                              <label>People</label>
                              <span>7</span>
                            </li>
                          </ul>
                        </div>
                        <div className="btn-set pl-0">
                          <a className="btn btn-apply" href="employee.html">
                            People Directory
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

        <div className="customize_popup">
          <div
            className="modal fade"
            id="addcompany"
            data-backdrop="static"
            data-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Add Company Information
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
                    <div className=" form-popup">
                      <label>Registered Company Number</label>
                      <input type="text" />
                    </div>
                    <div className=" form-popup">
                      <label>Incorporation Date</label>
                      <input type="text" />
                    </div>
                    <div className=" form-popup">
                      <label>Vat Number</label>
                      <input type="text" />
                    </div>
                    <div className=" form-popup">
                      <label>Address line 1</label>
                      <input type="text" />
                    </div>
                    <div className=" form-popup">
                      <label>Address line 2</label>
                      <input type="text" />
                    </div>
                    <div className=" form-popup">
                      <label>City</label>
                      <input type="text" />
                    </div>
                    <div className=" form-popup">
                      <label>Country</label>
                      <input type="text" />
                    </div>
                    <div className=" form-popup">
                      <label>Post - Code</label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">
                    Add
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
            id="editcompany"
            data-backdrop="static"
            data-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Edit Company Information
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
                    <div className=" form-popup">
                      <label>Registered Company Number</label>
                      <input type="text" />
                    </div>
                    <div className=" form-popup">
                      <label>Incorporation Date</label>
                      <input type="text" />
                    </div>
                    <div className=" form-popup">
                      <label>Vat Number</label>
                      <input type="text" />
                    </div>
                    <div className=" form-popup">
                      <label>Address line 1</label>
                      <input type="text" />
                    </div>
                    <div className=" form-popup">
                      <label>Address line 2</label>
                      <input type="text" />
                    </div>
                    <div className=" form-popup">
                      <label>City</label>
                      <input type="text" />
                    </div>
                    <div className=" form-popup">
                      <label>Country</label>
                      <input type="text" />
                    </div>
                    <div className=" form-popup">
                      <label>Post - Code</label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">
                    Add
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
            id="editoffice"
            tabindex="-1"
            aria-labelledby="staticBackdropLabels"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabels">
                    Edit Office
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
                      <input type="text" placeholder="Office Name" />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">
                    Add
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
            <div className="modal-dialog modal-dialog-centered ">
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

export default Company;
