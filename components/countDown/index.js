import React, { useState, useEffect } from "react";

const CountDown = ({ timeLeft = "00:47:35:51" }) => {
  const [timeRemaning, setTimeRemaning] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTime(convertTimeLeftToSeconds(timeLeft));
    }, 1000);
    return () => clearTimeout(intervalId);
  }, []);
  let res = convertTimeLeftToSeconds(timeLeft);
  const updateTime = () => {
    res -= 1;
    setTimeRemaning(convertSecondsToTimeLeft(res));
  };
  return (
    <>
      <span> {timeRemaning.days} </span>:<span> {timeRemaning.hours} </span>:
      <span> {timeRemaning.minutes} </span>:
      <span> {timeRemaning.seconds} </span>
    </>
  );
};
const convertTimeLeftToSeconds = (time) => {
  const timeInArray = time.split(":");
  const timeToSeconds =
    timeInArray[0] * 86400 +
    timeInArray[1] * 3600 +
    timeInArray[2] * 60 +
    Number(timeInArray[3]);
  return timeToSeconds;
};
const convertSecondsToTimeLeft = (seconds) => {
  seconds = Number(seconds);
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  seconds = Math.floor(seconds % 60);
  return { days, hours, minutes, seconds };
};
export default CountDown;
