const connectDatabase = require("./config/database");
const app = require("./app");

connectDatabase();

const server = app.listen(
  5000,

  () => {
    console.log(`server is working on http://localhost:5000`);
  }
);

process.on("unhandledRejection", (err) => {
  console.log("unhandledRejection", err);
  server.close(() => {
    process.exit(1);
  });
});
