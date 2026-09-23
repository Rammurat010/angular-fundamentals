const Employee = require("../models/employeeModel");

// GET /api/employees
const getEmployees = (req, res) => {
  Employee.getAllEmployees((err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch employees",
        error: err.message,
      });
    }

    res.status(200).json({
      success: true,
      count: results.length,
      data: results,
    });
  });
};

// GET /api/employees/:id
const getEmployee = (req, res) => {
  const { id } = req.params;

  Employee.getEmployeeById(id, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch employee",
        error: err.message,
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      data: results[0],
    });
  });
};

// POST /api/employees
const createEmployee = (req, res) => {
  const employee = req.body;

  if (!employee.name || !employee.email) {
    return res.status(400).json({
      success: false,
      message: "Name and email are required",
    });
  }

  Employee.createEmployee(employee, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to create employee",
        error: err.message,
      });
    }

    res.status(201).json({
      success: true,
      message: "Employee created successfully",
      employeeId: result.insertId,
    });
  });
};

// PUT /api/employees/:id
const updateEmployee = (req, res) => {
  const { id } = req.params;

  const employee = req.body;

  Employee.updateEmployee(id, employee, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to update employee",
        error: err.message,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee updated successfully",
    });
  });
};

// DELETE /api/employees/:id
const deleteEmployee = (req, res) => {
  const { id } = req.params;

  Employee.deleteEmployee(id, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to delete employee",
        error: err.message,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
    });
  });
};

module.exports = {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
