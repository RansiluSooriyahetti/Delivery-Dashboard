import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import CircularProgress from "@mui/material/CircularProgress";

import "./style.css";

export default function Home({
  locations = [{ lat: 6.897948002743019, lng: 79.87243443300454 }],
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

  return <Map locations={locations} zoom={zoom} />;
}

function Map({ locations = [], zoom }) {
  const center = useMemo(
    () => ({ lat: locations[0].lat, lng: locations[0].lng }),
    {}
  );

  return (
    <GoogleMap
      zoom={zoom}
      center={center}
      mapContainerClassName="places-container"
    >
      {locations.map((position) => (
        <MarkerF position={{ lat: position.lat, lng: position.lng }} />
      ))}
    </GoogleMap>
  );
}
