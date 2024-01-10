const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/userController");
const EmployeeController = require("../controllers/employeeController");

// const authenticationUsers = require("../middlewares/authenticationUser");
// middleware that is specific to this router
router.post("/register", UsersController.register);
router.post("/login", UsersController.login);
// router.post("/socialLogin", UsersController.socialLogin);

router.get("/employees", EmployeeController.showAllEmployees);
router.post("/employees", EmployeeController.addNewEmployees);
router.get("/employees/:employeeId", EmployeeController.showEmployeeById);
// router.post("/companies", authenticationUsers, UsersController.newProposal);
// router.post("/companies/:companyId", authenticationUsers, UsersController.newProposal);
// router.get("/job", authenticationUsers, UsersController.showMyJob);
// router.get("/rating/:id", authenticationUsers, UsersController.rating);
// router.get("/users", UsersController.showUsers);

module.exports = router;
