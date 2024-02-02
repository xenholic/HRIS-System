const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/userController");
const EmployeeController = require("../controllers/employeeController");
const CompanyController = require("../controllers/companyController");
const {upload} = require("../helpers/upload");
// const authenticationUsers = require("../middlewares/authenticationUser");
// middleware that is specific to this router
router.post("/register", UsersController.register);
router.post("/login", UsersController.login);
// router.post("/socialLogin", UsersController.socialLogin);

//employees
router.get("/employees", EmployeeController.showAllEmployees);
// router.post('/singleFile', upload.single('file'), EmployeeController.singleFileUpload);
// router.post("/multipleFiles", upload.array('files'), EmployeeController.multipleFileUpload);
router.post("/employees/add-employee",upload.array('files'), EmployeeController.addNewEmployees);
router.get("/employees/:employeeId", EmployeeController.showEmployeeById);
// router.put("/employees/:employeeId", EmployeeController.editEmployeeById);
// router.put("/employees/:employeeId", EmployeeController.deleteEmployeeById);

//companies
router.get("/companies", CompanyController.getAllCompanies);
router.post("/companies", CompanyController.addNewCompany);
// router.post("/upload", CompanyController.uploadDocument);
// router.post("/companies/:companyId", authenticationUsers, UsersController.newProposal);
// router.get("/job", authenticationUsers, UsersController.showMyJob);
// router.get("/rating/:id", authenticationUsers, UsersController.rating);
// router.get("/users", UsersController.showUsers);

module.exports = router;
