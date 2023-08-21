import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { useCountryData } from "../action/queryFetch";

interface CountryData {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
  };
  active: number;
  recovered: number;
  deaths: number;
}

const Map: React.FC = () => {
  const { data } = useCountryData();
  const center: [number, number] = [60, 60];
  const zoom: number = 3;
  if (!data) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <h2 className="text-2xl">COVID-19 Map</h2>
      <div className="w-full mt-4 h-[90vh] max-w-screen-xl z-0">
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={false}
          style={{ width: "90%", height: "90%", zIndex: 0 }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {data.map((country: CountryData) => (
            <Marker
              position={[country.countryInfo.lat, country.countryInfo.long]}
              key={country.country}
            >
              <Popup>
                <div>
                  <h3>{country.country}</h3>
                  <p>Active: {country.active}</p>
                  <p>Recovered: {country.recovered}</p>
                  <p>Deaths: {country.deaths}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
