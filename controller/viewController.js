const axios = require("axios");
const Customer = require("./../models/customerModel");
exports.getOverview = (req, res) => {
  res.status(200).render("overview");
};
exports.viewListCustomers = async (req, res, next) => {
  const customers = await Customer.find();
  res.status(200).render("customers", { customers });
};
exports.getCustomer = async (req, res, next) => {
  res.status(200).render("getCustomer");
};
exports.displayCustomer = async (req, res, next) => {
  const customer = await res.status(200).rend("displayCustomer", { customer });
};
