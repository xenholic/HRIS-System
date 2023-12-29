/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import { 
  // useSelector, 
  useDispatch } from "react-redux";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";
import { fetchEmployees } from "../store/actions/actionEmployee";
import EmployeeTable from "../components/EmployeeTable";

function Employee() {
  const dispatch = useDispatch();
  // const employees = useSelector((state) => {
  //   console.log(state.projectReducerCompany.projects);
  //   return state.projectReducerCompany.projects;
  // });

  //fetch dari redux
  useEffect(() => {
    dispatch(fetchEmployees());
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
                    <a className="active" href="#">
                      All
                    </a>
                  </li>
                  <li>
                    <Link to="/employees/office">Office</Link>
                  </li>
                  <li>
                    <Link to="/employees/team">Team</Link>
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
                  <label className="employee_count">7 People</label>
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
                  {/* {employees.length ? (
                    employees.map((item, index) => {
                      return <EmployeeTable key={index} employee={item} />;
                    })
                  ) : (
                    <p className="text-center text-lg">No Employee to show</p>
                  )} */}
                  <EmployeeTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
