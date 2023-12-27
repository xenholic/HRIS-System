// import { FETCH_PROJECT_USER, FETCH_PROJECTS_USER } from "./actionType";
// import swal from "sweetalert";
// const axios = require("axios");

// const loginUser = (input) => {
//   return (dispatch) => {
//     return axios
//       .post("http://localhost:3000/users/login", input)
//       .then((response) => {
//         return response;
//       })
//       .catch((error) => {
//         swal(error.response.data.message);
//       });
//   };
// };

// const registerUser = (input) => {
//   return (dispatch) => {
//     return axios
//       .post("http://localhost:3000/users/register", input)
//       .then((response) => {
//         return response;
//       })
//       .catch((error) => {
//         swal(error.response.data.message);
//       });
//   };
// };

// const fetchProjectsUser = () => {
//     return axios.get("http://localhost:3000/users/projects", {
//         headers: {
//             'Content-Type': 'application/json',
//             access_token: localStorage.getItem("access_token")
//         }
//     })
//         .then((response) => {
//             // console.log(response.data.projectList, "ini action");
//             return (dispatch) => {
//                 dispatch(projectsFetchSuccess(response.data.projectList))
//                 // dispatch({
//                 //     type: "FETCH_PROJECTS",
//                 //     payload: response.data.projectList
//                 // })
//             }
//         })
//         .catch((error) => {
//             swal(error.response.data.message);
//         })
// }

// const fetchProjectsUser = () => {
//   return (dispatch) => {
//     fetch("http://localhost:3000/users/projects", {
//       headers: {
//         access_token: localStorage.getItem("access_token"),
//       },
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("internal server error");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         dispatch(projectsFetchSuccess(data));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

// export const projectsFetchSuccess = (payload) => {
//   return {
//     type: FETCH_PROJECTS_USER,
//     payload,
//   };
// };

// export const fetchProjectsUserById = (id) => {
//   return (dispatch) => {
//     // http://localhost:3000/users/projects/2
//     fetch(`http://localhost:3000/users/projects/${id}`, {
//       headers: {
//         access_token: localStorage.getItem("access_token"),
//       },
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("internal server error");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         // console.log(data, 'dari action user');
//         dispatch(projectsByIdSuccess(data));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

// export const projectsByIdSuccess = (payload) => {
//   return {
//     type: FETCH_PROJECT_USER,
//     payload,
//   };
// };

// const fetchJobUser = () => {
//   return axios
//     .get("http://localhost:3000/users/job", {
//       headers: {
//         "Content-Type": "application/json",
//         access_token: localStorage.getItem("access_token"),
//       },
//     })
//     .then((response) => {
//       return response;
//     })
//     .catch((error) => {
//       swal(error.response.data.message);
//     });
// };

// const fetchRatingUser = (id) => {
//   return axios
//     .get(`http://localhost:3000/users/rating/${id}`, {
//       headers: {
//         "Content-Type": "application/json",
//         access_token: localStorage.getItem("access_token"),
//       },
//     })
//     .then((response) => {
//       return response;
//     })
//     .catch((error) => {
//       swal(error.response.data.message);
//     });
// };

// export default all of the functions
// export {
//   loginUser,
//   registerUser,
//   fetchProjectsUser,
//   fetchJobUser,
//   fetchRatingUser,
// };
