const TimeConverter = require("./helpers");

const talkingClock = (...time) => {
  /** ...time is [hrs, mins] in hh:mm format */
  let timeNow = new Date();

  if (time) timeNow = timeNow.setHours(...time);

  const formatTime = timeNow || Date.now();

  const clock = new Intl.DateTimeFormat("en-uk", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(formatTime);

  // for min
  let mins = +clock.split(":")[1].slice(0, 2);
  let hrs = +clock.split(":")[0].slice(0, 2);

  const humanTalkingClock = TimeConverter(hrs, mins);

  return humanTalkingClock;
};

module.exports = talkingClock;
