/* eslint-disable react/no-unknown-property */

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function Setting() {
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
                          src="../assets/img/dash.png"
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
                      <a className="active" href="#">
                        General
                      </a>
                    </li>
                    <li>
                      <Link to="/setting-timeoff">Time Off</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="row">
                  <div className="col-xl-6 col-sm-12 col-12">
                    <div className="card ">
                      <div className="card-header">
                        <h2 className="card-titles">Company Logo</h2>
                      </div>
                      <div className="card-body">
                        <div className="company-logo">
                          <label className="logo-upload" for="edit_img">
                            <input type="file" id="edit_img" />
                            <a>
                              <i data-feather="edit"></i>
                            </a>
                          </label>
                          <img src="assets/img/logo2.png" alt="logo" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12 col-12 ">
                    <div className="card ">
                      <div className="card-header">
                        <h2 className="card-titles">Your Company</h2>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-12 col-sm-6 col-12 ">
                            <div className="form-group">
                              <label>Company Name </label>
                              <input type="text" />
                            </div>
                          </div>
                          <div className="col-xl-12 col-sm-6 col-12 ">
                            <div className="form-group">
                              <label>Company Url</label>
                              <input type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="form-btn">
                          <a href="#" className="btn btn-apply">
                            Save Changes
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
            id="addteam"
            data-backdrop="static"
            data-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lgs">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Create New Team
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
                      <label>Team Name</label>
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
      </div>
    </div>
  );
}

export default Setting;
