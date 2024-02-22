export function convertSunTime(time) {
  let sunriseUnix = time;
  let tempToJs = new Date(sunriseUnix * 1000);
  let conversion = tempToJs.toLocaleString().slice(-11, -6);
  return conversion;
}

export function convertUnixToHour(unix) {
  const date = new Date(unix * 1000);
  let hour = date.getHours();
  let finalizedFormat;
  if (hour > 12) {
    hour = hour % 12;
    finalizedFormat = `${hour} PM`;
    return finalizedFormat;
  } else {
    finalizedFormat = `${hour} AM`;
    return finalizedFormat;
  }
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function convertUnixToDate(unix) {
  const date = new Date(unix * 1000);
  let month = date.getMonth();
  month = monthNames[month].slice(0, 3);
  let day = date.getDate();
  let finalizedFormat = `${month} ${day}`;
  return finalizedFormat;
}
