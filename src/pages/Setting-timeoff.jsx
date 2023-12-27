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
        <div class="page-wrapper">
          <div class="content container-fluid">
            <div class="row">
              <div class="col-xl-12 col-sm-12 col-12">
                <div class="breadcrumb-path mb-4">
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">
                        <img
                          src="assets/img/dash.png"
                          class="mr-2"
                          alt="breadcrumb"
                        />
                        Home
                      </Link>
                    </li>
                    <li class="breadcrumb-item active"> Settings</li>
                  </ul>
                  <h3>Settings</h3>
                </div>
              </div>
              <div class="col-xl-12 col-sm-12 col-12 mb-4">
                <div class="head-link-set">
                  <ul>
                    <li>
                      <Link to="/setting">General</Link>
                    </li>
                    <li>
                      <Link class="active" to="/setting">
                        Time Off
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-12 col-sm-12 col-12 ">
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12  d-flex">
                    <div class="card card-lists flex-fill">
                      <div class="card-header ">
                        <h2 class="card-titles">Company Default</h2>
                        <a
                          data-toggle="modal"
                          data-target="#add_company"
                          class="edit-link"
                        >
                          {" "}
                          <i data-feather="edit"></i>
                        </a>
                      </div>
                      <div class="card-body">
                        <div class="default-set">
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
                  <div class="col-xl-6 col-sm-12 col-12 d-flex">
                    <div class="card card-lists flex-fill">
                      <div class="card-header ">
                        <h2 class="card-titles">
                          Working Week
                          <span>Set the dates that your company works.</span>
                        </h2>
                        <a
                          data-toggle="modal"
                          data-target="#edit_working"
                          class="edit-link"
                        >
                          {" "}
                          <i data-feather="edit"></i>
                        </a>
                      </div>
                      <div class="card-body">
                        <div class="form-week">
                          <ul>
                            <li>
                              <a class="active">Mon</a>
                            </li>
                            <li>
                              <a class="active">Tue</a>
                            </li>
                            <li>
                              <a class="active">Wed</a>
                            </li>
                            <li>
                              <a class="active">Thur</a>
                            </li>
                            <li>
                              <a class="active">Fri</a>
                            </li>
                            <li>
                              <a class="inactive">Sat</a>
                            </li>
                            <li>
                              <a class="inactive">Sun</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-12 col-sm-12 col-12 ">
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 d-flex">
                    <div class="card card-lists flex-fill">
                      <div class="card-header ">
                        <h2 class="card-titles">
                          Working From Home
                          <span>
                            Reflect your companys working from home policy by
                            editing the approval process or disabling the
                            feature entirely.
                          </span>
                        </h2>
                      </div>
                      <div class="card-body">
                        <div class="working-set">
                          <span>25 Days</span>
                          <label class="switch">
                            <input type="checkbox" checked />
                            <span class="slider"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 d-flex">
                    <div class="card card-lists flex-fill">
                      <div class="card-header ">
                        <h2 class="card-titles">Focus Technologies</h2>
                      </div>
                      <div class="card-body p-0">
                        <div class="table-responsive">
                          <table class="table  custom-table  no-footer">
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
                                  <div class="table-img">
                                    <img
                                      src="../assets/img/profiles/avatar-15.jpg"
                                      class="img-table"
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

        <div class="customize_popup">
          <div
            class="modal fade"
            id="add_company"
            tabindex="-1"
            aria-labelledby="staticBackdropLabeladd"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabeladd">
                    Company Default
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class=" col-md-12 p-0">
                    <div class=" form-popup">
                      <label>Time Off Allowance</label>
                      <input type="text" placeholder="" value="25 days" />
                    </div>
                    <div class=" form-popup">
                      <label>Year Start</label>
                      <input type="text" placeholder="" value="01-01-2021" />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-add">
                    Apply
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="customize_popup">
          <div
            class="modal fade"
            id="edit_working"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Edit Working Week
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class=" col-md-12 p-0">
                    <div class="checkworking">
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
                <div class="modal-footer">
                  <button type="button" class="btn btn-add">
                    Add
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
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
