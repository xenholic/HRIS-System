/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";
import {
  fetchEmployees,
  fetchEmployeeById,
} from "../store/actions/actionEmployee";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
// import EmployeeTable from "../components/EmployeeTable";

function Employee() {
  // const navigate = useNavigate();
  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [detailEmployee, setdetailEmployee] = useState({});

  // Fetch employee data by id
  const handleDetail = (_id) => {
    dispatch(fetchEmployeeById(_id));
    setdetailEmployee(employee);
  };

  const employees = useSelector((state) => {
    return state.employeeReducer.employees;
  });

  const employee = useSelector((state) => {
    return state.employeeReducer.employee;
  });

  //fetch dari redux
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
            <div className="col-xl-12 col-sm-12 col-12">
              <div className="breadcrumb-path mb-4">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <img
                        src="assets/img/dash.png"
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
                    <Link className="active" to="/employees">
                      All
                    </Link>
                  </li>
                  <li>
                    <Link to="/employees/office">Office</Link>
                  </li>
                  <li>
                    <Link to="/employees/field">Field</Link>
                  </li>
                </ul>
                <Link className="btn-add" to="/add-employee">
                  <i data-feather="plus"></i> Add Employee
                </Link>
              </div>
            </div>
            <div className="col-xl-12 col-sm-12 col-12 mb-4">
              <div className="row">
                <div className="col-xl-10 col-sm-8 col-12 ">
                  <label className="employee_count">
                    {employees.length} People
                  </label>
                </div>
                <div className="col-xl-1 col-sm-2 col-12 ">
                  <Link to="/employees-grid" className="btn-view ">
                    <img src="../assets/img/grid.svg"></img>{" "}
                  </Link>
                </div>
                <div className="col-xl-1 col-sm-2 col-12 ">
                  <Link to="#" className="btn-view active">
                    <img src="../assets/img/list.svg"></img>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-sm-12 col-12 mb-4">
              <div className="card">
                <div className="table-heading">
                  <h2>Project Summery</h2>
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
                      {employees.length ? (
                        employees.map((item, index) => {
                          return (
                            <tr>
                              <td>
                                <label className="">{index + 1}</label>
                              </td>
                              <td>
                                <div className="table-img">
                                 {item.profilePic ? ( <img
                                    onClick={() => {
                                      handleShow();
                                      handleDetail(item._id);
                                    }}
                                    src={
                                      item.profilePic
                                        ? item.profilePic
                                        : "assets/img/profiles/ava.jpg"
                                    }
                                    alt="profile"
                                    className="img-table"
                                  />)
                                : ( <img
                                  onClick={() => {
                                    handleShow();
                                    handleDetail(item._id);
                                  }}
                                  src="../assets/img/profile.jpg"
                                  alt="profile"
                                  className="img-table"
                                  />)}
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
                                  <label>{item.name}</label>
                                </div>
                              </td>
                              <td>
                                {item.companyId ? (
                                  <label className="action_label">
                                  {item.companyId}{" "}
                                </label>
                                ) : (
                                  <label className="action_label">
                                    No company Data
                                </label>)}
                                {/* <label className="action_label">
                                  {item.company}{" "}
                                </label> */}
                              </td>
                              <td>
                                <label className="action_label2">
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
                  <div className="row pagination_path">
                    <div className="col-sm-12 col-md-5 ml-10">
                      <div
                        className="dataTables_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 10 of 12 entries
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div className="dataTables_paginate paging_simple_number">
                        <ul className="pagination">
                          <li className="paginate_button page-item previous disabled">
                            <a
                              href="#"
                              data-dt-idx="0"
                              tabindex="0"
                              className="page-link btnnavingation"
                            >
                              <i data-feather="arrow-left"></i>
                            </a>
                          </li>
                          <li className="paginate_button page-item ">
                            <a href="#" className="page-link">
                              1
                            </a>
                          </li>
                          <li className="paginate_button page-item ">
                            <a href="#" tabindex="0" className="page-link">
                              2
                            </a>
                          </li>
                          <li className="paginate_button page-item ">
                            <a href="#" tabindex="0" className="page-link">
                              3
                            </a>
                          </li>
                          <li className="paginate_button page-item ">
                            <a href="#" tabindex="0" className="page-link">
                              4
                            </a>
                          </li>
                          <li className="paginate_button page-item ">
                            <a href="#" tabindex="0" className="page-link">
                              . . .
                            </a>
                          </li>
                          <li className="paginate_button page-item ">
                            <a href="#" tabindex="0" className="page-link">
                              10
                            </a>
                          </li>
                          <li className="paginate_button page-item next">
                            <a
                              href="#"
                              tabindex="0"
                              className="page-link btnnavingation"
                            >
                              <i data-feather="arrow-right"></i>
                            </a>
                          </li>
                        </ul>
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
                          Rp {detailEmployee.salary
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
                                .organizationExperience
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
                            {detailEmployee.personalData.familyData.spouseName}
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
                              .dependentsChild.childName1
                              ? detailEmployee.personalData.familyData
                                  .dependentsChild.childName1
                              : "no data"}
                          </td>
                          <td className="active">Anak ke -2</td>
                          <td>
                            {detailEmployee.personalData.familyData
                              .dependentsChild.childName2
                              ? detailEmployee.personalData.familyData
                                  .dependentsChild.childName2
                              : "no data"}
                          </td>
                        </tr>
                        <tr>
                          <td className="active">Anak ke -3</td>
                          <td>
                            {detailEmployee.personalData.familyData
                              .dependentsChild.childName3
                              ? detailEmployee.personalData.familyData
                                  .dependentsChild.childName4
                              : "no data"}
                          </td>
                          <td className="active">Anak ke -4</td>
                          <td>
                            {detailEmployee.personalData.familyData
                              .dependentsChild.childName4
                              ? detailEmployee.personalData.familyData
                                  .dependentsChild.childName4
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

export default Employee;
