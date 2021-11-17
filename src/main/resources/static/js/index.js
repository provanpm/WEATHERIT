// Elements
const refreshButton = document.getElementById(`refresh-button`);
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

  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${crd.latitude}&lon=${crd.longitude}&units=imperial&appid=8656dce640c0b11d88c31da21ed3c1fd`)
  .then(function (response) {
	response.json().then(function (data) {
		jsonDisplay.innerHTML = ``;
		for (let i = 0; i < 8; i++)
		{
            let milliseconds = data.daily[i].dt * 1000;

            let dateObject = new Date(milliseconds)

            let humanDateFormat = dateObject.toLocaleString()

			jsonDisplay.innerHTML += humanDateFormat + ` Max Temperature at your location: ` + data.daily[i].temp.max + ` °F <br>`;
			jsonDisplay.innerHTML += humanDateFormat + ` Min Temperature at your location: ` + data.daily[i].temp.min + ` °F <br>`;
		    jsonDisplay.innerHTML += `<br>`;
		}
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
  jsonDisplay.innerHTML = `Temperature at your location:`;
  loadingStatus.innerHTML = `Loading ...`;
  navigator.geolocation.getCurrentPosition(success, error, options);
});

loadingStatus.innerHTML = `Loading ...`;
navigator.geolocation.getCurrentPosition(success, error, options);
