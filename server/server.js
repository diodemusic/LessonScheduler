require("dotenv").config();
const morgan = require("morgan");
const healthRoutes = require("./src/routes/health.route");
const moduleRoutes = require("./src/routes/module.route");
const scheduleRoutes = require("./src/routes/schedule.route");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT;
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;

const app = express();

mongoose.connect(MONGODB_CONNECTION_STRING)
    .then(() => console.log("connected to mongodb"));

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// mount routers
app.use("/api/health", healthRoutes);
app.use("/api/module", moduleRoutes);
app.use("api/schedule", scheduleRoutes);

// start listening
app.listen(PORT, () => {
    console.log(`It's alive! localhost:${PORT}`);
});
