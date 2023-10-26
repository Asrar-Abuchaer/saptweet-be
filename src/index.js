const express = require("express");
const path = require("path");
const parser = require("body-parser");
// const authRouter = require("./routes/authRouter");
const cors = require("cors");

// const db = require("./models");
// db.sequelize.sync({ alter: true });

require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const PORT = process.env.PORT || 8010;

const app = new express();

app.use(parser.json());

app.use(
  cors({
    origin: [
      process.env.WHITELISTED_DOMAIN &&
        process.env.WHITELISTED_DOMAIN.split(" "),
    ],
  })
);

// const branchRouter = require("./routes/branchRouter");

// app.use("/branchs", branchRouter);

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`Server started on port ${PORT}`);
});
