import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";
import TableauEmbed from "./components/TableauEmbed";


function App() {

  // Initialize variables to store the sum of latitude and longitude
  let sumLatitude = 0;
  let sumLongitude = 0;


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
                    <button
                      type="button"
                      class="btn btn-outline-primary text-center"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TableauEmbed/>
    </div>
  );
}
export default App;
