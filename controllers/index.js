// Import route pages
const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const dashboardRoutes = require("./dashboardRoutes");
const loginRoutes = require("./loginRoutes");

// Import API folder
const apiRoutes = require("./api");

// use page routes
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/login", loginRoutes);

// use api routes
router.use("/api", apiRoutes);

// if they go anywhere else will redirect to homepage
router.use("*", homeRoutes);

module.exports = router;
