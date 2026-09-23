const express = require("express");

const router = express.Router();

const employeeController = require("../controllers/employeeController");

// GET all employees
router.get("/", employeeController.getEmployees);

// GET single employee
router.get("/:id", employeeController.getEmployee);

// POST employee
router.post("/", employeeController.createEmployee);

// PUT employee
router.put("/:id", employeeController.updateEmployee);

// DELETE employee
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
