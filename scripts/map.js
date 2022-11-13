mapboxgl.accessToken = 'pk.eyJ1IjoicmFwaDU5IiwiYSI6ImNsYWY3bHRxcTA4dTEzeG83ZjB2bzkwYmUifQ.Ye2p9OAgykrdKe0fLWSN7A';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/examples/cke97f49z5rlg19l310b7uu7j', // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  center: [41, 21], // starting position
  zoom: 3 // starting zoom
});