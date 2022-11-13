import MAPBOX_PK from '/js/config.js';

mapboxgl.accessToken = 'pk.eyJ1IjoicmFwaDU5IiwiYSI6ImNsYWY3bHRxcTA4dTEzeG83ZjB2bzkwYmUifQ.Ye2p9OAgykrdKe0fLWSN7A';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/raph59/claf81h0300bn15n7hevdbfl1', // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  center: [4.840, 45.755], // starting position
  zoom: 11 // starting zoom
});