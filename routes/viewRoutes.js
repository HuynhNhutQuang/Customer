const express = require("express");
const viewController = require("./../controller/viewController");
const router = express.Router();
router.route("/").get(viewController.getOverview);
router.route("/viewListCustomers").get(viewController.viewListCustomers);
router.route("/getCustomer").get(viewController.getCustomer);
router.route("/displayCustomer").get(viewController.displayCustomer);
module.exports = router;
