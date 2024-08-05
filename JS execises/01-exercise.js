// 1. Write a JavaScript program to display the current day and time in the following format.

function getCurrentDayAndTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();

  
  const day = daysOfWeek[now.getDay()];

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; 

  const minutesFormatted = minutes < 10 ? "0" + minutes : minutes;
  const secondsFormatted = seconds < 10 ? "0" + seconds : seconds;

  const timeString = `Today is ${day}, \nTime is ${hours}:${minutesFormatted}:${secondsFormatted} ${ampm}`;
  console.log(timeString);
}
getCurrentDayAndTime();
