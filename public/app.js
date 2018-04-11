const initialize = function(){

    const container = document.querySelector('#main-map');
    const center = {lat: 55.8497, lng: -4.2055};
    const zoom = 14;

    const map = new MapWrapper(container, center, zoom);
    map.addMarker(center);

    const home = {lat: 55.841253, lng: -4.3643553};
    map.addMarker(home);

    const benNevis = {lat: 56.7969, lng: -5.0036};
    map.addMarker(benNevis);


    const location = {lat:40.7128, lng: 74.0060};
    const newYork = document.getElementById('newYork');
    newYork.addEventListener('click', map.setCenter(location));


    const bounceButton = document.getElementById('button-bounce-markers');
    bounceButton.addEventListener('click', map.bounceMarkers.bind(map));


    map.addClickEvent();
  }


window.addEventListener("DOMContentLoaded", initialize);
