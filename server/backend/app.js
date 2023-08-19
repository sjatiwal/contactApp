const express = require("express");
const cors = require("cors");
const contact = require("./routes/createContact.js");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", contact);
module.exports = app;
