import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import CircularProgress from "@mui/material/CircularProgress";

import "./style.css";

export default function Home({
  pickupLocations = [{ lat: 6.897948002743019, lng: 79.87243443300454 }],
  deliveryLocations = [{ lat: 6.8979480027, lng: 79.872434433 }],
  zoom = 12,
}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAX6PjdLlNxb475xQsiGIdDsmvyGpWgqDc",
  });

  if (!isLoaded)
    return (
      <div>
        <CircularProgress />
      </div>
    );

  return (
    <Map
      pickupLocations={pickupLocations}
      deliveryLocations={deliveryLocations}
      zoom={zoom}
    />
  );
}

function Map({ pickupLocations, deliveryLocations, zoom }) {
  const center = useMemo(
    () => ({ lat: 6.897948002743019, lng: 79.87243443300454 }),
    {}
  );

  return (
    <GoogleMap
      zoom={zoom}
      center={center}
      mapContainerClassName="places-container"
    >
      {pickupLocations &&
        pickupLocations.map((position) => (
          <MarkerF
            position={{ lat: position.lat, lng: position.lng }}
            icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
          />
        ))}
      {deliveryLocations &&
        deliveryLocations.map((position) => (
          <MarkerF
            position={{ lat: position.lat, lng: position.lng }}
            icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
          />
        ))}
    </GoogleMap>
  );
}
