/* eslint-disable react/no-unknown-property */

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { Button } from "react-bootstrap";

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
            <div className="table-responsive">
                  <table className="table  custom-table no-footer">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Company Name</th>
                        <th>Department</th>
                        <th>Field of Work</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {employees.length ? (
                        employees.map((item, index) => { */}
                          {/* return ( */}
                            <tr>
                              <td>
                                <label className="">
                                  {/* {index + 1} */}
                                  </label>
                              </td>
                              <td>
                                <div className="table-img">
                                  <img
                                    // onClick={() => {
                                    //   handleShow();
                                    //   handleDetail(item._id);
                                    // }}
                                    // src={
                                    //   item.profilePic ? item.profilePic : "../assets/img/user.jpg"}
                                    // alt="profile"
                                    className="img-table"
                                  />
                                  {/* // <img
                                  //   onClick={() => {
                                  //     handleShow();
                                  //     handleDetail(item.id);
                                  //   }}
                                  //   src={
                                  //     item.profilePic
                                  //       ? item.profilePic
                                  //       : "assets/img/profiles/ava.jpg"
                                  //   }
                                  //   alt="profile"
                                  //   className="img-table"
                                  // /> */}
                                  <label>
                                    {/* {item.name} */}
                                    </label>
                                </div>
                              </td>
                              <td>
                                {/* {company ?
                                  company.map((data) => {
                                    if (data._id === item.companyId) {
                                      return (
                                        <label className="action_label">
                                          {data.name}
                                        </label>
                                      );
                                    }
                                  }) : <p>no data</p>
                                } */}
                                {/* <label className="action_label">
                                  {item.company}{" "}
                                </label> */}
                              </td>
                              <td>
                                <label className="action_label2 text-wrap">
                                  {/* {item.department}{" "} */}
                                </label>
                              </td>
                              <td>
                                <label className="action_label2">
                                  {/* {item.field} */}
                                </label>
                              </td>
                              <td>
                                <label className="">
                                  {/* {item.position}  */}
                                  </label>
                              </td>
                              <td>
                                <label className="action_label">
                                  {/* {item.status} */}
                                </label>
                              </td>
                              <td>
                                {/* <button
                                  type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong"
                                >
                                  Employee Detail
                                </button> */}
                                <Button
                                  // onClick={() => {
                                  //   handleShow();
                                  //   handleDetail(item._id);
                                  // }}
                                  variant="primary"
                                >
                                  {" "}
                                  Employee Detail{" "}
                                </Button>
                              </td>
                            </tr>
                          {/* );
                        }) */}
                      {/* ) : ( */}
                        <p className="text-center text-lg">
                          No Employee to show
                        </p>
                      {/* )} */}
                      {/* <EmployeeTable /> */}
                    </tbody>
                  </table>
                </div>

            {/* <div className="customize_popup">
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
            </div> */}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Calendar;
