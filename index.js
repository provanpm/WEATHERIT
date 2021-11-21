const searchButton = document.getElementById(`search-button`);
const statusDisplay = document.getElementById(`status`);
const weekForecastDisplay = document.getElementById(`week-forecast`);
const hourForecastDisplay = document.getElementById(`hour-forecast`);
const locationDisplay = document.getElementById(`location`);
const locationInputLabel = document.getElementById(`location-input-label`);
const locationInput = document.getElementById(`location-input`);
const weekHeading = document.getElementById(`week-heading`);
const hourHeading = document.getElementById(`hour-heading`);
const searchDropdown = document.getElementById(`types`);

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

searchButton.addEventListener(`click`, function (event) {
	event.preventDefault();
	statusDisplay.innerHTML = `Loading ...`;
	weekHeading.innerText = ``;
  	hourHeading.innerText = ``;
  	weekForecastDisplay.innerHTML = ``;
  	hourForecastDisplay.innerHTML = ``;
  	locationDisplay.innerHTML = ``;

  	if (searchDropdown.value == `Current Location`)
  	{
		navigator.geolocation.getCurrentPosition(success, error, options);
  	}
  	else if (searchDropdown.value == `ZIP Code`)
  	{
		loadCoordsFromZip(locationInput.value);
  	}
  	else if (searchDropdown.value == `City Name`)
  	{
		loadCoordsFromCity(locationInput.value);
  	}
});

searchDropdown.onchange = function() {
  	locationInputLabel.innerHTML = searchDropdown.value;
    locationInput.value = ``;
  	locationInput.disabled = false;
  	if (searchDropdown.value == `Current Location`)
  	{
    	locationInput.disabled = true;
  	}
}

let options = {
  	enableHighAccuracy: true,
  	timeout: 10000,
  	maximumAge: 0
};

function success(pos) {
  	let crd = pos.coords;
  	loadForecast(crd.latitude, crd.longitude);
  	loadLocation(crd.latitude, crd.longitude);
}

function error(err) {
  	console.log(err);
  	statusDisplay.innerHTML = `ERROR(${err.code}): ${err.message}`;
}

function loadCoordsFromZip(zipCode) {
	fetch(apiWeatherLocation + `zip=${zipCode}&appid=${key}`)
  	.then(function (response) {
		response.json().then(function (data) {
			if (typeof data.coord !== `undefined`)
			{
				loadForecast(data.coord.lat, data.coord.lon);
  				loadLocation(data.coord.lat, data.coord.lon);
			}
			else
			{
				statusDisplay.innerHTML = `ERROR: Unknown Location`;
			}
		})
  	})
  	.catch(function (err) {
		console.log(err);
    	locationDisplay.innerHTML = `ERROR(${err.code}): ${err.message}`;
  	});
}

function loadCoordsFromCity(cityName) {
	fetch(apiWeatherLocation + `q=${cityName}&appid=${key}`)
  	.then(function (response) {
		response.json().then(function (data) {
			if (typeof data.coord !== `undefined`)
			{
				loadForecast(data.coord.lat, data.coord.lon);
  				locationDisplay.innerHTML = cityName;
			}
			else
			{
				statusDisplay.innerHTML = `ERROR: Unknown Location`;
			}
		})
  	})
  	.catch(function (err) {
		console.log(err);
    	locationDisplay.innerHTML = `ERROR(${err.code}): ${err.message}`;
  	});
}

function loadLocation(latitude, longitude) {
	fetch(apiWeatherLocation + `lat=${latitude}&lon=${longitude}&units=imperial&appid=${key}`)
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

function loadForecast(latitude, longitude) {
	fetch(apiOneCallForecast + `lat=${latitude}&lon=${longitude}&units=imperial&appid=${key}`)
  	.then(function (response) {
		response.json().then(function (data) {
			statusDisplay.innerHTML = `Success!`;
			weekForecastDisplay.innerHTML = ``;
			weekHeading.innerText = `This Week`;
			hourHeading.innerText = `Currently`;
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
				let maxParagraph = `<p>High:<br>${data.daily[i].temp.max} °F</p>`;
				let minParagraph = `<p>Low:<br>${data.daily[i].temp.min} °F</p>`;
				let newForecastItem = dayParagraph + dateParagraph + maxParagraph + minParagraph;

				weekForecastDisplay.innerHTML += `<li class="list-group-item" style="width:12.5%">${newForecastItem}</li>`;
			}
			for (let i = 0; i < data.hourly.length; i++)
			{
				let milliseconds = data.hourly[i].dt * 1000;
            	let dateObject = new Date(milliseconds);
				let hour = dateObject.getHours();
				let suffix = hour >= 12 ? "PM":"AM"
				hour = ((hour + 11) % 12 + 1) + suffix;

				hourForecastDisplay.innerHTML += `<li class="list-group-item">${hour} - - Temperature: ${data.hourly[i].temp} °F - - Feels Like: ${data.hourly[i].feels_like} °F</li>`;
			}
		})
  	})
  	.catch(function (err) {
		console.log(err);
    	weekForecastDisplay.innerHTML = `ERROR(${err.code}): ${err.message}`;
  	});
}
