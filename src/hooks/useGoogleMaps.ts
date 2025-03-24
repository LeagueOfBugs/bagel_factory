import { useState, useCallback } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const position = {
  lat: 42.1082974,
  lng: -75.9377506,
};

const useGoogleMaps = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [zoom, setZoom] = useState(15);
  const [center, setCenter] = useState({
    lat: 42.1082974,
    lng: -75.9377506,
  });
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API || "",
  });

  const onLoad = useCallback(
    function callback(map: google.maps.Map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);

      setMap(map);
      setCenter(map.getCenter()?.toJSON() || position); 
      setZoom(map.getZoom() || 15);
    },
    [center]
  );

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return {
    isLoaded,
    map,
    onLoad,
    onUnmount,
    position,
    zoom,
    center,
  };
};

export default useGoogleMaps;
