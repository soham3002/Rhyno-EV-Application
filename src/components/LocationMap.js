import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const MapWrapper = styled.div`
  height: 500px;
  width: 100%;
`;

const LocationMap = () => {
  const position = [20.395, 72.866]; // Replace with actual location coordinates

  return (
    <MapWrapper>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Rhyno EV Head Office<br /> Near UG hostel gate #2, Behind PDEU,<br /> Raisan, Gandhinagar, Gujarat, India.
          </Popup>
        </Marker>
      </MapContainer>
    </MapWrapper>
  );
};

export default LocationMap;
