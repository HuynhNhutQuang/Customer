const fs = require("fs");
const mongoose = require("mongoose");
const Customer = require("./../models/customerModel");
mongoose
  .connect(
    "mongodb+srv://quanghnfx30754:w1Aw3l4zX8kkU8b0@cluster1.ol1neqj.mongodb.net/Customer?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Data connect successfully");
  });
const customers = JSON.parse(
  fs.readFileSync(`${__dirname}/customer.json`, "utf-8")
);
const importData = async () => {
  try {
    await Customer.create(customers);
  } catch (err) {
    return console.log(err);
  }
  console.log("Import Data successfully");
  process.exit();
};
const deleteData = async () => {
  try {
    await Customer.deleteMany();
  } catch (err) {
    return console.log(err);
  }
  console.log("Delete Data successfully");
  process.exit();
};
if (process.argv[2] === "import") {
  importData();
} else if (process.argv[2] === "delete") {
  deleteData();
}
