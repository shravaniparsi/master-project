import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";
// import L from "leaflet";
// import 'leaflet/dist/leaflet.css';
// import 'leaflet/dist/leaflet.css';

function App() {
  const data = [
    {
      id: "219",
      Station_Name: "Wilson Sonsini Goodrich & Rosati",
      Street_Address: "650 Page Mill Rd",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.42153",
      Longitude: "-122.14477",
    },
    {
      id: "1514",
      Station_Name: "Bank of America - Private Bank",
      Street_Address: "3075B Hansen Way",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.418102",
      Longitude: "-122.142151",
    },
    {
      id: "1662",
      Station_Name: "660 Stanford Shopping Center",
      Street_Address: "660 Stanford Shopping Center",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.44149",
      Longitude: "-122.171113",
    },
    {
      id: "1776",
      Station_Name: "Stanford Shopping Center - Tesla Supercharger",
      Street_Address: "660 Stanford Shopping Center",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.441734",
      Longitude: "-122.170202",
    },
    {
      id: "2143",
      Station_Name: "Stanford Shopping Center",
      Street_Address: "660 Stanford Shopping Center",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.44208",
      Longitude: "-122.16977",
    },
    {
      id: "2767",
      Station_Name: "SIMON STANFORD CTR 2",
      Street_Address: "699 Stanford Shopping Center",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.442386",
      Longitude: "-122.170447",
    },
    {
      id: "3198",
      Station_Name: "HPI PALO ALTO B6L 2",
      Street_Address: "3126-3202 Hanover St",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.411886",
      Longitude: "-122.145853",
    },
    {
      id: "3226",
      Station_Name: "PMH CHARGEPOINT 1841 STATION 3",
      Street_Address: "1841 Page Mill Rd",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.406478",
      Longitude: "-122.153283",
    },
    {
      id: "3272",
      Station_Name: "FHC EV STATION 1",
      Street_Address: "4005 Miranda Ave",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.401085",
      Longitude: "-122.137162",
    },
    {
      id: "3320",
      Station_Name: "PMH CHARGEPOINT 1801 STATION 2",
      Street_Address: "1801 Page Mill Rd",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.407694",
      Longitude: "-122.154126",
    },
    {
      id: "3321",
      Station_Name: "PMH CHARGEPOINT 1881 STATION 2",
      Street_Address: "1881 Page Mill Rd",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.40644",
      Longitude: "-122.154478",
    },
    {
      id: "3459",
      Station_Name: "CTS CHARGEPOINT CLOCKTOWER 1",
      Street_Address: "630 Hansen Way",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.419447",
      Longitude: "-122.139793",
    },
    {
      id: "3743",
      Station_Name: "1400 PAGE MILL CARPORT 1",
      Street_Address: "1400 Page Mill Rd",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.416813",
      Longitude: "-122.148878",
    },
    {
      id: "3960",
      Station_Name: "HPI PALO ALTO B5U 3",
      Street_Address: "3204 Hanover St",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.410581",
      Longitude: "-122.1469",
    },
    {
      id: "3961",
      Station_Name: "HPI PALO ALTO B6L 1",
      Street_Address: "3126 Hanover St",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.411932",
      Longitude: "-122.145879",
    },
    {
      id: "4283",
      Station_Name: "CTS CHARGEPOINT STATION 3",
      Street_Address: "600 Hansen Way",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.4203",
      Longitude: "-122.139305",
    },
    {
      id: "5934",
      Station_Name: "PMH CHARGEPOINT 1881 STATION 1",
      Street_Address: "1891 Page Mill Rd",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.406544",
      Longitude: "-122.15449",
    },
    {
      id: "6602",
      Station_Name: "PMH CHARGEPOINT 1841 STATION 1",
      Street_Address: "1841 Page Mill Rd",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.4069",
      Longitude: "-122.152956",
    },
    {
      id: "6603",
      Station_Name: "PMH CHARGEPOINT 1841 STATION 2",
      Street_Address: "1841 Page Mill Rd",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.406862",
      Longitude: "-122.152995",
    },
    {
      id: "6672",
      Station_Name: "FHC EV STATION 2",
      Street_Address: "4005 Miranda Ave",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.401051",
      Longitude: "-122.137143",
    },
    {
      id: "6687",
      Station_Name: "LPCH MAIN EV 14 15",
      Street_Address: "725 Welch Rd",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.436315",
      Longitude: "-122.173115",
    },
    {
      id: "6688",
      Station_Name: "LPCH MAIN EV 12 & 13",
      Street_Address: "725 Welch Rd",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.436292",
      Longitude: "-122.173112",
    },
    {
      id: "6689",
      Station_Name: "LPCH MAIN EV 17 & 18",
      Street_Address: "725 Welch Rd",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.436275",
      Longitude: "-122.173114",
    },
    {
      id: "6690",
      Station_Name: "LPCH MAIN EV 22",
      Street_Address: "725 Welch Rd",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.43622",
      Longitude: "-122.173116",
    },
    {
      id: "6691",
      Station_Name: "LPCH MAIN EV 16",
      Street_Address: "725 Welch Rd",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.436338",
      Longitude: "-122.173117",
    },
    {
      id: "6692",
      Station_Name: "LPCH MAIN EV 20 & 21",
      Street_Address: "725 Welch Rd",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.436238",
      Longitude: "-122.173114",
    },
    {
      id: "6693",
      Station_Name: "LPCH MAIN EV 19",
      Street_Address: "725 Welch Rd",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.436256",
      Longitude: "-122.173113",
    },
    {
      id: "6776",
      Station_Name: "PMH CHARGEPOINT 1801 STATION 1",
      Street_Address: "1801 Page Mill Rd",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.407648",
      Longitude: "-122.154153",
    },
    {
      id: "7022",
      Station_Name: "CTS CHARGEPOINT CLOCKTOWER 2",
      Street_Address: "630 Hansen Way",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.4195",
      Longitude: "-122.139728",
    },
    {
      id: "7809",
      Station_Name: "CTS CHARGEPOINT STATION 4",
      Street_Address: "600 Hansen Way",
      City: "Palo Alto",
      State: "CA",
      ZIP: "94304",
      Latitude: "37.420277",
      Longitude: "-122.13924",
    },
  ];

  const mapData = data.map((d) => [d.Latitude, d.Longitude]);

  // Initialize variables to store the sum of latitude and longitude
  let sumLatitude = 0;
  let sumLongitude = 0;

  // Loop through the data and sum up latitude and longitude
  for (const location of data) {
    sumLatitude += parseFloat(location.Latitude);
    sumLongitude += parseFloat(location.Longitude);
  }

  // Calculate the average latitude and longitude
  const averageLatitude = sumLatitude / data.length;
  const averageLongitude = sumLongitude / data.length;

  return (
    <div>
      <nav class="navbar bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Heading
          </a>
        </div>
      </nav>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Github
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="main-content">
        <div class="container ">
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <div class="search-form animate__animated animate__fadeIn">
                <p>
                  Enter your pincode below to predict future charging station
                  locations
                </p>
                <form>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Pincode"
                      aria-label="Enter Pincode"
                      aria-describedby="search-button"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <label for="customRange3" class="form-label">
                      Example range
                    </label>
                    <input
                      type="range"
                      className="form-range slider"
                      min="0"
                      max="1"
                      step="0.25"
                      id="customRange3"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <button
                      type="button"
                      class="btn btn-outline-primary text-center"
                    >
                      Predict
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-container flex flex-column">
        <div className="mt-2" style={{ display: "flex" }}>
          <MapContainer
            center={[averageLatitude, averageLongitude]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ width: "70%", height: "600px" }}
          >
            <TileLayer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {mapData.map((point, i) => {
              return (
                <Marker position={point}>
                  <Popup>
                    <p>Latitude:{data[i].Latitude}</p>
                    <p>Longitude:{data[i].Longitude}</p>
                    <p>name:{data[i].Street_Address}</p>
                  </Popup>
                </Marker>
              );
            })}
            <Marker position={[94304, 37.42153]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
          <div style={{ width: "30%", backgroundColor: "#0D1C30" }}>
            <div class="row p-5">
              <p className="text-info fw-bold">Summary</p>
              <p className="text-primary fw-bold">
                Total number of Predictions: xx
              </p>
              <p className="text-success fw-bold">
                Total number of Strong Predictions: xx
              </p>
              <p className="text-danger fw-bold">
                Total number of Weak Predictions: xx
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;