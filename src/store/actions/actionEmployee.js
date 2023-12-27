/* eslint-disable no-unused-vars */
// import axios from "axios";
// import swal from "sweetalert";
import { FETCH_EMPLOYEE_BY_ID_USER, FETCH_EMPLOYEES } from "./actionType";

// const loginCompany = (input) => {
//   return (dispatch) => {
//     return axios
//       .post("http://localhost:3000/companies/login", input)
//       .then((response) => {
//         return response;
//       })
//       .catch((error) => {
//         swal(error.response.data.message);
//       });
//   };
// };

// const registerCompany = (input) => {
//   return (dispatch) => {
//     return fetch(`http://localhost:3000/companies/register`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(input),
//     });
//   };
// };

const fetchEmployees = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/employees", {
    //   headers: {
    //     access_token: localStorage.getItem("access_token"),
    //   },
    })
      .then((response) => {
        if (!response.ok) {
          console.log("error");
          throw new Error("internal server error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data, "ini action");
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

// const fetchProjectByIdCompany = (id) => {
//   return (dispatch) => {
//     fetch(`http://localhost:3000/companies/project/detail/${id}`, {
//       headers: {
//         access_token: localStorage.getItem("access_token"),
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("internal server error");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data, "ini action");
//         dispatch(fetchProjectByIdCompanySuccess(data));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

// const fetchProjectByIdCompanySuccess = (payload) => {
//   return {
//     type: FETCH_PROJECT_COMPANY,
//     payload,
//   };
// };

// const addProjectCompany = (input) => {
//   return (dispatch) => {
//     return fetch(`http://localhost:3000/companies/project`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         access_token: localStorage.getItem("access_token"),
//       },
//       body: JSON.stringify(input),
//     });
//   };
// };

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
//   loginCompany,
//   registerCompany,
  fetchEmployees,
//   fetchProjectByIdCompany,
//   addProjectCompany,
//   paymentMidtrans,
//   ratingCompany,
//   choosenBid,
};
