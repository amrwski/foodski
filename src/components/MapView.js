import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "./MapView.css"

const MapView = () => {
  return (
    <div>
      <MapContainer center={[52.499, 13.418]} zoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  )
}

export default MapView
