import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
// import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

function AddEmployee() {
  // const navigate = useNavigate();


  const [inputFormEmployee, setInputFormEmployee] = useState({
      name: "",
      address:"",
      email: "",
      salary: "",
      status: "",
      profilePic: "",
      positionId: "",
      companyId: "",
      departmentId: "",
      fieldId: "",
      religion: "",
      startDateWorking: "",
      personalData: {
        dateOfBirth: "",
        placeOfBirth: "",
        gender: "",
        educationData: {
          educationLevel: "",
          yearsOfEducation: "",
          major: "",
          organizationExp: "",
        },
        familyData: {
          motherName: "",
          fatherName: "",
          wifeName: "",
          mariageStatus: "",
          dependentsChild: {
            childName1: "",
            childName2: "",
            childName3: "",
            childName4: ""
          }
        },
        phoneNumber: "",
        nikNumber: "",
        bpjsTkNumber: "",
        bpjsKesNumber: "",
        npwp: "",
        experience: "",
        lastDepartment: "",
        personalCharacter: {
          weakness: "",
          advantage: ""
        },
        emergencyContact: {
          name: "",
          relation: "",
          address: "",
          phoneNumber: ""
        }
      }
  });

  // const handleAddEmployee = (e) => {
  //   e.preventDefault();
  //   dispatch(addEmployee(inputFormEmployee))
  //     .then((response) => {
  //       if (response.ok) {
  //         navigate("/employees");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <form className="row">
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="breadcrumb-path mb-4">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active"> Employees</li>
                  </ul>
                  <h3>Create Employees</h3>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-titles">
                      Basic Details <span>Organized and secure.</span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label htmlFor="firstName">First Name</label>
                          <input
                           onChange={(e) => {
                            setInputFormEmployee({
                              ...inputFormEmployee,
                              firstName: e.target.value,
                            });
                          }}
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label" htmlFor="lastName">
                            Last Name
                          </div>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                lastName: e.target.value,
                              });
                            }}
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">E-mail</div>
                          <input 
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                email: e.target.value,
                              });
                            }}
                          type="text" id="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Phone Number</div>
                          <input
                             onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                phoneNumber: e.target.value,
                              });
                            }}
                            type="text"
                            id="phoneNumber"
                            placeholder="Nomor Handphone..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Place of Birth</div>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                birthPlace: e.target.value,
                              });
                            }}
                            type="text"
                            id="birthPlace"
                            placeholder="Tempat Lahir"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Date of Birth</div>
                          <input
                            type="text"
                            id="dateOfBirth"
                            placeholder="DD MM YYYY"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">NIK Number</div>
                          <input
                            type="text"
                            id="nikNumber"
                            placeholder="Nomor Induk Kewarganegaraan"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Gender</div>
                          <select>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Mariage Status</div>
                          <select>
                            {/* <option v-htmlFor="mariage in mariageStatusData" :key="mariage.id" :value="mariage.id">{{ mariage.status }} </option> */}
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Point of Hire</div>
                          <select>
                            {/* <option v-htmlFor="pohArea in pohAreaData" :key="pohArea.id" :value="pohArea.id">{{ pohArea.areaName }}</option> */}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Company</div>
                          <select>
                            {/* <option v-htmlFor="comp in companiesData" :key="comp.id" :value="comp.id"> {{ comp.name }} </option> */}
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Department</div>
                          <select>
                            {/* <option v-htmlFor="dept in departmentData" :key="dept.id" :value="dept.id">{{ dept.departmentName }} </option> */}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Position</div>
                          <select>
                            {/* <option v-htmlFor="pos in positionData" :key="pos.id" :value="pos.id"> {{ pos.positionName }} </option> */}
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Field of Working</div>
                          <select id="fieldOfWorking">
                            {/* <option v-htmlFor="fow in fieldData" :key="fow.id" :value="fow.id">{{ fow.fieldName }} </option> */}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">BPJS Kesehatan</div>
                          <input
                            type="text"
                            id="bpjsKesNumber"
                            placeholder="Nomor BPJS Kesehatan"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">BPJS Ketenagakerjaan</div>
                          <input
                            type="text"
                            id="bpjsTKesNumber"
                            placeholder="Nomor BPJS Ketenagakerjaan"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Address</div>
                          <input
                            type="text"
                            id="address"
                            placeholder="Alamat Lengkap"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Photo Profile</div>
                          <input type="file" id="profilePic" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="card ">
                  <div className="card-header">
                    <h2 className="card-titles">
                      Employment Details
                      <span>
                        Let everyone know the essentials so they re fully
                        prepared.
                      </span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Tertiary Education</div>
                          <select>
                            {/* <option v-htmlFor="edu in educationData" :key="edu.id" :value="edu.id">{{ edu.level }} </option> */}
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Contract Type</div>
                          <select>
                            {/* <option v-htmlFor="type in contractData" :key="type.id" :value="type.id">{{ type.statusName }} </option> */}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">
                            Last Education Institution
                          </div>
                          <input
                            type="text"
                            id="educationInstitution"
                            placeholder="Universitas / School"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Major</div>
                          <input
                            type="text"
                            id="major"
                            placeholder="Tehnik Sipil..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Sertification</div>
                          <input
                            type="file"
                            id="sertification"
                            placeholder="Universitas / School"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Year of Education</div>
                          <input
                            type="text"
                            id="educationYear"
                            placeholder="Tehnik Sipil..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Last Job Position</div>
                          <input
                            type="text"
                            id="lastPosition"
                            placeholder="PJO (Manager Ops Site)"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Experiences</div>
                          <input type="text" id="experience" placeholder="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-titles">
                      Personal Detail
                      <span>
                        Weakness and Powerfull on something, Personal Encourage,
                        trusting themselves.
                      </span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>Peronal Weakness</label>
                          <input
                            type="text"
                            id="personalWeakness"
                            placeholder="Have a bad attitude"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>Peronal Power</label>
                          <input
                            type="text"
                            id="personalPower"
                            placeholder="Have a Good Skill in comunication"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Father Name</div>
                          <input type="text" id="fatherName" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Mother Name</div>
                          <input type="text" id="motherName" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Husband or Wife Name</div>
                          <input
                            type="text"
                            id="husbandOrWife"
                            placeholder="...."
                          />
                        </div>
                      </div>
                      {/* <div className="col-xl-6 col-sm-12 col-12 ">
                    <div className="form-group">
                      <div className="label">Child name</div>
                      <input type="text"/>
                    </div>
                  </div>  */}
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Child Name 1</div>
                          <input type="text" id="childName1" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Child Name 2</div>
                          <input type="text" id="childName2" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Child Name 3</div>
                          <input type="text" id="childName3" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Child Name 4</div>
                          <input type="text" id="childName4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-titles">
                      Emergency Contact
                      <span>
                        For an emergency situation please fill with a specific
                      </span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>Emergency Contact Name</label>
                          <input
                            type="text"
                            id="emergencyContactName"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            type="text"
                            id="emergencyPhoneNumber"
                            placeholder="Phone number"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Relation</div>
                          <input
                            type="text"
                            id="relationship"
                            placeholder="relationship with emergency contact"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Address</div>
                          <input
                            type="text"
                            id="emergencyContactAddress"
                            placeholder="specific address"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 col-12 ">
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-titles">
                      Salary Details
                      <span>
                        Stored securely, only visible to Super Admins, Payroll
                        Admins, and themselves.
                      </span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>Start Date</label>
                          <input type="text" placeholder="Start Date" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>Salary Type</label>
                          <select>
                            <option value="Select leave" selected disabled>
                              Frequency{" "}
                            </option>
                            <option value="leave">Annualy</option>
                            <option value="leave">Monthly</option>
                            <option value="leave">Weekly</option>
                            <option value="leave">Daily</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row"></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12 col-sm-12 col-12 ">
                    <div className="form-btn">
                      <button 
                      //  onClick={(e) => {
                      //   handleAddEmployee(e);
                      // }}
                      type="submit" className="btn btn-apply w-auto">
                        Add Team Member
                      </button>
                      <button 
                       to={"/employees"}
                      className="btn btn-secondary">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
