const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.json({
//     message: "Security Solutions Control Center API",
//     status: "online",
//     version: "0.1.0"
//   });
// });

// app.get("/api/health", (req, res) => {
//   res.json({
//     ok: true,
//     service: "SSCC Backend",
//     timestamp: new Date()
//   });
// });

module.exports = app;