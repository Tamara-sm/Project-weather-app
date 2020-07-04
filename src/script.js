let now = new Date();
let currentDate = document.querySelector("#current-date");

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let date = now.getDate();
let year = now.getFullYear();

let hour = now.getHours();
let min = now.getMinutes();

currentDate.innerHTML = `${day}, ${date}, ${year} <br /> ${hour}:${min}`;

function currentWeather(response) {
  let temp = document.querySelector("h1");
  let h2 = document.querySelector("h2");
  let tempCelsius = Math.round(response.data.main.temp);

  temp.innerHTML = `${response.data.name}`;
  h2.innerHTML = `${tempCelsius}ºC`;
}

// search engine
function search(event) {
  event.preventDefault();

  let currentLocation = document.querySelector("#city-input");
  let apikey = "7617dbfebdf449723a30b5c2d2231c02";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${currentLocation.value}&appid=${apikey}&units=metric`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${currentLocation.value}`;
  axios.get(api).then(currentWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

//api current location
function setPositon(position) {
  let apikey = "7617dbfebdf449723a30b5c2d2231c02";
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}&units=metric`;

  axios.get(api).then(currentWeather);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(setPositon);
}
let button = document.querySelector("#geolocation");
button.addEventListener("click", getCurrentPosition);
