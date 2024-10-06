const date = document.querySelector(".date");
const week_day = document.querySelector(".ele_date");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

const GetCalenderDate = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
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
  const today = new Date();
  date.innerHTML = today.getDate();
  week_day.innerHTML = days[today.getDay()];
  month.innerHTML = months[today.getMonth()];
  year.innerHTML = today.getFullYear()
};

GetCalenderDate();
