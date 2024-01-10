/* eslint-disable react/no-unknown-property */
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { faker } from '@faker-js/faker';
import {
  fetchEmployees
} from "../store/actions/actionEmployee";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title);



function Dasboard() {


  const dispatch = useDispatch();


  const employees = useSelector((state) => {
    return state.employeeReducer.employees;
  });
  console.log(employees, "employees");
const date = new Date().toLocaleDateString();

const field = employees.filter((employee) => {
  console.log(employee.field, "field")
    return employee.field === "on site"
});
const office = employees.filter((employee) => {
  return employee.field === "office";
});
const leaves = employees.filter((employee) => {
  return employee.status === "leaves";
});

const data = {
  labels: ['Field', 'Office', 'Leaves'],
  datasets: [
    {
      label: 'Employee',
      data: [field.length, office.length, leaves.length],
      backgroundColor: [
        'rgb(173,255,47)',
        'rgb(0,191,255)',
        'rgb(220,20,60)',

      ],
      borderColor: [
        'rgb(0,100,0)',
        'rgb(0,0,255)',
        'rgb(139,0,0)'
      ],
      borderWidth: 3,
    },
  ],
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nov', 'Dec'];

const data2 = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Salary By Unit',
    },
  },
};

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
          <div className="page-name mb-4">
            <h4 className="m-0">
              <img
                src="assets/img/profile.jpg"
                className="mr-1"
                alt="profile"
              />{" "}
              Welcome Admin
            </h4>
            <label>{ date }</label>
          </div>
          <div className="row mb-4">
            <div className="col-xl-6 col-sm-12 col-12">
              <div className="breadcrumb-path ">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <img
                        src="assets/img/dash.png"
                        className="mr-3"
                        alt="breadcrumb"
                      />
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-sm-12 col-12">
              <div className="">
                {/* <div className="col-xl-6 col-sm-6 col-12">
                  <a className="btn-dash" href="#">
                    {" "}
                    Admin Dashboard
                  </a>
                </div> */}
                <div className="">
                  <a className="btn-dash">Admin Dashboard</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card board1 fill1 ">
                <div className="card-body">
                  <div className="card_widget_header">
                    <label>Employees</label>
                    <h4>{employees.length}</h4>
                  </div>
                  <div className="card_widget_img">
                    <img src="assets/img/dash1.png" alt="card-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card board1 fill2 ">
                <div className="card-body">
                  <div className="card_widget_header">
                    <label>Companies</label>
                    <h4>30</h4>
                  </div>
                  <div className="card_widget_img">
                    <img src="assets/img/dash2.png" alt="card-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card board1 fill3 ">
                <div className="card-body">
                  <div className="card_widget_header">
                    <label>Leaves</label>
                    <h4>9</h4>
                  </div>
                  <div className="card_widget_img">
                    <img src="assets/img/dash3.png" alt="card-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card board1 fill4 ">
                <div className="card-body">
                  <div className="card_widget_header">
                    <label>Salary</label>
                    <h4>$5.8M</h4>
                  </div>
                  <div className="card_widget_img">
                    <img src="assets/img/dash4.png" alt="card-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 d-flex mobile-h">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">Total Employees</h5>
                  </div>
                </div>
                <div className="card-body">
                <div className="mx-auto p-2 col-7">
                <Pie
                data={data}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                  },
                }}
                 />
                  {/* <div className="text-center text-muted">
                    <div className="row">
                      <div className="col-4">
                        <div className="mt-4">
                          <p className="mb-2 text-truncate">
                            <i className="fas fa-circle text-primary mr-1"></i>{" "}
                            Business
                          </p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-4">
                          <p className="mb-2 text-truncate">
                            <i className="fas fa-circle text-success mr-1"></i>{" "}
                            Testing
                          </p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-4">
                          <p className="mb-2 text-truncate">
                            <i className="fas fa-circle text-danger mr-1"></i>{" "}
                            Development
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">Total Salary By Unit</h5>
                  </div>
                </div>
                <div className="card-body">
                 <div className="mx-auto">
                  <Line
                  style={{marginTop: "100px"}}
                  data={data2}
                  options={options2}
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-xl-6 col-sm-12 col-12 d-flex">
            <div className="card card-list flex-fill">
              <div className="card-header ">
                <h4 className="card-title">Total Salary By Unit</h4>
              </div>
              <div className="card-body">
                <div className="team-list">
                  <div className="team-view">
                    <div className="team-img">
                      <img
                        src="assets/img/profiles/avatar-03.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="team-content">
                      <label>Maria Cotton</label>
                      <span>PHP</span>
                    </div>
                  </div>
                  <div className="team-action">
                    <ul>
                      <li>
                        <a>
                          <i data-feather="trash-2"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i data-feather="edit-2"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-list">
                  <div className="team-view">
                    <div className="team-img">
                      <img
                        src="assets/img/profiles/avatar-04.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="team-content">
                      <label>Linda Craver</label>
                      <span>IOS</span>
                    </div>
                  </div>
                  <div className="team-action">
                    <ul>
                      <li>
                        <a>
                          <i data-feather="trash-2"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i data-feather="edit-2"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-list">
                  <div className="team-view">
                    <div className="team-img">
                      <img
                        src="assets/img/profiles/avatar-06.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="team-content">
                      <label>Jenni Sims</label>
                      <span>Android</span>
                    </div>
                  </div>
                  <div className="team-action">
                    <ul>
                      <li>
                        <a>
                          <i data-feather="trash-2"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i data-feather="edit-2"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-list">
                  <div className="team-view">
                    <div className="team-img">
                      <img
                        src="assets/img/profiles/avatar-11.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="team-content">
                      <label>Danny</label>
                      <span>Design</span>
                    </div>
                  </div>
                  <div className="team-action">
                    <ul>
                      <li>
                        <a>
                          <i data-feather="trash-2"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i data-feather="edit-2"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-12 col-12 d-flex">
            <div className="card card-list flex-fill">
              <div className="card-header">
                <div className="">
                  <h4 className="card-title">Recent Activities</h4>
                </div>
              </div>
              <div className="card-body dash-activity">
                <div className="slimscroll activity_scroll">
                  <div className="activity-set">
                    <div className="activity-img">
                      <img
                        src="assets/img/profiles/avatar-02.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="activity-content">
                      <label>Lorem ipsum dolor sit amet,</label>
                      <span>2 hours ago</span>
                    </div>
                  </div>
                  <div className="activity-set">
                    <div className="activity-img">
                      <img
                        src="assets/img/profiles/avatar-05.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="activity-content">
                      <label>Lorem ipsum dolor sit amet,</label>
                      <span>3 hours ago</span>
                    </div>
                  </div>
                  <div className="activity-set">
                    <div className="activity-img">
                      <img
                        src="assets/img/profiles/avatar-07.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="activity-content">
                      <label>Lorem ipsum dolor sit amet,</label>
                      <span>4 hours ago</span>
                    </div>
                  </div>
                  <div className="activity-set">
                    <div className="activity-img">
                      <img
                        src="assets/img/profiles/avatar-08.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="activity-content">
                      <label>Lorem ipsum dolor sit amet,</label>
                      <span>5 hours ago</span>
                    </div>
                  </div>
                  <div className="activity-set">
                    <div className="activity-img">
                      <img
                        src="assets/img/profiles/avatar-09.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="activity-content">
                      <label>Lorem ipsum dolor sit amet,</label>
                      <span>6 hours ago</span>
                    </div>
                  </div>
                  <div className="activity-set">
                    <div className="activity-img">
                      <img
                        src="assets/img/profiles/avatar-10.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="activity-content">
                      <label>Lorem ipsum dolor sit amet,</label>
                      <span>2 hours ago</span>
                    </div>
                  </div>
                  <div className="activity-set">
                    <div className="activity-img">
                      <img
                        src="assets/img/profiles/avatar-12.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="activity-content">
                      <label>Lorem ipsum dolor sit amet,</label>
                      <span>3 hours ago</span>
                    </div>
                  </div>
                  <div className="activity-set">
                    <div className="activity-img">
                      <img
                        src="assets/img/profiles/avatar-13.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="activity-content">
                      <label>Lorem ipsum dolor sit amet,</label>
                      <span>4 hours ago</span>
                    </div>
                  </div>
                </div>
                <div className="leave-viewall activit">
                  <a>
                    View all{" "}
                    <img
                      src="../assets/img/right-arrow.png"
                      className="ml-2"
                      alt="arrow"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-12 col-12 d-flex">
            <div className="card card-list flex-fill">
              <div className="card-header ">
                <h4 className="card-title-dash">Your Upcoming Leave</h4>
                <div className="dropdown">
                  <button
                    className="btn btn-action "
                    type="button"
                    id="roomsBtn"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="roomsBtn">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="leave-set">
                  <span className="leave-inactive">
                    <i className="fas fa-briefcase"></i>
                  </span>
                  <label>Mon, 16 Dec 2021</label>
                </div>
                <div className="leave-set">
                  <span className="leave-active">
                    <i className="fas fa-briefcase"></i>
                  </span>
                  <label>Fri, 20 Dec 2021</label>
                </div>
                <div className="leave-set">
                  <span className="leave-active">
                    <i className="fas fa-briefcase"></i>
                  </span>
                  <label>Wed, 25 Dec 2021</label>
                </div>
                <div className="leave-set">
                  <span className="leave-active">
                    <i className="fas fa-briefcase"></i>
                  </span>
                  <label>Fri, 27 Dec 2021</label>
                </div>
                <div className="leave-set">
                  <span className="leave-active">
                    <i className="fas fa-briefcase"></i>
                  </span>
                  <label>Tue, 31 Dec 2021</label>
                </div>
                <div className="leave-viewall">
                  <a href="leave.html">
                    View all{" "}
                    <img
                      src="assets/img/right-arrow.png"
                      className="ml-2"
                      alt="arrow"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Dasboard;
