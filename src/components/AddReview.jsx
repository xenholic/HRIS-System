/* eslint-disable react/no-unknown-property */


function AddReview() {
  return (

      <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="row">
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="breadcrumb-path mb-4">
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
                  <h3>Create Review</h3>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-titles">Setup</h2>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-12 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>
                            Review Name <span className="mandatory">*</span>{" "}
                          </label>
                          <input type="text" placeholder="Review Name" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>Begins on </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>Completion Date</label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>Review Frequency</label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="card ">
                  <div className="card-header">
                    <h2 className="card-titles">Participants</h2>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-6 col-sm-6 col-12 ">
                        <div className="form-group">
                          <label>Begins on </label>
                          <select className="select">
                            <option value="Select leave">Select leave</option>
                            <option value="leave">Casual leave</option>
                            <option value="leave">Earned leave</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-6 col-12 ">
                        <div className="form-group">
                          <label>Completion Date</label>
                          <select className="select">
                            <option value="Select leave">Select leave</option>
                            <option value="leave">Casual leave</option>
                            <option value="leave">Earned leave</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-titles">Form</h2>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-12 col-sm-12 col-12 ">
                        <div className="form-group">
                          <textarea rows="4" cols="50">
                            Explain What This Review Is To, How Its Going To Be
                            Run, How Everyone Can Prepare.{" "}
                          </textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-sm-12 col-12">
                        <div className="form-group">
                          <textarea rows="4" cols="50">
                            Add Questions For The People Being Reviewed.{" "}
                          </textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-sm-12 col-12 mb-3">
                        <div className="creation-btn">
                          <ul>
                            <li>
                              <a className="action_label3">
                                Add <i data-feather="plus"></i>
                              </a>
                            </li>
                            <li>
                              <a className="action_label4">
                                Delete <i data-feather="trash-2"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-sm-12 col-12 ">
                        <div className="form-group">
                          <textarea rows="4" cols="50">
                            Add Questions For The People Being Reviewed.{" "}
                          </textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-sm-12 col-12 mb-5">
                        <div className="creation-btn">
                          <ul>
                            <li>
                              <a className="action_label3">
                                Add <i data-feather="plus"></i>
                              </a>
                            </li>
                            <li>
                              <a className="action_label4">
                                Delete <i data-feather="trash-2"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-sm-12 col-12 ">
                        <div className="form-btn">
                          <a href="#" className="btn btn-apply">
                            Save
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
          </div>
        </div>
      </div>
  );
}

export default AddReview;
