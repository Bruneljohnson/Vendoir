const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
const talkingClock = require("./data/vendoir");

dotenv.config({ path: "./config.env" });
const app = express();

// MIDDLEWARE
app.use(helmet());
app.use(express.json());

// ROUTE HANDLER
const sendTimeHandler = (req, res, next) => {
  const time = talkingClock(req.params.time);

  res.status(200).json({ status: "success", data: { time } });
};

// API ROUTES
app.route("/api/v1/clock/").get(sendTimeHandler);
app.route("/api/v1/clock/:time").get(sendTimeHandler);

//SERVER
const port = process.env.PORT;
const host = process.env.HOST;
app.listen(port, host, () =>
  console.log(`Express Server is running on Port: ${port}, Host: ${host}!`)
);
