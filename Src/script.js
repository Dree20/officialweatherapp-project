function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temp");
  let newTemp = Math.round(response.data.temperature.current);

  temperatureElement.innerHTML = newTemp;
}

function changeInput(event) {
  event.preventDefault();
  let cityChange = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let city = cityChange.value;
  let apiKey = "babdtd562ab541fbc49o01aca733b4ff";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
  cityElement.innerHTML = city;
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0 ${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeInput);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
