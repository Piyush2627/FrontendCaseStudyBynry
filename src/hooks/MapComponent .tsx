import { useEffect, useRef } from "react";
import { useState } from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

interface MapComponentProps {
  address: string;
}

export const geocodeAddress = async (address: string) => {
  const apiKey = "AIzaSyAbXiBIUeSDzEulTOUZf4N24SeyUQf8c3c";
  const encodedAddress = encodeURIComponent(address);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch geocoding data");
    }
    const data = await response.json();
    console.log("Geocoding API response:", data);

    if (data.status !== "OK") {
      throw new Error(`Geocoding failed: ${data.status}`);
    }

    const { lat, lng } = data.results[0].geometry.location;
    return { lat, lng };
  } catch (error) {
    console.error("Error geocoding address:", error);
    return null;
  }
};

const MapComponent = ({ address }: MapComponentProps) => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const mapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (address) {
      geocodeAddress(address).then((coords) => {
        if (coords) {
          setCoordinates(coords);
        }
      });
    }
  }, [address]);

  useEffect(() => {
    if (mapRef.current && coordinates.lat !== 0 && coordinates.lng !== 0) {
      if (google.maps.marker && google.maps.marker.AdvancedMarkerElement) {
        const marker = new google.maps.marker.AdvancedMarkerElement({
          map: mapRef.current,
          position: coordinates,
          title: "Location",
        });

        marker.addListener("click", () => {
          console.log("Marker clicked!");
        });
      }
    }
  }, [coordinates]);

  return (
    <APIProvider apiKey={"AIzaSyAbXiBIUeSDzEulTOUZf4N24SeyUQf8c3c"}>
      <div style={{ height: "400px", width: "100%" }}>
        <Map zoom={16} center={coordinates} mapId={"a1f246cd49955833"}>
          <AdvancedMarker position={coordinates}></AdvancedMarker>
        </Map>
      </div>{" "}
    </APIProvider>
  );
};

export default MapComponent;
