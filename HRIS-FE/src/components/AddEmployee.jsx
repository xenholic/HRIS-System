/* eslint-disable no-unused-vars */
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewEmployee, fetchCompany } from "../store/actions/actionEmployee";
import swal from "sweetalert";


function AddEmployee() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let inputer = {
    username: localStorage.getItem("username"),
    email: localStorage.getItem("email"),
    role: localStorage.getItem("role"),
  }

  const [inputFormEmployee, setInputFormEmployee] = useState({
    inputer,
    name: "",
    address: "",
    addressNow: "",
    email: "",
    salary: "",
    documentUpload: "",
    position: "",
    companyId: "",
    department: "",
    field: "",
    religion: "",
    contractType: "",
    startDateWorking: "",
    pohArea: "",
    dateOfBirth: "",
    placeOfBirth: "",
    gender: "",
    university: "",
    educationLevel: "",
    yearsOfEducation: "",
    major: "",
    organizationExp: "",
    motherName: "",
    fatherName: "",
    spouseName: "",
    mariageStatus: "",
    childName1: "",
    childName2: "",
    childName3: "",
    childName4: "",
    phoneNumber: "",
    nikNumber: "",
    lastSalary: "",
    bpjsTkNumber: "",
    bpjsKesNumber: "",
    npwp: "",
    experience: "",
    lastDepartment: "",
    weakness: "",
    advantage: "",
    emergencyContactname: "",
    emergencyContactrelation: "",
    emergencyContactaddress: "",
    emergencyContactphoneNumber: "",
  });
  // console.log(inputFormEmployee.documentUpload , "inputFormEmployee");


  const [checkbox, setCheckbox] = useState(false);
  const checkboxOn = () => setCheckbox(true);

  const handleAddEmployee = (e) => {
    console.log(inputFormEmployee.documentUpload, "inputFormEmployee")
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < inputFormEmployee.documentUpload.length; i++) {
      formData.append('documentUpload', inputFormEmployee.documentUpload[i]);                      
  }
    formData.append('inputer', inputFormEmployee.inputer);
    dispatch(addNewEmployee(inputFormEmployee))
      .then((response) => {
        console.log(response, "response")
        if (response.statusText === "OK") {
          swal("Success!", "New Employee Added!", "success");
          navigate("/employees");
        }
      })
      .catch((error) => {
        console.log(error, "error add employee");
        swal("Error!", "Failed to Add New Employee!", "error");
      });
  };

