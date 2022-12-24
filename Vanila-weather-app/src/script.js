function newDate(timestamp) {
  let date = new Date();
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesdays",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[date.getDay()];

  return `${day}, ${hour}: ${minutes}`;
}

function displayTemperature(response) {
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let description = document.querySelector("#description");

  description.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");

  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = newDate(response.data.dt * 1000);

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}
function search(city) {
  let apiKey = "93c9302a335ce19bd3e0802426872a43";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemperature);
}

function submitQuery(event) {
  let cityInput = document.querySelector("#search-box");
  search(cityInput.value);
}
search("Lagos");
let form = document.querySelector("#search-form");
form.addEventListener("submit", submitQuery);

function showCelsiusTemp(event) {
  event.prevent.Default();
  let celsiusTemp = document.querySelector("#temp");
  celsiusTemp.innerHTML = response.data.main.temp;
}

function displayFahrenheit(event) {
  event.preventDefault();
  let fahrenheitTemp = Math.round((33 * 9) / 5 + 32);
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = fahrenheitTemp;
}

let fahLink = document.querySelector("#fahrenheit");
fahLink.addEventListener("click", displayFahrenheit);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", showCelsiusTemp);
