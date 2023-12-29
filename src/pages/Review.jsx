/* eslint-disable react/no-unknown-property */
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { Link } from 'react-router-dom';
// import AddReview from "../components/AddReview";

function Review() {
  return (
    <div>
      <Topbar />
      <Sidebar />
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
                  <li className="breadcrumb-item active"> Reviews</li>
                </ul>
                <h3>Reviews</h3>
              </div>
            </div>
            <div className="col-xl-12 col-sm-12 col-12 mb-4">
              <div className="head-link-set">
                <ul>
                  <li>
                    <Link className="active" to="#">
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link to="/review/review-type">Review Types</Link>
                  </li>
                </ul>
              <button type="button" className="btn-add" data-toggle="modal" data-target="#exampleModalCenter">
                Create Review
                </button>
              </div>
            </div>
            <div className="col-xl-12 col-sm-12 col-12 ">
              <div className="card">
                <div className="card-header">
                  <h2 className="card-titles">Leave Details</h2>
                </div>
                <div className="table-responsive">
                  <table className="table  custom-table  no-footer">
                    <thead>
                      <tr>
                        <th>Review Name </th>
                        <th>Reviewers </th>
                        <th>Begin On </th>
                        <th>Due By </th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <label>Monthly Review </label>
                        </td>
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
                          <label>05 Dec 2019 </label>
                        </td>
                        <td>
                          <label>07 Dec 2019 </label>
                        </td>
                        <td className="tab-select">
                          <select className="select">
                            <option value="active">Completed</option>
                            <option value="inactive">In Progress</option>
                          </select>
                        </td>
                        <td>
                          <div className="actionset">
                            <label>
                              <a className="action_label5" href="add-Review.html">
                                Edit <i data-feather="edit"></i>
                              </a>
                            </label>
                            <label>
                              <a
                                className="action_label4"
                                data-toggle="modal"
                                data-target="#delete"
                              >
                                Delete <i data-feather="trash-2"></i>
                              </a>
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Employees Review </label>
                        </td>
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
                          <label>05 Dec 2019 </label>
                        </td>
                        <td>
                          <label>07 Dec 2019 </label>
                        </td>
                        <td className="tab-select inactive">
                          <select className="select">
                            <option value="active">In Progress</option>
                            <option value="inactive">Completed</option>
                          </select>
                        </td>
                        <td>
                          <div className="actionset">
                            <label>
                              <a className="action_label5" href="add-Review.html">
                                Edit <i data-feather="edit"></i>
                              </a>
                            </label>
                            <label>
                              <a
                                className="action_label4"
                                data-toggle="modal"
                                data-target="#delete"
                              >
                                Delete <i data-feather="trash-2"></i>
                              </a>
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Employees Review </label>
                        </td>
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
                          <label>05 Dec 2019 </label>
                        </td>
                        <td>
                          <label>07 Dec 2019 </label>
                        </td>
                        <td className="tab-select">
                          <select className="select">
                            <option value="active">Completed</option>
                            <option value="inactive">In Progress</option>
                          </select>
                        </td>
                        <td>
                          <div className="actionset">
                            <label>
                              <a className="action_label5" href="add-Review.html">
                                Edit <i data-feather="edit"></i>
                              </a>
                            </label>
                            <label>
                              <a
                                className="action_label4"
                                data-toggle="modal"
                                data-target="#delete"
                              >
                                Delete <i data-feather="trash-2"></i>
                              </a>
                            </label>
                          </div>
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
                <h5 className="modal-title text-center" id="staticBackdropLabels1">
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

            {/* modal */}
      {/* <AddReview/> */}
    </div>
  );
}

export default Review;
