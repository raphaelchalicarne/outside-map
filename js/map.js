mapboxgl.accessToken = ENV['MAPBOX_PK'];
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/raph59/claf81h0300bn15n7hevdbfl1', // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  center: [4.840, 45.755], // starting position
  zoom: 11 // starting zoom
});