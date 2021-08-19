function geoFindMe() {  
  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';
  
  function success(position) {
    const { latitude, longitude } = position.coords

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = 'Não foi possível encontrar sua localização';
  }

  if(!navigator.geolocation) {
    status.textContent = 'Geolocalização não é suportada em seu navegador';
  } else {
    status.textContent = 'Localizando…';
    // obtem posição atual
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector('#find-me').addEventListener('click', geoFindMe);