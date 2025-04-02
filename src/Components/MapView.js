import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {Icon} from "leaflet"

// Define a custom location marker icon
const locationIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/2776/2776067.png', // Example location pin icon
  iconSize: [32, 32], // Adjust size
  iconAnchor: [16, 32], // Center the icon
  popupAnchor: [0, -32]
});

const MapView = ({ location }) => {
  if (!location) return <p>Select a profile to view location.</p>;

  return (
    <MapContainer center={[location.lat, location.lng]} zoom={13} style={{ height: "300px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[location.lat, location.lng]} icon={locationIcon}>
        <Popup>Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
