const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
const talkingClock = require("./data/vendior");

dotenv.config({ path: "./config.env" });

const app = express();

app.use(helmet());
app.use(express.json());

const sendTimeHandler = (req, res, next) => {
  let hrs, mins;

  if (req.params.time) {
    hrs = +req.params?.time.slice(0, 2);
    mins = +req.params?.time.slice(2, 5);
  } else {
    hrs = undefined;
    mins = undefined;
  }

  const time = talkingClock(hrs, mins);

  res.status(200).json({ status: "success", data: { time } });
};

app.route("/api/v1/clock/").get(sendTimeHandler);
app.route("/api/v1/clock/:time").get(sendTimeHandler);

const port = process.env.PORT;
const host = process.env.HOST;
app.listen(port, host, () =>
  console.log(`Express Server is running on Port: ${port}, Host: ${host}!`)
);
