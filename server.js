const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://quanghnfx30754:w1Aw3l4zX8kkU8b0@cluster1.ol1neqj.mongodb.net/Customer?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB Atlast Database");
  });
const app = require("./app");
const PORT = 10000 || process.env.PORT;
const server = app.listen(PORT, () => {
  console.log("Listen to port....");
});
