"use client";
import React from "react";
import { GoogleMap } from "@react-google-maps/api";
import useGoogleMaps from "@/hooks/useGoogleMaps";

const containerStyle = {
  width: "100%",
  height: "100%",
};

function Map() {
  const { isLoaded, onLoad, onUnmount, zoom, center } = useGoogleMaps();

  if (!isLoaded) {
    return <p>Loading map...</p>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    ></GoogleMap>
  );
}

export default Map;
