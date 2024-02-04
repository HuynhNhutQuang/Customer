const Customer = require("./../models/customerModel");

exports.getAllCustomer = async (req, res, next) => {
  const users = await Customer.find();
  res.status(200).json({
    status: "success",
    quantity: users.length,
    data: users,
  });
};
exports.getCustomer = async (req, res, next) => {
  const user = await Customer.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: user,
  });
};
exports.createCustomer = async (req, res, next) => {
  const newUser = await Customer.create(req.body);
  res.status(201).json({
    status: "success",
    data: newUser,
  });
};
exports.updateCustomer = async (req, res, next) => {
  const user = await Customer.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    status: "success",
    data: user,
  });
};
exports.deleteCustomer = async (req, res, next) => {
  const user = await Customer.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
  });
};
