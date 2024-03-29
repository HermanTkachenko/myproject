export default function dateBuilder(newDate) {
  let months = [
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
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[newDate.getDay()];
  let date = newDate.getDate();
  let month = months[newDate.getMonth()];
  let year = newDate.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
}
