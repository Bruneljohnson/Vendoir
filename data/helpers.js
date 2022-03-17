"use strict";

let digits = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "twenty one",
  "twenty two",
  "twenty three",
  "twenty four",
  "twenty five",
  "twenty six",
  "twenty seven",
  "twenty eight",
  "twenty nine",
];

const UppercaseDigits = digits.map((digit) =>
  digit.replace(digit[0], digit[0].toUpperCase())
);

const TimeConverter = (hrs, mins) => {
  let timeToString;
  const notNoonMidnight = hrs > 0 && hrs < 12;

  if ((mins === 0 && hrs === 0) || hrs === 12)
    return (timeToString = `${UppercaseDigits[12]} o'clock`);

  if (mins === 0 && notNoonMidnight)
    return (timeToString = `${UppercaseDigits[hrs]} o'clock`);

  if (mins === 15) return (timeToString = ` Quarter past ${digits[hrs]}`);

  if (mins < 30)
    return (timeToString = `${UppercaseDigits[mins]} past ${digits[hrs]}`);

  if (mins === 30) return (timeToString = `Half past ${digits[hrs]}`);

  if (mins === 45) {
    return (timeToString = `Quarter to ${digits[hrs + 1]}`);
  }

  if (mins > 30) {
    const timeDifference = 60 - mins;
    return (timeToString = `${UppercaseDigits[timeDifference]} to ${
      digits[hrs + 1]
    }`);
  }
};

module.exports = TimeConverter;
