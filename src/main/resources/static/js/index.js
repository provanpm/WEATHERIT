// Elements
const refreshButton = document.getElementById(`refresh-button`);
const latitudeDisplay = document.getElementById(`latitude`);
const longitudeDisplay = document.getElementById(`longitude`);
const accuracyDisplay = document.getElementById(`accuracy`);
const loadingStatus = document.getElementById(`loading`);
const jsonDisplay = document.getElementById(`json`);

let options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0
};

function success(pos) {
  loadingStatus.innerHTML = `Success!`;
  let crd = pos.coords;
  latitudeDisplay.innerHTML = `<b>Latitude:</b> ${crd.latitude}`;
  longitudeDisplay.innerHTML = `<b>Longitude:</b> ${crd.longitude}`;
  accuracyDisplay.innerHTML = `Accuracy: within ${crd.accuracy} meters`;
  
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=imperial&appid=8656dce640c0b11d88c31da21ed3c1fd`)
  .then(function (response) {
	response.json().then(function (data) {
		jsonDisplay.innerHTML = `Temperature at your location in degrees Fahrenheit: ` + data.main.temp;
	})
  })
  .catch(function (err) {
	console.log(err);
    jsonDisplay.innerHTML = `ERROR(${err.code}): ${err.message}`;
  });
}

function error(err) {
	console.log(err);
  loadingStatus.innerHTML = `ERROR(${err.code}): ${err.message}`;
}

refreshButton.addEventListener(`click`, function (event) {
  event.preventDefault();
  latitudeDisplay.innerHTML = `<b>Latitude:</b>`;
  longitudeDisplay.innerHTML = `<b>Longitude:</b>`;
  accuracyDisplay.innerHTML = `Accuracy:`;
  loadingStatus.innerHTML = `Loading ...`;
  navigator.geolocation.getCurrentPosition(success, error, options);
});

loadingStatus.innerHTML = `Loading ...`;
navigator.geolocation.getCurrentPosition(success, error, options);
