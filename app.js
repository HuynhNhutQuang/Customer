const express = require("express");
const path = require("path");
const app = express();
const CustomerRoute = require("./routes/customerRoutes");
const viewRoute = require("./routes/viewRoutes");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Parse body content into Object stored in req
app.use(express.json());
// ROUTES
app.use("/", viewRoute);
app.use("/customers", CustomerRoute);
module.exports = app;
