/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom'
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
// import AddReview from "../components/AddReview"

function ReviewType() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div>
        <div class="page-wrapper">
          <div class="content container-fluid">
            <div class="row">
              <div class="col-xl-12 col-sm-12 col-12">
                <div class="breadcrumb-path mb-4">
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">
                        <img
                          src="../assets/img/dash.png"
                          class="mr-2"
                          alt="breadcrumb"
                        />
                        Home
                      </a>
                    </li>
                    <li class="breadcrumb-item active"> Reviews</li>
                  </ul>
                  <h3>Reviews</h3>
                </div>
              </div>
              <div class="col-xl-12 col-sm-12 col-12 mb-4">
                <div class="head-link-set">
                  <ul>
                    <li>
                      <Link to="/review">Overview</Link>
                    </li>
                    <li>
                      <Link class="active" to="/review/review-type">
                        Review Types
                      </Link>
                    </li>
                  </ul>
                  <button type="button" class="btn-add" data-toggle="modal" data-target="#exampleModalCenter">
                Create Review
                </button>
                </div>
              </div>
              <div class="col-xl-12 col-sm-12 col-12 mb-4">
                <div class="card">
                  <div class="card-header">
                    <h2 class="card-titles">Leave Details</h2>
                  </div>
                  <div class="table-responsive">
                    <table class="table  custom-table  no-footer">
                      <thead>
                        <tr>
                          <th>Review Name </th>
                          <th>Reviewers </th>
                          <th>Scheduled For</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <label>Monthly Review </label>
                          </td>
                          <td>
                            <div class="table-img">
                              <a href="profile.html">
                                <img
                                  src="../assets/img/profiles/avatar-13.jpg"
                                  alt="profile"
                                  class="img-table"
                                />
                              </a>
                              <label>Sean Black</label>
                            </div>
                          </td>
                          <td>
                            <label>Everyone </label>
                          </td>
                          <td>
                            <div class="actionset">
                              <label>
                                <a class="action_label5" href="add-Review.html">
                                  Edit <i data-feather="edit"></i>
                                </a>
                              </label>
                              <label>
                                <a
                                  class="action_label4"
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
                            <div class="table-img">
                              <a href="profile.html">
                                <img
                                  src="../assets/img/profiles/avatar-16.jpg"
                                  alt="profile"
                                  class="img-table"
                                />
                              </a>
                              <label>Linda Craver</label>
                            </div>
                          </td>
                          <td>
                            <label>Everyone </label>
                          </td>
                          <td>
                            <div class="actionset">
                              <label>
                                <a class="action_label5" href="add-Review.html">
                                  Edit <i data-feather="edit"></i>
                                </a>
                              </label>
                              <label>
                                <a
                                  class="action_label4"
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
                            <div class="table-img">
                              <a href="profile.html">
                                <img
                                  src="../assets/img/profiles/avatar-17.jpg"
                                  alt="profile"
                                  class="img-table"
                                />
                              </a>
                              <label>Jenni Sims</label>
                            </div>
                          </td>
                          <td>
                            <label>Everyone </label>
                          </td>
                          <td>
                            <div class="actionset">
                              <label>
                                <a class="action_label5" href="add-Review.html">
                                  Edit <i data-feather="edit"></i>
                                </a>
                              </label>
                              <label>
                                <a
                                  class="action_label4"
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
        <div class="customize_popup">
          <div
            class="modal fade"
            id="delete"
            tabindex="-1"
            aria-labelledby="staticBackdropLabels1"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header text-centers border-0">
                  <h5
                    class="modal-title text-center"
                    id="staticBackdropLabels1"
                  >
                    Are You Sure Want to Delete?
                  </h5>
                </div>
                <div class="modal-footer text-centers">
                  <button type="button" class="btn btn-primary">
                    Delete
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
      {/* modal */}
{/* <AddReview/> */}
    </div>
  );
}

export default ReviewType;