//   const uploadSingleFile = async () => {
//     const formData = new FormData();
//     formData.append('file', singleFile);
//     await singleFileUpload(formData);
// }
// const UploadMultipleFiles = async () => {
//     const formData = new FormData();
//     for (let i = 0; i < multipleFiles.length; i++) {
//         formData.append('files', multipleFiles[i]);                      
//     }
//     await multipleFilesUpload(formData);
// }

  let company = useSelector((state) => {
    return state.employeeReducer.companies;
  });

  useEffect(() => {
    dispatch(fetchCompany());
  }, []);


  return (
    <div>
      <Topbar />
      <Sidebar />
      <div>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <form className="row" method="post" encType="multipart/form-data">
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
                          <label htmlFor="firstName">Name</label>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                name: e.target.value,
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
                            E-mail
                          </div>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                email: e.target.value,
                              });
                            }}
                            type="text"
                            id="email"
                            placeholder="Employee Email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">address</div>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                address: e.target.value,
                              });
                            }}
                            type="text"
                            id="address"
                            placeholder="address Employee"
                          />
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
                                placeOfBirth: e.target.value,
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
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                dateOfBirth: e.target.value,
                              });
                            }}
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
                          <div className="label">NIK ( Nomor Induk Kewarganegaraan )</div>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                nikNumber: e.target.value,
                              });
                            }}
                            type="text"
                            id="nikNumber"
                            placeholder="Nomor Induk Kewarganegaraan"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Gender</div>
                          <select
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                gender: e.target.value,
                              });
                            }}
                          >
                            <option value="" selected disabled>
                              Select Gender
                            </option>
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
                          <select
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                mariageStatus: e.target.value,
                              });
                            }}
                          >
                            <option value="" selected disabled>
                              Select Mariage Status
                            </option>
                            <option value="single">Single</option>
                            <option value="menikah">Menikah</option>
                            <option value="duda">Duda</option>
                            <option value="janda">Janda</option>
                            <option value="cerai">Cerai</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Point of Hire</div>
                          <select
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                pohArea: e.target.value,
                              });
                            }}
                          >
                            <option value="" selected disabled>
                              Select POH Area
                            </option>
                            <option value="Tenaga Kerja Lokal">
                              Tenaga Kerja Lokal
                            </option>
                            <option value="Tenaga Kerja Regional">
                              Tenaga Kerja Regional
                            </option>
                            <option value="Tenaga Kerja Nasional">
                              Tenaga Kerja Nasional
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Religion</div>
                          <select
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                religion: e.target.value,
                              });
                            }}
                          >
                            <option value="" selected disabled>
                              Select Religion
                            </option>
                            <option value="Islam">Islam</option>
                            <option value="Kristen Protestan">
                              Kristen Protestan
                            </option>
                            <option value="Kristen Katolik">
                              Kristen Katolik
                            </option>
                            <option value="Buddha">Buddha</option>
                            <option value="Hindu">Hindu</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Department</div>
                          <select
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                department: e.target.value,
                              });
                            }}
                          >
                            <option value="Select department" selected disabled>
                              Department
                            </option>
                            <option value="" selected disabled>
                              Select Department
                            </option>
                            <option value="Kru Site">Kru Site</option>
                            <option value="Driller">Driller</option>
                            <option value="(PJO)">
                              Penanggung Jawab Oprasional (PJO)
                            </option>
                            <option value="CEO">CEO</option>
                            <option value="Bussiness Development">
                              Bussiness Development
                            </option>
                            <option value="Tech Lead">Technical Leader</option>
                            <option value="IT Lead">IT Lead</option>
                            <option value="IT Sup">IT Support</option>
                            <option value="IT Dev">IT Dev</option>
                            <option value="Acc & Tax">
                              Accounting & Tax Suuperintendent
                            </option>
                            <option value="HR Staff">
                              Human Resource Staff
                            </option>
                            <option value="HR Superintendent">
                              Human Resource Superintendent
                            </option>
                            <option value="Manager HRD">
                              Manager Human Resource Department
                            </option>
                            <option value="Admin Site HSE / PR">
                              Admin Site HSE / PR
                            </option>
                            <option value="Legal Contract">
                              Legal Contract
                            </option>
                            <option value="PR">Public Relationship</option>
                            <option value="LSO">Logistic Site Officer</option>
                            <option value="Engineering Dept">
                              Engineering Department
                            </option>
                            <option value="Geology Dept">
                              Geology Department
                            </option>
                            <option value="Mining Dept">
                              Mining Department
                            </option>
                            <option value="Project Coordinator">
                              Project Coordinator
                            </option>
                            <option value="Marketing">Marketing</option>
                            <option value="CO/IN Trading">
                              CO / IN Trading Superintendent
                            </option>
                            {/* <option v-htmlFor="dept in departmentData" :key="dept.id" :value="dept.id">{{ dept.departmentName }} </option> */}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Position</div>
                          <select
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                position: e.target.value,
                              });
                            }}
                          >
                            {/* <option v-htmlFor="pos in positionData" :key="pos.id" :value="pos.id"> {{ pos.positionName }} </option> */}
                            <option value="" selected disabled>
                              Select Position
                            </option>
                            <option value="manager">Manager</option>
                            <option value="staff">staff</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Field of Working</div>
                          <select
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                field: e.target.value,
                              });
                            }}
                            id="fieldOfWorking"
                          >
                            {/* <option v-htmlFor="fow in fieldData" :key="fow.id" :value="fow.id">{{ fow.fieldName }} </option> */}
                            <option value="" selected disabled>
                              Select Field
                            </option>
                            <option value="on site">On Site</option>
                            <option value="office">Office</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">BPJS Kesehatan</div>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                bpjsKesNumber: e.target.value,
                              });
                            }}
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
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                bpjsTkNumber: e.target.value,
                              });
                            }}
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
                          <div className="label">npwp</div>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                npwp: e.target.value,
                              });
                            }}
                            type="text"
                            id="npwp"
                            placeholder="No NPWP"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Domisil Sekarang</div>
                          <input
                            onClick={checkboxOn}
                            type="checkbox" id="Domisili Sekarang" /><span>{" "}Ceklist jika domisili sama dengan KTP</span>

                          {!checkbox ?
                            <input
                              onChange={(e) => {
                                setInputFormEmployee({
                                  ...inputFormEmployee,
                                  addressNow: e.target.value,
                                });
                              }}
                              type="text"
                              id="addressNow"
                              placeholder="Domisi Sekarang"
                            /> : <input
                              onChange={(e) => {
                                setInputFormEmployee({
                                  ...inputFormEmployee,
                                  domisiliSekarang: e.target.value,
                                });
                              }}
                              type="text"
                              id="address"
                              placeholder="Domisi Sekarang" disabled
                            />
                          }

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
                          <select
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                educationLevel: e.target.value,
                              });
                            }}
                          >
                            <option value="" selected disabled>
                              Select Education Level
                            </option>
                            <option value="SD">SD</option>
                            <option value="SMP">SMP</option>
                            <option value="SMA">SMA</option>
                            <option value="D1">D1</option>
                            <option value="D2">D2</option>
                            <option value="D3">D3</option>
                            <option value="S1">S1</option>
                            <option value="S2">S2</option>
                            <option value="S3">S3</option>
                            {/* <option v-htmlFor="edu in educationData" :key="edu.id" :value="edu.id">{{ edu.level }} </option> */}
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Contract Type</div>
                          <select
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                contractType: e.target.value,
                              });
                            }}
                          >
                            <option value="" selected disabled>
                              Select Contract Type
                            </option>
                            <option value="PKWTT">PKWT</option>
                            <option value="PKWTT">PKWTT</option>
                            <option value="THL">THL</option>
                            <option value="Karyawan Tetap">
                              Karyawan Tetap
                            </option>
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
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                university: e.target.value,
                              });
                            }}
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
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                major: e.target.value,
                              });
                            }}
                            type="text"
                            id="major"
                            placeholder="Tehnik Sipil..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {/* <div className="col-xl-6 col-sm-12 col-12">
                        <div className="form-group">
                          <div className="label">Document Upload</div>
                          <input
                            onChange={(e) => setInputFormEmployee({
                              ...inputFormEmployee,
                              documentUpload: e.target.files
                            })
                            }
                            className="form-control"
                            type="file"
                            id="documentUpload"
                            name="documentUpload"
                            accept="image/*"
                          />
                        </div>
                      </div> */}
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Year of Education</div>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                yearsOfEducation: e.target.value,
                              });
                            }}
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
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                lastDepartment: e.target.value,
                              });
                            }}
                            type="text"
                            id="lastPosition"
                            placeholder="PJO (Manager Ops Site)"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Experiences</div>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                experience: e.target.value,
                              });
                            }}
                            type="text"
                            id="experience"
                            placeholder="Experiences"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Organization Experience</div>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                organizationExp: e.target.value,
                              });
                            }}
                            type="text"
                            id="OrganizationExp"
                            placeholder="OrganizationExp"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Last Salary</div>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                lastSalary: e.target.value,
                              });
                            }}
                            type="text"
                            id="Last Salary"
                            placeholder="Last Salary"
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
                          <label>Personal Weakness</label>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                weakness: e.target.value,
                              });
                            }}
                            type="text"
                            id="personalWeakness"
                            placeholder="Have a bad attitude"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>Personal Power</label>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                advantage: e.target.value,
                              });
                            }}
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
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                fatherName: e.target.value,
                              });
                            }}
                            type="text"
                            id="fatherName"
                            placeholder="Father Name..."
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Mother Name</div>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                motherName: e.target.value,
                              });
                            }}
                            type="text"
                            id="motherName"
                            placeholder="Mother Name..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Husband or Wife Name</div>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                spouseName: e.target.value,
                              });
                            }}
                            type="text"
                            id="husbandOrWife"
                            placeholder="Husband or Wife Name"
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
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                childName1: e.target.value,
                              });
                            }}
                            type="text"
                            id="childName1"
                            placeholder="Child Name...."
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Child Name 2</div>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                childName2: e.target.value,
                              });
                            }}
                            type="text"
                            id="childName2"
                            placeholder="Child Name...."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Child Name 3</div>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                childName3: e.target.value,
                              });
                            }}
                            type="text"
                            id="childName3"
                            placeholder="Child Name...."
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">Child Name 4</div>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                childName4: e.target.value,
                              });
                            }}
                            type="text"
                            id="childName4"
                            placeholder="Child Name...."
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
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                emergencyContactname: e.target.value,
                              });
                            }}
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
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                emergencyContactphoneNumber: e.target.value,
                              });
                            }}
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
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                emergencyContactrelation: e.target.value,
                              });
                            }}
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
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                emergencyContactaddress: e.target.value,
                              });
                            }}
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
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                startDateWorking: e.target.value,
                              });
                            }}
                            type="date"
                            placeholder="Start Date"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <div className="label">All Document Upload</div>
                          <input
                            onChange={(e) => inputFormEmployee.documentUpload = e.target.files}
                            multiple="multiple"
                            className="form-control"
                            type="file" id="documentUpload" name="documentUpload" />
                        </div>
                      </div>
                    </div>
                    <div className="row"></div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>Salary</label>
                          <input
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                salary: e.target.value,
                              });
                            }}
                            type="text"
                            placeholder="salary"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>Company</label>
                          <select
                            onChange={(e) => {
                              setInputFormEmployee({
                                ...inputFormEmployee,
                                companyId: e.target.value,
                              });
                            }}
                          >
                            {company ?
                              company.map((item) => {
                                return (
                                  <option key={item._id} value={item._id}>{item.name}</option>
                                )
                              })
                              : <option>No Data</option>
                            }
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
                        onClick={(e) => {
                          handleAddEmployee(e);
                        }}
                        type="submit"
                        className="btn btn-apply w-auto"
                      >
                        Add Team Member
                      </button>
                      <button to={"/employees"} className="btn btn-secondary">
                        Cancel
                      </button>
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
