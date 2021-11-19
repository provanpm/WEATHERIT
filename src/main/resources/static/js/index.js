// Elements
const searchButton = document.getElementById(`search-button`);
const statusDisplay = document.getElementById(`status`);
const forecastDisplay = document.getElementById(`forecast`);
const locationDisplay = document.getElementById(`location`);

const key = `8656dce640c0b11d88c31da21ed3c1fd`;
const apiWeatherLocation = `https://api.openweathermap.org/data/2.5/weather?`;
const apiOneCallForecast = `https://api.openweathermap.org/data/2.5/onecall?`;
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0
};

function success(pos) {
  statusDisplay.innerHTML = `Success!`;
  let crd = pos.coords;
  loadForecast(crd);
  loadLocation(crd);
}

function error(err) {
	console.log(err);
  statusDisplay.innerHTML = `ERROR(${err.code}): ${err.message}`;
}

function loadLocation(crd) {
	fetch(apiWeatherLocation + `lat=${crd.latitude}&lon=${crd.longitude}&units=imperial&appid=${key}`)
  .then(function (response) {
	response.json().then(function (data) {
		locationDisplay.innerHTML = data.name;
	})
  })
  .catch(function (err) {
	console.log(err);
    locationDisplay.innerHTML = `ERROR(${err.code}): ${err.message}`;
  });
}

function loadForecast(crd) {
	fetch(apiOneCallForecast + `lat=${crd.latitude}&lon=${crd.longitude}&units=imperial&appid=${key}`)
  .then(function (response) {
	response.json().then(function (data) {
		forecastDisplay.innerHTML = ``;
		for (let i = 0; i < data.daily.length; i++)
		{
            let milliseconds = data.daily[i].dt * 1000;
            let dateObject = new Date(milliseconds);
			let month = dateObject.getMonth() + 1;
			let day = dateObject.getDate();
			let year = dateObject.getFullYear();
			let DayOfWeek = weekday[dateObject.getDay()];
            let humanDateFormat = month + '/' + day + '/' + year;

			let dayParagraph = `<p>${DayOfWeek}</p>`
			let dateParagraph = `<p>${humanDateFormat}</p>`;
			let maxParagraph = `<p>Max Temp:<br>${data.daily[i].temp.max} °F</p>`;
			let minParagraph = `<p>Min Temp:<br>${data.daily[i].temp.min} °F</p>`;
			let newForecastItem = dayParagraph + dateParagraph + maxParagraph + minParagraph;

			forecastDisplay.innerHTML += `<li class="list-group-item">${newForecastItem}</li>`;
		}
	})
  })
  .catch(function (err) {
	console.log(err);
    forecastDisplay.innerHTML = `ERROR(${err.code}): ${err.message}`;
  });
}

searchButton.addEventListener(`click`, function (event) {
  event.preventDefault();
  statusDisplay.innerHTML = `Loading ...`;
  navigator.geolocation.getCurrentPosition(success, error, options);
});
