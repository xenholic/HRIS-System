/* eslint-disable no-unused-vars */
import axios from "axios";
// import swal from "sweetalert";
import { FETCH_EMPLOYEE_BY_ID_USER, FETCH_EMPLOYEES, FETCH_COMPANIES } from "./actionType";

const login = (input) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3000/login", input)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        // swal(error.response.data.message);
        console.log(error)
      });
  };
};

const register = (input) => {
  return (dispatch) => {
    return axios
    .post(`http://localhost:3000/register`, input)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      // swal(error.response.data.message);
      console.log(error)
    });
  };
};

const fetchEmployees = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/employees", {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("internal server error");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(employeesSuccess(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const employeesSuccess = (payload) => {
  return {
    type: FETCH_EMPLOYEES,
    payload,
  };
};

const fetchEmployeeById = (_id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/employees/${_id}`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("internal server error");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchEmployeeByIdSuccess(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const fetchEmployeeByIdSuccess = (payload) => {
  return {
    type: FETCH_EMPLOYEE_BY_ID_USER,
    payload,
  };
};

const addNewEmployee = (data) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3000/employees", data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        // swal(error.response.data.message);
        console.log(error)
      });
  };
};

//fetching employee
const fetchCompany = () => {
  return (dispatch) => {
      fetch("http://localhost:3000/companies",{
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("internal server error");
        }
        return response.json();
      })
      .then((response) => {
        dispatch(fetchCompaniesSuccess(response));
      })
      .catch((err) => {
        // swal(error.response.data.message);
        console.log(err)
      });
  };
};

export const fetchCompaniesSuccess = (payload) => {
  return {
    type: FETCH_COMPANIES,
    payload,
  };
};

const addCompany = (data) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3000/companies", data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        // swal(error.response.data.message);
        console.log(error)
      });
  };
};

// const paymentMidtrans = (id) => {
//   return (dispatch) => {
//     return axios
//       .post(`http://localhost:3000/companies/midtrans/${id}`)
//       .then((response) => {
//         return response.data;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

// const ratingCompany = (id) => {
//   return (dispatch) => {
//     return axios
//       .get(`http://localhost:3000/users/rating/${id}`)

//       .then((response) => {
//         return response.data;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

// const choosenBid = (id, ProjectId) => {
//   return (dispatch) => {
//     return axios
//       .put(
//         `http://localhost:3000/companies/chooseBid/${id}/${ProjectId}`,
//         {},
//         {
//           headers: {
//             "Content-Type": "application/json",
//             access_token: localStorage.getItem("access_token"),
//           },
//         }
//       )
//       .then((response) => {
//         console.log(response.data);
//         dispatch(fetchProjectByIdCompany(ProjectId));
//         return response.data;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

export {
  login,
  register,
  fetchEmployees,
  fetchEmployeeById,
  addNewEmployee,
  addCompany,
  fetchCompany
//   addProjectCompany,
//   paymentMidtrans,
//   ratingCompany,
//   choosenBid,
};
