/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

function Settingtimeoff() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className="div">
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="row">
              <div className="col-xl-12 col-sm-12 col-12">
                <div className="breadcrumb-path mb-4">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <img
                          src="assets/img/dash.png"
                          className="mr-2"
                          alt="breadcrumb"
                        />
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active"> Settings</li>
                  </ul>
                  <h3>Settings</h3>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 mb-4">
                <div className="head-link-set">
                  <ul>
                    <li>
                      <Link to="/setting">General</Link>
                    </li>
                    <li>
                      <Link className="active" to="/setting">
                        Time Off
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="row">
                  <div className="col-xl-6 col-sm-12 col-12  d-flex">
                    <div className="card card-lists flex-fill">
                      <div className="card-header ">
                        <h2 className="card-titles">Company Default</h2>
                        <a
                          data-toggle="modal"
                          data-target="#add_company"
                          className="edit-link"
                        >
                          {" "}
                          <i data-feather="edit"></i>
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="default-set">
                          <ul>
                            <li>
                              <label>Allowance</label>
                            </li>
                            <li>
                              <span>25 Days</span>
                            </li>
                            <li>
                              <label>Year Start</label>
                            </li>
                            <li>
                              <span>01 January</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12 col-12 d-flex">
                    <div className="card card-lists flex-fill">
                      <div className="card-header ">
                        <h2 className="card-titles">
                          Working Week
                          <span>Set the dates that your company works.</span>
                        </h2>
                        <a
                          data-toggle="modal"
                          data-target="#edit_working"
                          className="edit-link"
                        >
                          {" "}
                          <i data-feather="edit"></i>
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="form-week">
                          <ul>
                            <li>
                              <a className="active">Mon</a>
                            </li>
                            <li>
                              <a className="active">Tue</a>
                            </li>
                            <li>
                              <a className="active">Wed</a>
                            </li>
                            <li>
                              <a className="active">Thur</a>
                            </li>
                            <li>
                              <a className="active">Fri</a>
                            </li>
                            <li>
                              <a className="inactive">Sat</a>
                            </li>
                            <li>
                              <a className="inactive">Sun</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="row">
                  <div className="col-xl-6 col-sm-12 col-12 d-flex">
                    <div className="card card-lists flex-fill">
                      <div className="card-header ">
                        <h2 className="card-titles">
                          Working From Home
                          <span>
                            Reflect your companys working from home policy by
                            editing the approval process or disabling the
                            feature entirely.
                          </span>
                        </h2>
                      </div>
                      <div className="card-body">
                        <div className="working-set">
                          <span>25 Days</span>
                          <label className="switch">
                            <input type="checkbox" checked />
                            <span className="slider"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12 col-12 d-flex">
                    <div className="card card-lists flex-fill">
                      <div className="card-header ">
                        <h2 className="card-titles">Focus Technologies</h2>
                      </div>
                      <div className="card-body p-0">
                        <div className="table-responsive">
                          <table className="table  custom-table  no-footer">
                            <thead>
                              <tr>
                                <th>Team Member </th>
                                <th>Allowance</th>
                                <th>Days Used</th>
                                <th>Approvers</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="table-img">
                                    <img
                                      src="../assets/img/profiles/avatar-15.jpg"
                                      className="img-table"
                                      alt="profile"
                                    />
                                    <label>Danny Ward</label>
                                  </div>
                                </td>
                                <td>
                                  <label>25</label>
                                </td>
                                <td>
                                  <label>20 </label>
                                </td>
                                <td>
                                  <label>Robert Wilson</label>
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

        <div className="customize_popup">
          <div
            className="modal fade"
            id="add_company"
            tabindex="-1"
            aria-labelledby="staticBackdropLabeladd"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabeladd">
                    Company Default
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
                      <label>Time Off Allowance</label>
                      <input type="text" placeholder="" value="25 days" />
                    </div>
                    <div className=" form-popup">
                      <label>Year Start</label>
                      <input type="text" placeholder="" value="01-01-2021" />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-add">
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
            id="edit_working"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Edit Working Week
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
                    <div className="checkworking">
                      <ul>
                        <li>
                          <input type="checkbox" id="mon" checked />
                          <label for="mon">Mon</label>
                        </li>
                        <li>
                          <input type="checkbox" id="tue" checked />
                          <label for="tue">Tue</label>
                        </li>
                        <li>
                          <input type="checkbox" id="wed" checked />
                          <label for="wed">Wed</label>
                        </li>
                        <li>
                          <input type="checkbox" id="thur" checked />
                          <label for="thur">Thur</label>
                        </li>
                        <li>
                          <input type="checkbox" id="fri" checked />
                          <label for="fri">Fri</label>
                        </li>
                        <li>
                          <input type="checkbox" id="sat" />
                          <label for="sat">Sat</label>
                        </li>
                        <li>
                          <input type="checkbox" id="sun" />
                          <label for="sun">Sun</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-add">
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
      </div>
    </div>
  );
}

export default Settingtimeoff;
