mapboxgl.accessToken = 'pk.eyJ1IjoiaHV5c2ljMTIiLCJhIjoiY2w0cXB2ZW02MDU4eDNiazJyc2cxdm40MSJ9.kyXofvp1PNy_IehIJ82MCg';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [108.21055, 16.07479],
    zoom: 8
});

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
    .setLngLat([12.554729, 55.70651])
    .addTo(map);

// Create a default Marker, colored black, rotated 45 degrees.
const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
    .setLngLat([12.65147, 55.608166])
    .addTo(map);





