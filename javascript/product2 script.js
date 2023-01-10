
mapboxgl.accessToken = 'pk.eyJ1IjoiaHV5c2ljMTIiLCJhIjoiY2w0cXB2ZW02MDU4eDNiazJyc2cxdm40MSJ9.kyXofvp1PNy_IehIJ82MCg';
const map = new mapboxgl.Map({
    container: 'map', // Container ID
    style: 'mapbox://styles/mapbox/streets-v11', // Map style to use
    center: [108.20344, 16.05558], // Starting position [lng, lat]
    zoom: 12 // Starting zoom level
});

const marker = new mapboxgl.Marker() // Initialize a new marker
    .setLngLat([108.22123, 16.06094]) // Marker [lng, lat] coordinates
    .addTo(map); // Add the marker to the map

const geocoder = new MapboxGeocoder({
    // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: false, // Do not use the default marker style
    placeholder: 'Search for places in DaNang', // Placeholder text for the search bar
    bbox: [-122.30937, 37.84214, -122.23715, 37.89838], // Boundary for Berkeley
    proximity: {
        longitude: -122.25948,
        latitude: 37.87221
    } // Coordinates of UC Berkeley
});

// Add the geocoder to the map
map.addControl(geocoder);

// After the map style has loaded on the page,
// add a source layer and default styling for a single point
map.on('load', () => {
    map.addSource('single-point', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': []
        }
    });

    map.addLayer({
        'id': 'point',
        'source': 'single-point',
        'type': 'circle',
        'paint': {
            'circle-radius': 10,
            'circle-color': '#448ee4'
        }
    });

    // Listen for the `result` event from the Geocoder // `result` event is triggered when a user makes a selection
    //  Add a marker at the result's coordinates
    geocoder.on('result', (event) => {
        map.getSource('single-point').setData(event.result.geometry);
    });
});

