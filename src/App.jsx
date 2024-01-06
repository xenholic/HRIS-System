/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { Routes, Route } from "react-router-dom";
// import AuthLayout from "./_auth/AuthLayout";
// import RootLayout from "./_root/RootLayout";

import Dasboard from "./pages/Dasboard";
import Employee from "./pages/Employee";
import Login from "./pages/Login";
import EmployeeOffice from "./pages/EmployeeOffice";
import EmployeeField from "./pages/EmployeeField";
import Company from "./pages/Company";
import Calendar from "./pages/Calendar";
import Leaves from "./pages/Leaves";
import Review from "./pages/Review";
import ReviewType from "./pages/ReviewType";
// import NotFoundPage from "./components/NotFoundPage";
import ReportLeaves from "./pages/ReportLeaves";
import Report from "./pages/report";
import ReportPayroll from "./pages/ReportPayroll";
import ReportContact from "./pages/ReportContact";
import ReportEmail from "./pages/ReportEmail";
import ReportSecurity from "./pages/ReportSecurity";
import ReportWFH from "./pages/ReportWFH";
import ReportPersonal from "./pages/ReportPersonal";
import Manage from "./pages/Manage";
import ManageLeadership from "./pages/ManageLeadership";
import Setting from "./pages/Setting";
import Settingtimeoff from "./pages/Setting-timeoff";
import SuperAdmin from "./pages/SuperAdmin";
import Profile from "./pages/Profile";
import ProfileDetail from "./pages/Profile-detail";
import ProfileDocument from "./pages/Profile-document";
import ProfilePayroll from "./pages/Profile-payroll";
import ProfileTimeoff from "./pages/Profile-timeoff";
import ProfileReview from "./pages/Profile-review";
import ProfileSetting from "./pages/Profile-setting";
import EmployeeGrid from "./pages/Employee-grid";
import AddEmployee from "./components/AddEmployee";
import AddReview from "./components/AddReview";
import ProtectLandingPage from "./middwares/ProtectLandingPage";
import Register from "./pages/Register";

function App() {
  return (
    <div className="">
      <Routes>
        {/* Public Routes */}
        {/* <Route 
      // element={<AuthLayout />}
      > */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/sign-up" element={<SignupForm />} /> */}
        {/* </Route> */}

        {/* Private Routes */}
        {/* <Route element={<RootLayout />}> */}
        {/* <Route path="/" element={<ProtectLandingPage />}> */}
          <Route index element={<Dasboard />} />
          <Route path="/employees" element={<Employee />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          {/* <Route path="/add-employee/:id" element={<AddEmployee />} /> */}
          <Route path="/employees-grid" element={<EmployeeGrid />} />
          <Route path="/employees/office" element={<EmployeeOffice />} />
          <Route path="/employees/field" element={<EmployeeField />} />
          <Route path="/companies" element={<Company />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/leaves" element={<Leaves />} />
          <Route path="/review" element={<Review />} />
          <Route path="/review/add-review" element={<AddReview />} />
          <Route path="/review/review-type" element={<ReviewType />} />
          <Route path="/report" element={<Report />} />
          <Route path="/report-personal" element={<ReportPersonal />} />
          <Route path="/report-leaves" element={<ReportLeaves />} />
          <Route path="/report-payroll" element={<ReportPayroll />} />
          <Route path="/report-contact" element={<ReportContact />} />
          <Route path="/report-email" element={<ReportEmail />} />
          <Route path="/report-security" element={<ReportSecurity />} />
          <Route path="/report-wfh" element={<ReportWFH />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/manage-leadership" element={<ManageLeadership />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/setting-timeoff" element={<Settingtimeoff />} />
          <Route path="/super-admin" element={<SuperAdmin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-detail" element={<ProfileDetail />} />
          <Route path="/profile-document" element={<ProfileDocument />} />
          <Route path="/profile-payroll" element={<ProfilePayroll />} />
          <Route path="/profile-timeoff" element={<ProfileTimeoff />} />
          <Route path="/profile-review" element={<ProfileReview />} />
          <Route path="/profile-setting" element={<ProfileSetting />} />
          <Route path="/register" element={<Register />} />
          {/*  <Route index element={<Home />} />
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/saved" element={<Saved/>}/>
        <Route path="/allusers" element={<AllUsers/>}/>
        <Route path="/create-post" element={<CreatePost/>}/>
        <Route path="/update-post" element={<EditPost/>}/>
        <Route path="/posts/:id" element={<PostDetails/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="/update-profile/:id" element={<UpdateProfile/>}/>*/}
          {/* </Route> */}
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
