const TimeConverter = require("./helpers");

const talkingClock = (timeString) => {
  /** timeString is a string in hh:mm format */
  let timeNow = new Date();
  const time = timeString?.split(":").map((time) => +time);

  if (time) timeNow = timeNow.setHours(...time);

  const formatTime = timeNow || Date.now();

  const clock = new Intl.DateTimeFormat("en-uk", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(formatTime);

  // to create hh:mm

  let [hrs, mins] = clock.split(":");
  hrs = +hrs;
  mins = Number.parseInt(mins);

  const humanTalkingClock = TimeConverter(hrs, mins);

  return humanTalkingClock;
};

// ----- Command line code is node data/vendoir.js hh:mm --------

process.argv[2] && console.log(talkingClock(process.argv[2]));
process.argv[2] === undefined && console.log(talkingClock());

module.exports = talkingClock;
