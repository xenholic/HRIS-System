/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


function EmployeeTable({ employee}) {
  return (
    <div>
         <table className="table  custom-table no-footer">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Line Manager</th>
                        <th>Team</th>
                        <th>Office</th>
                        <th>Permissions</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="table-img">
                            <a href="profile.html">
                              <img
                                src="assets/img/profiles/avatar-13.jpg"
                                alt="profile"
                                className="img-table"
                              />
                              <label>Sean Black</label>
                            </a>
                          </div>
                        </td>
                        <td>
                          <label className="action_label">Richard Wilson </label>
                        </td>
                        <td>
                          <label className="action_label2">Design </label>
                        </td>
                        <td>
                          <label>Focus Technologies </label>
                        </td>
                        <td>
                          <label>Team Lead</label>
                        </td>
                        <td className="tab-select">
                          <select className="select">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-img">
                            <a href="profile.html">
                              <img
                                src="assets/img/profiles/avatar-16.jpg"
                                alt="profile"
                                className="img-table"
                              />
                              <label>Linda Craver</label>
                            </a>
                          </div>
                        </td>
                        <td>
                          <label className="action_label">Richard Wilson </label>
                        </td>
                        <td>
                          <label className="action_label2">IOS </label>
                        </td>
                        <td>
                          <label>Focus Technologies </label>
                        </td>
                        <td>
                          <label>Team Lead</label>
                        </td>
                        <td className="tab-select">
                          <select className="select">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-img">
                            <a href="profile.html">
                              <img
                                src="assets/img/profiles/avatar-17.jpg"
                                alt="profile"
                                className="img-table"
                              />
                            </a>
                            <label>Jenni Sims</label>
                          </div>
                        </td>
                        <td>
                          <label className="action_label">Richard Wilson </label>
                        </td>
                        <td>
                          <label className="action_label2">Android </label>
                        </td>
                        <td>
                          <label>Focus Technologies </label>
                        </td>
                        <td>
                          <label>Team Lead</label>
                        </td>
                        <td className="tab-select">
                          <select className="select">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-img">
                            <a href="profile.html">
                              <img
                                src="assets/img/profiles/avatar-19.jpg"
                                alt="profile"
                                className="img-table"
                              />
                            </a>
                            <label>Stacey Linville</label>
                          </div>
                        </td>
                        <td>
                          <label className="action_label">Richard Wilson </label>
                        </td>
                        <td>
                          <label className="action_label2">Testing </label>
                        </td>
                        <td>
                          <label>Focus Technologies </label>
                        </td>
                        <td>
                          <label>Team Lead</label>
                        </td>
                        <td className="tab-select">
                          <select className="select">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-img">
                            <a href="profile.html">
                              <img
                                src="assets/img/profiles/avatar-14.jpg"
                                alt="profile"
                                className="img-table"
                              />
                            </a>
                            <label>Maria Cotton</label>
                          </div>
                        </td>
                        <td>
                          <label className="action_label">Richard Wilson </label>
                        </td>
                        <td>
                          <label className="action_label2">PHP </label>
                        </td>
                        <td>
                          <label>Focus Technologies </label>
                        </td>
                        <td>
                          <label>Team Lead</label>
                        </td>
                        <td className="tab-select">
                          <select className="select">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-img">
                            <a href="profile.html">
                              <img
                                src="assets/img/profiles/avatar-18.jpg"
                                alt="profile"
                                className="img-table"
                              />
                            </a>
                            <label>John Gibbs</label>
                          </div>
                        </td>
                        <td>
                          <label className="action_label">Richard Wilson </label>
                        </td>
                        <td>
                          <label className="action_label2">PHP </label>
                        </td>
                        <td>
                          <label>Focus Technologies </label>
                        </td>
                        <td>
                          <label>Team Lead</label>
                        </td>
                        <td className="tab-select">
                          <select className="select">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-img">
                            <a href="profile.html">
                              <img
                                src="assets/img/profiles/avatar-10.jpg"
                                alt="profile"
                                className="img-table"
                              />
                            </a>
                            <label>Richard Wilson</label>
                          </div>
                        </td>
                        <td>
                          <label className="action_label in_active">No </label>
                        </td>
                        <td>
                          <label className="action_label2">Business </label>
                        </td>
                        <td>
                          <label>Focus Technologies </label>
                        </td>
                        <td>
                          <label>Super Admin</label>
                        </td>
                        <td className="tab-select">
                          <select className="select">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
    </div>
  )
}

export default EmployeeTable