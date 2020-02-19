const COORDS = "coords";

init();

function init() {
   loadCoords();
}

function loadCoords() {
   const loadedCoords = localStorage.getItem(COORDS);
   if (loadedCoords === null) {
      askForCoords();
   } else {
   }
}

function askForCoords() {
   navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function handleGeoSucces(position) {
   const latitude = position.coords.latitude;
   const longtitude = position.coords.longtitude;
   const coordsObj = {
      latitude: latitude,
      longtitude: longtitude
   };
   saveCoords(coordsObj);
}

function saveCoords(coordsObj) {
   localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoError() {
   console.log("Can't handle Geo Location");
}
