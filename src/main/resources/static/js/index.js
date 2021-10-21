// Elements
const refreshButton = document.getElementById(`refresh-button`);
const latitudeDisplay = document.getElementById(`latitude`);
const longitudeDisplay = document.getElementById(`longitude`);
const accuracyDisplay = document.getElementById(`accuracy`);
const loadingStatus = document.getElementById(`loading`);

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
}

function error(err) {
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
