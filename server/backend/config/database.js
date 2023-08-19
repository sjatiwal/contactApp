const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/Contact", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
