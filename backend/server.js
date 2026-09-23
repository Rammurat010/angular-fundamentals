require("dotenv").config();

const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

// Middleware
app.use(cors());

app.use(express.json());

// Test API
app.get("/", (req, res) => {
  res.json({
    message: "Employee Management API is running",
  });
});

// Employee routes
app.use("/api/employees", employeeRoutes);

// 404 route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
