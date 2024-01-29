/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchEmployees,
  fetchEmployeeById,
} from "../store/actions/actionEmployee";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function EmployeeField() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [detailEmployee, setdetailEmployee] = useState({});

  const handleDetail = (id) => {
    dispatch(fetchEmployeeById(id));
    setdetailEmployee(employee);
  };

  const employees = useSelector((state) => {
    return state.employeeReducer.employees;
  });

  const employee = useSelector((state) => {
    return state.employeeReducer.employee;
  });

  const company = useSelector((state) => {
    return state.employeeReducer.companies;
  });

  useEffect(() => {
    dispatch(fetchEmployees());
    // dispatch(fetchEmployeeById());
  }, []);
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
                    <Link to="/">
                      <img
                        src="../assets/img/dash.png"
                        className="mr-2"
                        alt="breadcrumb"
                      />
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active"> Employees</li>
                </ul>
                <h3>Employees</h3>
              </div>
            </div>
            <div className="col-xl-12 col-sm-12 col-12 mb-4">
              <div className="head-link-set">
                <ul>
                  <li>
                    <Link to="/employees">All</Link>
                  </li>
                  <li>
                    <Link to="/employees/office">Office</Link>
                  </li>
                  <li>
                    <Link className="active" to="/employees/field">Field</Link>
                  </li>
                </ul>
                <Link className="btn-add" to="/add-employee">
                  <i data-feather="plus"></i> Add Person
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="row mb-3">
            <div className="col-xl-10 col-sm-8 col-12 ">
              <label className="employee_count">1 Office</label>
            </div>
          </div> */}
          {/* <div className="row">
            <div className="col-xl-12 col-sm-12 col-12 ">
              <div className="card  card-lists">
                <div className="card-header  ">
                  <h2 className="card-titles">Create New Office</h2>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl-8 col-sm-12 col-12 ">
                      <input
                        type="text"
                        placeholder="Office Name"
                        className="input-form"
                      />
                    </div>
                    <div className="col-xl-2 col-sm-6 col-6 ">
                      <a href="#" className="btn-create ">
                        Create Office{" "}
                      </a>
                    </div>
                    <div className="col-xl-2 col-sm-6 col-6 ">
                      <a href="#" className="btn-cancel ">
                        Cancel{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-xl-12 col-sm-12 col-12 ">
              <div className="card">
                <div className="card-header create-formhead">
                  <h2 className="card-titles">
                    Focus Technologies<span>Head Office</span>
                  </h2>
                  <a
                    data-toggle="modal"
                    data-target="#edit"
                    className="edit-link"
                  >
                    <i data-feather="edit"></i>{" "}
                  </a>
                </div>
                <div className="card-body">
                  <div className="member-formcontent member-row">
                    <div className="member-head">
                      <h2>Members</h2>
                      <div className="avatar-group">
                        {employees.length ? (
                          employees.map((item) => {
                            if(item.field === "on site")
                            return (
                              <div className="avatar avatar-xs group_img group_header">
                                <img
                                  onClick={() => {
                                    handleShow();
                                    handleDetail(item.id);
                                  }}
                                  className="avatar-img rounded-circle"
                                  alt="User Image"
                                  src={
                                    item.profilePic
                                      ? item.profilePic
                                      : "../assets/img/user.jpg"
                                  }
                                />
                              </div>
                            );
                          })
                        ) : (
                          <p className="text-center text-lg">
                            No Employee to show
                          </p>
                        )}

                        {/* <div className="avatar avatar-xs group_img group_header">
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
                          </div> */}
                      </div>
                    </div>
                    <div className="member_link">
                      <a
                        data-toggle="collapse"
                        href="#table"
                        role="button"
                        aria-expanded="false"
                        aria-controls="table"
                      >
                        <i data-feather="chevron-down"></i>
                      </a>
                    </div>
                  </div>
                  <div className="table-responsive collapse show" id="table">
                    <table className="table  custom-table  no-footer">
                      <thead>
                        <tr>
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
                        {employees.length ? (
                          employees.map((item) => {
                            if(item.field === "on site")
                            return (
                              <tr>
                                <td>
                                  <div className="table-img">
                                    <Link to="profile">
                                      <img
                                        src={
                                          item.profilePic
                                            ? item.profilePic
                                            : "../assets/img/user.jpg"
                                        }
                                        alt="profile"
                                        className="img-table"
                                      />
                                      <label>{item.name}</label>
                                    </Link>
                                  </div>
                                </td>
                                <td>
                                { company ?
                                  company.map((data) => {
                                    if (data._id === item.companyId) {
                                      return (
                                        <label className="action_label">
                                          {data.name}
                                        </label>
                                      );
                                    }
                                  }) : <p>no data</p>
                                }
                                </td>
                                <td>
                                  <label className="action_label2 text-wrap">
                                    {item.department}{" "}
                                  </label>
                                </td>
                                <td>
                                  <label className="action_label2">
                                    {item.field}
                                  </label>
                                </td>
                                <td>
                                  <label className="">{item.position} </label>
                                </td>
                                <td>
                                  <label className="action_label">
                                    {item.status}
                                  </label>
                                </td>
                                <td>
                                  {/* <button
                                  type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong"
                                >
                                  Employee Detail
                                </button> */}
                                  <Button
                                    onClick={() => {
                                      handleShow();
                                      handleDetail(item._id);
                                    }}
                                    variant="primary"
                                  >
                                    {" "}
                                    Employee Detail{" "}
                                  </Button>
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <p className="text-center text-lg">
                            No Employee to show
                          </p>
                        )}
                        {/* <EmployeeTable /> */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {!detailEmployee ? (
          <p>no data</p>
        ) : (
          <Modal
            size="xl"
            show={show}
            onHide={handleClose}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Detail Employee</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                {/* <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder={detailEmployee.name}
          defaultValue={detailEmployee.name}
        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label>email</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Last name"
          defaultValue={detailEmployee.email}
        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
        <Form.Label>Username</Form.Label>
        <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Username"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose a username.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </Row> */}
                <table className="table table-th-block">
                  <tbody>
                    <>
                      <tr>
                        <td className="active">Name :</td>
                        <td>
                          {detailEmployee.name
                            ? detailEmployee.name
                            : "no data"}
                        </td>
                        <td className="active">E-mail :</td>
                        <td>
                          {detailEmployee.email
                            ? detailEmployee.email
                            : "no data"}
                        </td>
                      </tr>
                      <tr>
                        <td className="active">Company :</td>
                        <td>
                          {detailEmployee.company
                            ? detailEmployee.company
                            : "no data"}
                        </td>
                        <td className="active">Address :</td>
                        <td>
                          {detailEmployee.address
                            ? detailEmployee.address
                            : "no data"}
                        </td>
                      </tr>
                      <tr>
                        <td className="active">Department :</td>
                        <td>
                          {detailEmployee.department
                            ? detailEmployee.department
                            : "no data"}
                        </td>
                        <td className="active">Position :</td>
                        <td>
                          {detailEmployee.position
                            ? detailEmployee.position
                            : "no data"}
                        </td>
                      </tr>
                      <tr>
                        <td className="active">Salary :</td>
                        <td>
                          {detailEmployee.salary
                            ? detailEmployee.salary
                            : "no data"}
                        </td>
                        <td className="active">Field of Working :</td>
                        <td>
                          {detailEmployee.field
                            ? detailEmployee.field
                            : "no data"}
                        </td>
                      </tr>
                    </>
                    <label className="mt-3 mb-3">Personal Data</label>
                    {detailEmployee.personalData ? (
                      <>
                        <tr>
                          <td className="active">Date of Birth</td>
                          <td>
                            {detailEmployee.personalData.dateOfBirth
                              ? detailEmployee.personalData.dateOfBirth
                              : "no data"}
                          </td>

                          <td className="active">Place of Birth</td>
                          <td>
                            {detailEmployee.personalData.placeOfBirth
                              ? detailEmployee.personalData.placeOfBirth
                              : "no data"}
                          </td>
                        </tr>
                        <tr>
                          <td className="active">Gender</td>
                          <td>
                            {detailEmployee.personalData.gender
                              ? detailEmployee.personalData.gender
                              : "no data"}
                          </td>
                          <td className="active">Phone Number</td>
                          <td>{detailEmployee.personalData.phoneNumber}</td>
                        </tr>
                        <tr>
                          <td className="active">NIK</td>
                          <td>
                            {detailEmployee.personalData.nikNumber
                              ? detailEmployee.personalData.nikNumber
                              : "no data"}
                          </td>
                          <td className="active">NPWP</td>
                          <td>
                            {detailEmployee.personalData.npwp
                              ? detailEmployee.personalData.npwp
                              : "no data"}
                          </td>
                        </tr>
                        <tr>
                          <td className="active">BPJS Tenaga Kerja</td>
                          <td>{detailEmployee.personalData.bpjsTkNumber}</td>
                          <td className="active">BPJS Kesehatan</td>
                          <td>{detailEmployee.personalData.bpjsKesNumber}</td>
                        </tr>
                        <tr>
                          <td className="active">Majority</td>
                          <td>
                            {detailEmployee.personalData.educationData.major}
                          </td>
                          <td className="active">Last Position</td>
                          <td>{detailEmployee.personalData.lastDepartment}</td>
                        </tr>
                        <tr>
                          <td className="active">Education</td>
                          <td>
                            {
                              detailEmployee.personalData.educationData
                                .educationLevel
                            }
                          </td>
                          <td className="active">Year Education Finish</td>
                          <td>
                            {
                              detailEmployee.personalData.educationData
                                .yearsOfEducation
                            }
                          </td>
                        </tr>
                        <tr>
                          <td className="active">Organization Experiences</td>
                          <td>
                            {
                              detailEmployee.personalData.educationData
                                .organizationExp
                            }
                          </td>
                        </tr>
                        <tr>
                          <td className="active">Experience</td>
                          <td>{detailEmployee.personalData.experience}</td>
                        </tr>
                        <label className="mt-3 mb-3">Family</label>
                        <tr>
                          <td className="active">Father Name</td>
                          <td>
                            {detailEmployee.personalData.familyData.fatherName}
                          </td>
                          <td className="active">Mother Name</td>
                          <td>
                            {detailEmployee.personalData.familyData.motherName}
                          </td>
                        </tr>
                        <tr>
                          <td className="active">Wife / husband Name</td>
                          <td>
                            {detailEmployee.personalData.familyData.wifeName}
                          </td>
                          <td className="active">Mariage Status</td>
                          <td>
                            {
                              detailEmployee.personalData.familyData
                                .mariageStatus
                            }
                          </td>
                        </tr>
                        <tr>
                          <td className="active">Anak ke -1</td>
                          <td>
                            {detailEmployee.personalData.familyData
                              .dependentsChild.child1
                              ? detailEmployee.personalData.familyData
                                  .dependentsChild.child1
                              : "no data"}
                          </td>
                          <td className="active">Anak ke -2</td>
                          <td>
                            {detailEmployee.personalData.familyData
                              .dependentsChild.child2
                              ? detailEmployee.personalData.familyData
                                  .dependentsChild.child2
                              : "no data"}
                          </td>
                        </tr>
                        <tr>
                          <td className="active">Anak ke -3</td>
                          <td>
                            {detailEmployee.personalData.familyData
                              .dependentsChild.child3
                              ? detailEmployee.personalData.familyData
                                  .dependentsChild.child3
                              : "no data"}
                          </td>
                          <td className="active">Anak ke -4</td>
                          <td>
                            {detailEmployee.personalData.familyData
                              .dependentsChild.child4
                              ? detailEmployee.personalData.familyData
                                  .dependentsChild.child4
                              : "no data"}
                          </td>
                        </tr>
                        <label className="mt-3 mb-3">Emergency Contact</label>
                        <tr>
                          <td className="active">Name :</td>
                          <td>
                            {detailEmployee.personalData.emergencyContact.name
                              ? detailEmployee.personalData.emergencyContact
                                  .name
                              : "no data"}
                          </td>
                          <td className="active">Relation :</td>
                          <td>
                            {detailEmployee.personalData.emergencyContact
                              .relation
                              ? detailEmployee.personalData.emergencyContact
                                  .relation
                              : "no data"}
                          </td>
                        </tr>
                        <tr>
                          <td className="active">Address :</td>
                          <td>
                            {detailEmployee.personalData.emergencyContact
                              .address
                              ? detailEmployee.personalData.emergencyContact
                                  .address
                              : "no data"}
                          </td>
                          <td className="active">Phone Number :</td>
                          <td>
                            {detailEmployee.personalData.emergencyContact
                              .phoneNumber
                              ? detailEmployee.personalData.emergencyContact
                                  .phoneNumber
                              : "no data"}
                          </td>
                        </tr>
                      </>
                    ) : (
                      <p>Loading... Please wait !!</p>
                    )}
                  </tbody>
                </table>
              </Form>
            </Modal.Body>

            {/* button close modal  */}
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default EmployeeField;
