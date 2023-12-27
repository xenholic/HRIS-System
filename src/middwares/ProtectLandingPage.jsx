// import { Navigate } from "react-router-dom";

// export default function ProtectLandingPage(props) {
//   let isLogin = localStorage.getItem("access_token");
//   let isFreelancer = localStorage.getItem("role") === "freelancer";
//   if (isLogin) {
//     if (isFreelancer) {
//       return <Navigate to={"/user"} />;
//     } else {
//       return <Navigate to={"/companies"} />;
//     }
//   }
//   return props.children;
// }
