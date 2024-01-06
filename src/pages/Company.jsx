/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Modal from "react-bootstrap/Modal";
import { fetchCompany, addCompany } from "../store/actions/actionEmployee";
import React, { useState } from "react";

function Company() {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputFormCompany, setInputFormCompany] = useState({
    name: "",
    address1: "",
    address2: "",
    email: "",
    phoneNumber: "",
    registereCompanyNumber: "",
    incorporationDate: "",
    city: "",
    country: "",
    postalCode: "",
    website: "",
    facebook: "",
    instagram: "",
    linkedin: "",
  });

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
                        <h2 className="card-titles">PT Greenland Resource</h2>
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
                                  <span> FT0070</span>
                                </li>
                                <li>
                                  <label className="active">
                                    Incorporation Date
                                  </label>
                                  <span>07 May 2023</span>
                                </li>
                                <li>
                                  <label>VAT Number</label>
                                  <span> 07448503267</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xl-6 col-sm-12 col-12 d-flex">
                            <div className="member-address flex-fill">
                              <label>Address</label>
                              <span rows="5" cols="60" placeholder="">
                                Santiago de Surco Av.Caminos del Inca 1325
                                United States{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12 col-sm-12 col-12 ">
                            <div className="btn-link my-3">
                              <button
                                onClick={() => {
                                  handleShow();
                                }}
                                className="btn btn-primary btn-add"
                                data-toggle="modal"
                                data-target="#addcompany"
                              >
                                Add Company
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-12 col-12 d-flex">
                    <div className="card  flex-fill">
                      <div className="card-header">
                        <h2 className="card-titles">PT Greenland Resource</h2>
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
                          PT Greenland Resource<span>Head Office</span>
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

        <Modal
          size="xl"
          show={show}
          onHide={handleClose}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Body>
            <div>
              <div>
                <h5 className="modal-title" id="staticBackdropLabel">
                  Add Company Information
                </h5>
                <div className="modal-body">
                  <div className=" col-md-12 p-0">
                    <div className="form-popup">
                      <label className="mb-2">Office Name</label>
                      <input
                      onChange={(e) => {
                        setInputFormCompany({
                          ...inputFormCompany,
                          name: e.target.value,
                        });
                      }}
                      type="text" placeholder="PT .... ....." />
                    </div>
                    <div className="form-popup">
                      <label className="mb-2">Email</label>
                      <input
                         onChange={(e) => {
                          setInputFormCompany({
                            ...inputFormCompany,
                            email: e.target.value,
                          });
                        }}
                      type="text" placeholder="Company Email" />
                    </div>
                    <div className="form-popup">
                      <label className="mb-2">Registered Company Number</label>
                      <input
                         onChange={(e) => {
                          setInputFormCompany({
                            ...inputFormCompany,
                            registereCompanyNumber: e.target.value,
                          });
                        }}
                      type="text" placeholder="12345678910" />
                    </div>
                    <div className="form-popup">
                      <label className="mb-2">Incorporation Date</label>
                      <input
                      onChange={(e) => {
                        setInputFormCompany({
                          ...inputFormCompany,
                          incorporationDate: e.target.value,
                        });
                      }}
                      type="text" placeholder="10-01-1992" />
                    </div>
                    <div className="form-popup">
                      <label className="mb-2">Phone Number</label>
                      <input
                      onChange={(e) => {
                        setInputFormCompany({
                          ...inputFormCompany,
                          phoneNumber: e.target.value,
                        });
                      }}
                      type="text" placeholder="Phone number" />
                    </div>
                    <div className="form-popup">
                      <label className="mb-2">City</label>
                      <input
                      onChange={(e) => {
                        setInputFormCompany({
                          ...inputFormCompany,
                          city: e.target.value,
                        });
                      }}
                      type="text" placeholder="City" />
                    </div>
                    <div className="form-popup">
                      <label className="mb-2">Address line 1</label>
                      <input 
                      onChange={(e) => {
                        setInputFormCompany({
                          ...inputFormCompany,
                          address1: e.target.value,
                        });
                      }}
                      type="text" placeholder="Address...." />
                    </div>
                    <div className="form-popup">
                      <label className="mb-2">Address line 2</label>
                      <input 
                      onChange={(e) => {
                        setInputFormCompany({
                          ...inputFormCompany,
                          address2: e.target.value,
                        });
                      }}
                      type="text" placeholder="Address...." />
                    </div>
                    <div className="form-popup">
                      <label className="mb-2">Web Site</label>
                      <input 
                      onChange={(e) => {
                        setInputFormCompany({
                          ...inputFormCompany,
                          website: e.target.value,
                        });
                      }}
                      type="text" placeholder="www.example.com" />
                    </div>
                    <div className="form-popup">
                      <label className="mb-2">Country</label>
                      <input 
                      onChange={(e) => {
                        setInputFormCompany({
                          ...inputFormCompany,
                          country: e.target.value,
                        });
                      }}
                      type="text" placeholder="Country" />
                    </div>
                    <div className="form-popup">
                      <label className="mb-2">Postal - Code</label>
                      <input 
                      onChange={(e) => {
                        setInputFormCompany({
                          ...inputFormCompany,
                          postalCode: e.target.value,
                        });
                      }}
                      type="text" placeholder="postal code" />
                    </div>
                    <div className="form-popup">
                      <label className="mb-2">Facebook</label>
                      <input 
                         onChange={(e) => {
                          setInputFormCompany({
                            ...inputFormCompany,
                            facebook: e.target.value,
                          });
                        }}
                      type="text" placeholder="Facebook Link" />
                    </div>
                    <div className="form-popup">
                      <label className="mb-2">Instagram</label>
                      <input 
                         onChange={(e) => {
                          setInputFormCompany({
                            ...inputFormCompany,
                            instagram: e.target.value,
                          });
                        }}
                      type="text" placeholder="Instagram Link" />
                    </div>
                    <div className="form-popup">
                      <label className="mb-2">LinkedIn</label>
                      <input type="text" placeholder="LinkedIn Link" />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                  onClick={
                    () => {
                      console.log(inputFormCompany);
                    }
                  }
                  type="submit" className="btn btn-primary">
                    Add
                  </button>
                  <button type="button" className="btn btn-secondary">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="customize_popup">
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
          </div> */}
            {/* <div className="customize_popup">
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
          </div> */}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Company;
