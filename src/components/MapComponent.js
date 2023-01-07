import React from "react";
import { useMemo } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "./MapComponent.css";

const MapComponent = ({ coordinates }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GMAPS_API_KEY,
  });
  let center = useMemo(
    () => ({ lat: Number(coordinates.lat), lng: Number(coordinates.lng) }),[]);

  if (!isLoaded || loadError)
    return (
      <div className="map-component-error">
        <p>Unable to Show map</p>
      </div>
    );
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="map-component"
    ></GoogleMap>
  );
}

export default MapComponent;
