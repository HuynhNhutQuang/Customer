const express = require("express");
const router = express.Router();
const customerController = require("./../controller/customerController");
router
  .route("/")
  .get(customerController.getAllCustomer)
  .post(customerController.createCustomer);
router
  .route("/:id")
  .get(customerController.getCustomer)
  .patch(customerController.updateCustomer)
  .delete(customerController.deleteCustomer);

module.exports = router;
