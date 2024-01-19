/* eslint-disable react/no-unknown-property */

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

function Calendar() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className="page-wrapper calendar_page">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-xl-12 col-sm-12 col-12  mb-4">
              <div className="breadcrumb-path">
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
                  <li className="breadcrumb-item active"> Approvement</li>
                </ul>
                <h3>Approvement</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h2 className="calendar_head">Calendar</h2>
                  </div>
                  <div className="calendar_events">
                    <h4 className="card-title">
                      Drag and drop your event or click in the calendar
                    </h4>
                    <div id="calendar-events" className="mb-3">
                      <div className="calendar-events" data-className="bg-info">
                        <i className="fas fa-square bg-primary"></i> New Theme Release
                      </div>
                      <div className="calendar-events" data-className="bg-success">
                        <i className="fas fa-square bg-success"></i>My Event
                      </div>
                      <div className="calendar-events" data-className="bg-danger">
                        <i className="fas fa-square bg-warning"></i> Meet Manager
                      </div>
                      <div className="calendar-events" data-className="bg-warning">
                        <i className="fas fa-square bg-secondary"></i> Create New
                        theme
                      </div>
                    </div>
                    <div className="checkbox  mb-3">
                      <input id="drop-remove" type="checkbox" />
                      <label for="drop-remove">Remove after drop</label>
                    </div>
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#add_new_event"
                      className="btn mb-3 btn-primary btn-block"
                    >
                      <i className="fas fa-plus"></i> Create New
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="card bg-white">
                  <div className="card-body">
                    <div id="calendar"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="customize_popup">
              <div
                className=""
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabelevent">
                        Add New Event
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
                          <label>Event Name</label>
                          <input type="text" placeholder="Insert Event Name" />
                        </div>
                        <div className=" form-popup">
                          <label>Category Color</label>
                          <select name="Danger">
                            <option value="Danger">Danger</option>
                            <option value="Success">Success</option>
                            <option value="Warning">Warning</option>
                          </select>
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
          </div>

        </div>
      </div>
    </div>
  );
}

export default Calendar;
