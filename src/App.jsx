import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";
import TableauEmbed from "./components/TableauEmbed";
import { useState } from "react";
import StationOwner from "./components/StationOwner";
import Location from "./components/Location";
import About from "./components/About";
import ContactUs from "./components/Contact";
import L from "leaflet";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";

function App() {
  const data_94306 = [
    {
      Station_Name: "ProjectGreenHome.org",
      Street_Address: "314 Stanford Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 3,
      EV_Level2_2022: 16,
      EV_Level2_2023: 19,
      EV_Level2_2024: 31,
      EV_Level2_2025: 48,
      Latitude: 37.430039,
      Longitude: -122.147944,
      ConnectionType: "CHAdeMO; CCS (Type 1);",
    },
    {
      Station_Name: "Unitarian Universalist Church",
      Street_Address: "505 E Charleston Rd",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 1,
      EV_Level2_2022: 11,
      EV_Level2_2023: 13,
      EV_Level2_2024: 14,
      EV_Level2_2025: 24,
      Latitude: 37.419672,
      Longitude: -122.112723,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "Kehilat Etz Chayim",
      Street_Address: "4161 Alma St",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 4,
      EV_Level2_2022: 21,
      EV_Level2_2023: 22,
      EV_Level2_2024: 35,
      EV_Level2_2025: 60,
      Latitude: 37.411463,
      Longitude: -122.111947,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "Volvo Palo Alto",
      Street_Address: "4190 CA-82",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 4,
      EV_Level2_2022: 19,
      EV_Level2_2023: 21,
      EV_Level2_2024: 34,
      EV_Level2_2025: 66,
      Latitude: 37.410461,
      Longitude: -122.123978,
      ConnectionType: "NACS / Tesla Supercharger;",
    },
    {
      Station_Name: "Henry M. Gunn High School",
      Street_Address: "780 Arastradero Rd",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 14,
      EV_Level2_2022: 48,
      EV_Level2_2023: 62,
      EV_Level2_2024: 105,
      EV_Level2_2025: 200,
      Latitude: 37.40269,
      Longitude: -122.133148,
      ConnectionType: "CCS (Type 1);",
    },
    {
      Station_Name: "New Station - Palo Alto",
      Street_Address: "690 San Antonio Rd",
      Type: "new",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: "",
      EV_Level2_2022: 7,
      EV_Level2_2023: 9,
      EV_Level2_2024: 14,
      EV_Level2_2025: 24,
      Latitude: 37.415444,
      Longitude: -122.103178,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "Hilton Garden Inn",
      Street_Address: "4216 El Camino Real",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 4,
      EV_Level2_2022: 19,
      EV_Level2_2023: 23,
      EV_Level2_2024: 36,
      EV_Level2_2025: 60,
      Latitude: 37.409477,
      Longitude: -122.123237,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "Magic Inc",
      Street_Address: "373 Oxford Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 1,
      EV_Level2_2022: 6,
      EV_Level2_2023: 12,
      EV_Level2_2024: 16,
      EV_Level2_2025: 26,
      Latitude: 37.428427,
      Longitude: -122.146851,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "Creekside Inn Hotel - Tesla Destination",
      Street_Address: "3400 El Camino Real",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 12,
      EV_Level2_2023: 15,
      EV_Level2_2024: 20,
      EV_Level2_2025: 39,
      Latitude: 37.418651,
      Longitude: -122.135119,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "Hilton Garden Inn Palo Alto - Tesla Destination",
      Street_Address: "4216 El Camino Real",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 3,
      EV_Level2_2022: 14,
      EV_Level2_2023: 20,
      EV_Level2_2024: 28,
      EV_Level2_2025: 50,
      Latitude: 37.409314,
      Longitude: -122.123068,
      ConnectionType: "CCS (Type 1);",
    },
    {
      Station_Name:
        "Dinah's Garden Hotel & Poolside Restaurant - Tesla Destination",
      Street_Address: "4261 El Camino Real",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 9,
      EV_Level2_2023: 15,
      EV_Level2_2024: 22,
      EV_Level2_2025: 33,
      Latitude: 37.407771,
      Longitude: -122.120076,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "Homewood Suites by Hilton Palo Alto - Tesla Destination",
      Street_Address: "4329 El Camino Real",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 6,
      EV_Level2_2022: 24,
      EV_Level2_2023: 34,
      EV_Level2_2024: 48,
      EV_Level2_2025: 91,
      Latitude: 37.405664,
      Longitude: -122.118794,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "New Station - Palo Alto",
      Street_Address: "3251 Hanover St",
      Type: "new",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: "",
      EV_Level2_2022: 32,
      EV_Level2_2023: 48,
      EV_Level2_2024: 76,
      EV_Level2_2025: 143,
      Latitude: 37.4111042,
      Longitude: -122.1433709,
      ConnectionType: "CCS (Type 1);",
    },
    {
      Station_Name: "Park Plaza",
      Street_Address: "195 Page Mill Rd",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 4,
      EV_Level2_2022: 19,
      EV_Level2_2023: 21,
      EV_Level2_2024: 35,
      EV_Level2_2025: 66,
      Latitude: 37.426773,
      Longitude: -122.138618,
      ConnectionType: "CCS (Type 1);",
    },
    {
      Station_Name: "ProjectGreenHome.org",
      Street_Address: "314 Stanford Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: 1,
      Current_Level_2: 1,
      EV_Level2_2022: 10,
      EV_Level2_2023: 14,
      EV_Level2_2024: 14,
      EV_Level2_2025: 24,
      Latitude: 37.430039,
      Longitude: -122.147944,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO PLACE EV1",
      Street_Address: "565 Arastradero Rd",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 1,
      EV_Level2_2022: 11,
      EV_Level2_2023: 14,
      EV_Level2_2024: 17,
      EV_Level2_2025: 20,
      Latitude: 37.408856,
      Longitude: -122.124144,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "693 ARASTRADERO STATION 1",
      Street_Address: "693 Arastradero Rd",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 1,
      EV_Level2_2022: 8,
      EV_Level2_2023: 10,
      EV_Level2_2024: 17,
      EV_Level2_2025: 22,
      Latitude: 37.40101,
      Longitude: -122.129312,
      ConnectionType: "CHAdeMO; CCS (Type 1);",
    },
    {
      Station_Name: "PALO ALTO CA TED THOMPSON #3",
      Street_Address: "275 Cambridge Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 10,
      EV_Level2_2023: 13,
      EV_Level2_2024: 22,
      EV_Level2_2025: 36,
      Latitude: 37.428622,
      Longitude: -122.14404,
      ConnectionType: "CCS (Type 1);",
    },
    {
      Station_Name: "PALO ALTO CA CAMBRIDGE #4",
      Street_Address: "475 Cambridge Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 12,
      EV_Level2_2023: 13,
      EV_Level2_2024: 20,
      EV_Level2_2025: 39,
      Latitude: 37.426177,
      Longitude: -122.146037,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "CREEKSIDE INN WELCOME",
      Street_Address: "3400 El Camino Real",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 1,
      EV_Level2_2022: 5,
      EV_Level2_2023: 9,
      EV_Level2_2024: 13,
      EV_Level2_2025: 26,
      Latitude: 37.419188,
      Longitude: -122.135583,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PAS CHARGEPOINT PA SQUARE 2C",
      Street_Address: "3000 El Camino Real",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 10,
      EV_Level2_2023: 14,
      EV_Level2_2024: 24,
      EV_Level2_2025: 39,
      Latitude: 37.420301,
      Longitude: -122.141243,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PAS CHARGEPOINT PA SQUARE 1A",
      Street_Address: "5 Palo Alto Square",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 15,
      EV_Level2_2023: 14,
      EV_Level2_2024: 22,
      EV_Level2_2025: 30,
      Latitude: 37.420514,
      Longitude: -122.141108,
      ConnectionType: "CCS (Type 1);",
    },
    {
      Station_Name: "PAS CHARGEPOINT PA SQUARE 2A",
      Street_Address: "6 Palo Alto Square",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 13,
      EV_Level2_2023: 17,
      EV_Level2_2024: 22,
      EV_Level2_2025: 30,
      Latitude: 37.420186,
      Longitude: -122.141406,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PAS CHARGEPOINT PA SQUARE 1B",
      Street_Address: "5-6 Palo Alto Square",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 15,
      EV_Level2_2023: 14,
      EV_Level2_2024: 21,
      EV_Level2_2025: 33,
      Latitude: 37.420399,
      Longitude: -122.141202,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "Congregation Kol Emeth",
      Street_Address: "4175 Manuela Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 9,
      EV_Level2_2023: 18,
      EV_Level2_2024: 23,
      EV_Level2_2025: 39,
      Latitude: 37.396594,
      Longitude: -122.13288,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA SHERMAN 2",
      Street_Address: "350 Sherman Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 1,
      EV_Level2_2022: 5,
      EV_Level2_2023: 10,
      EV_Level2_2024: 17,
      EV_Level2_2025: 24,
      Latitude: 37.426537,
      Longitude: -122.143338,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA SHERMAN 7",
      Street_Address: "358 Sherman Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 15,
      EV_Level2_2023: 13,
      EV_Level2_2024: 21,
      EV_Level2_2025: 30,
      Latitude: 37.426656,
      Longitude: -122.143414,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "SHPDM LLC STATION 3",
      Street_Address: "2600 El Camino Real",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 1,
      EV_Level2_2022: 8,
      EV_Level2_2023: 14,
      EV_Level2_2024: 15,
      EV_Level2_2025: 22,
      Latitude: 37.423834,
      Longitude: -122.144902,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO PLACE EV2",
      Street_Address: "565 Arastradero Rd",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 1,
      EV_Level2_2022: 8,
      EV_Level2_2023: 12,
      EV_Level2_2024: 16,
      EV_Level2_2025: 24,
      Latitude: 37.408801,
      Longitude: -122.124107,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA TED THOMPSON #4",
      Street_Address: "275 Cambridge Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 10,
      EV_Level2_2023: 16,
      EV_Level2_2024: 24,
      EV_Level2_2025: 33,
      Latitude: 37.428598,
      Longitude: -122.143989,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA TED THOMPSON #2",
      Street_Address: "275 Cambridge Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 10,
      EV_Level2_2023: 16,
      EV_Level2_2024: 21,
      EV_Level2_2025: 36,
      Latitude: 37.428569,
      Longitude: -122.143931,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA TED THOMPSON #1",
      Street_Address: "275 Cambridge Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 9,
      EV_Level2_2023: 18,
      EV_Level2_2024: 24,
      EV_Level2_2025: 33,
      Latitude: 37.428319,
      Longitude: -122.144186,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA CAMBRIDGE #3",
      Street_Address: "475 Cambridge Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 9,
      EV_Level2_2023: 13,
      EV_Level2_2024: 24,
      EV_Level2_2025: 33,
      Latitude: 37.426208,
      Longitude: -122.14601,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA CAMBRIDGE #1",
      Street_Address: "475 Cambridge Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 14,
      EV_Level2_2023: 16,
      EV_Level2_2024: 22,
      EV_Level2_2025: 36,
      Latitude: 37.426155,
      Longitude: -122.146064,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA CAMBRIDGE #2",
      Street_Address: "475 Cambridge Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 13,
      EV_Level2_2023: 18,
      EV_Level2_2024: 21,
      EV_Level2_2025: 39,
      Latitude: 37.42618,
      Longitude: -122.146065,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA CAMBRIDGE #5",
      Street_Address: "475 Cambridge Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 12,
      EV_Level2_2023: 13,
      EV_Level2_2024: 22,
      EV_Level2_2025: 33,
      Latitude: 37.426227,
      Longitude: -122.145977,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "CREEKSIDE INN WELCOME GUEST",
      Street_Address: "3400 El Camino Real",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 1,
      EV_Level2_2022: 10,
      EV_Level2_2023: 12,
      EV_Level2_2024: 14,
      EV_Level2_2025: 24,
      Latitude: 37.419083,
      Longitude: -122.135518,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PAS CHARGEPOINT PA SQUARE 2A",
      Street_Address: "6 Palo Alto Square",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 9,
      EV_Level2_2023: 18,
      EV_Level2_2024: 20,
      EV_Level2_2025: 36,
      Latitude: 37.420247,
      Longitude: -122.141354,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA SHERMAN 7",
      Street_Address: "358 Sherman Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 14,
      EV_Level2_2023: 18,
      EV_Level2_2024: 21,
      EV_Level2_2025: 39,
      Latitude: 37.426774,
      Longitude: -122.143402,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA SHERMAN 8",
      Street_Address: "358 Sherman Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 10,
      EV_Level2_2023: 16,
      EV_Level2_2024: 24,
      EV_Level2_2025: 33,
      Latitude: 37.4268,
      Longitude: -122.143354,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA SHERMAN 3",
      Street_Address: "350 Sherman Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 15,
      EV_Level2_2023: 18,
      EV_Level2_2024: 22,
      EV_Level2_2025: 39,
      Latitude: 37.426597,
      Longitude: -122.143286,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA SHERMAN 2",
      Street_Address: "358 Sherman Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 8,
      EV_Level2_2023: 14,
      EV_Level2_2024: 22,
      EV_Level2_2025: 30,
      Latitude: 37.426718,
      Longitude: -122.143327,
      ConnectionType: "CCS (Type 1);",
    },
    {
      Station_Name: "PALO ALTO CA SHERMAN 1",
      Street_Address: "358 Sherman Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 11,
      EV_Level2_2023: 17,
      EV_Level2_2024: 23,
      EV_Level2_2025: 33,
      Latitude: 37.426642,
      Longitude: -122.143373,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA SHERMAN 4",
      Street_Address: "350 Sherman Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 11,
      EV_Level2_2023: 15,
      EV_Level2_2024: 20,
      EV_Level2_2025: 39,
      Latitude: 37.426619,
      Longitude: -122.143325,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA SHERMAN 5",
      Street_Address: "358 Sherman Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 14,
      EV_Level2_2023: 14,
      EV_Level2_2024: 23,
      EV_Level2_2025: 30,
      Latitude: 37.426584,
      Longitude: -122.143421,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA SHERMAN 6",
      Street_Address: "358 Sherman Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 13,
      EV_Level2_2023: 13,
      EV_Level2_2024: 24,
      EV_Level2_2025: 30,
      Latitude: 37.426615,
      Longitude: -122.143457,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA SHERMAN 9",
      Street_Address: "358 Sherman Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 11,
      EV_Level2_2023: 14,
      EV_Level2_2024: 21,
      EV_Level2_2025: 39,
      Latitude: 37.426725,
      Longitude: -122.143212,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA SHERMAN 10",
      Street_Address: "358 Sherman Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 11,
      EV_Level2_2023: 17,
      EV_Level2_2024: 22,
      EV_Level2_2025: 30,
      Latitude: 37.426752,
      Longitude: -122.143258,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA SHERMAN 11",
      Street_Address: "358 Sherman Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 12,
      EV_Level2_2023: 15,
      EV_Level2_2024: 21,
      EV_Level2_2025: 33,
      Latitude: 37.426778,
      Longitude: -122.143307,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA SHERMAN 12",
      Street_Address: "358 Sherman Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 14,
      EV_Level2_2023: 14,
      EV_Level2_2024: 22,
      EV_Level2_2025: 33,
      Latitude: 37.426747,
      Longitude: -122.143364,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA SHERMAN 13",
      Street_Address: "350 Sherman Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 10,
      EV_Level2_2023: 17,
      EV_Level2_2024: 22,
      EV_Level2_2025: 30,
      Latitude: 37.426563,
      Longitude: -122.143377,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA SHERMAN 14",
      Street_Address: "350 Sherman Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 13,
      EV_Level2_2023: 14,
      EV_Level2_2024: 20,
      EV_Level2_2025: 36,
      Latitude: 37.426669,
      Longitude: -122.143254,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA SHERMAN 15",
      Street_Address: "358 Sherman Ave",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 15,
      EV_Level2_2023: 13,
      EV_Level2_2024: 24,
      EV_Level2_2025: 36,
      Latitude: 37.426821,
      Longitude: -122.143391,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "SHPDM LLC STATION 1",
      Street_Address: "2600 El Camino Real",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 1,
      EV_Level2_2022: 6,
      EV_Level2_2023: 12,
      EV_Level2_2024: 13,
      EV_Level2_2025: 20,
      Latitude: 37.423857,
      Longitude: -122.144895,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "SHPDM LLC STATION 2",
      Street_Address: "2600 El Camino Real",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 13,
      EV_Level2_2023: 17,
      EV_Level2_2024: 23,
      EV_Level2_2025: 30,
      Latitude: 37.42401,
      Longitude: -122.144971,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "SHPDM LLC STATION 3",
      Street_Address: "2600 El Camino Real",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 10,
      EV_Level2_2023: 16,
      EV_Level2_2024: 21,
      EV_Level2_2025: 36,
      Latitude: 37.424055,
      Longitude: -122.144968,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "SHPDM LLC STATION 4",
      Street_Address: "2600 El Camino Real",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 11,
      EV_Level2_2023: 14,
      EV_Level2_2024: 23,
      EV_Level2_2025: 30,
      Latitude: 37.424032,
      Longitude: -122.144928,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "SHPDM LLC STATION 5",
      Street_Address: "2600 El Camino Real",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 11,
      EV_Level2_2023: 17,
      EV_Level2_2024: 23,
      EV_Level2_2025: 39,
      Latitude: 37.42369,
      Longitude: -122.144727,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "SHPDM LLC STATION 6",
      Street_Address: "2600 El Camino Real",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 12,
      EV_Level2_2023: 18,
      EV_Level2_2024: 21,
      EV_Level2_2025: 39,
      Latitude: 37.423662,
      Longitude: -122.144728,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "SHPDM LLC STATION 7",
      Street_Address: "2600 El Camino Real",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 13,
      EV_Level2_2023: 17,
      EV_Level2_2024: 21,
      EV_Level2_2025: 39,
      Latitude: 37.423611,
      Longitude: -122.144624,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "SHPDM LLC STATION 8",
      Street_Address: "2600 El Camino Real",
      Type: "existing",
      ZIP: 94306,
      Fast_Count: "",
      EV_Level1: "",
      Current_Level_2: 2,
      EV_Level2_2022: 11,
      EV_Level2_2023: 18,
      EV_Level2_2024: 22,
      EV_Level2_2025: 36,
      Latitude: 37.423619,
      Longitude: -122.144757,
      ConnectionType: "Type 1 (J1772);",
    },
  ];
  const data_94022 = [
    {
      Station_Name: "PALO ALTO CA / HAMILTON #2",
      Street_Address: "97 Hillview Ave",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: 3.0,
      EV_Level2_2022: 12,
      EV_Level2_2023: 21,
      EV_Level2_2024: 39,
      EV_Level2_2025: 45,
      Latitude: 37.379599,
      Longitude: -122.111861,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "PALO ALTO CA / WEBSTER #1",
      Street_Address: "201 Almond Ave",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: 1.0,
      EV_Level1: null,
      Current_Level_2: 26.0,
      EV_Level2_2022: 104,
      EV_Level2_2023: 182,
      EV_Level2_2024: 338,
      EV_Level2_2025: 390,
      Latitude: 37.385746,
      Longitude: -122.109849,
      ConnectionType: "CHAdeMO; CCS (Type 1);",
    },
    {
      Station_Name: "PALO ALTO CA / WEBSTER #2",
      Street_Address: "4320 El Camino Real",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: 12.0,
      EV_Level2_2022: 48,
      EV_Level2_2023: 84,
      EV_Level2_2024: 156,
      EV_Level2_2025: 180,
      Latitude: 37.40506,
      Longitude: -122.119167,
      ConnectionType: "CCS (Type 1); CHAdeMO;",
    },
    {
      Station_Name: "PALO ALTO CA / HAMILTON #1",
      Street_Address: "26800 Fremont Rd",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: 16.0,
      EV_Level2_2022: 64,
      EV_Level2_2023: 112,
      EV_Level2_2024: 208,
      EV_Level2_2025: 240,
      Latitude: 37.38814845,
      Longitude: -122.1421249,
      ConnectionType: "CHAdeMO; CCS (Type 1);",
    },
    {
      Station_Name: "PALO ALTO CA / HIGH #4",
      Street_Address: "330 Distel Circle",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: 4.0,
      EV_Level2_2022: 16,
      EV_Level2_2023: 28,
      EV_Level2_2024: 52,
      EV_Level2_2025: 60,
      Latitude: 37.396454,
      Longitude: -122.105989,
      ConnectionType: "Unknown;",
    },
    {
      Station_Name: "PALO ALTO CA / BRYANT #2",
      Street_Address: "550 Almond Ave",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: 1.0,
      EV_Level1: null,
      Current_Level_2: 18.0,
      EV_Level2_2022: 72,
      EV_Level2_2023: 126,
      EV_Level2_2024: 234,
      EV_Level2_2025: 270,
      Latitude: 37.384776,
      Longitude: -122.10123,
      ConnectionType: "CCS (Type 1);",
    },
    {
      Station_Name: "PALO ALTO CA / BRYANT #1",
      Street_Address: "100 W Portola Ave",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: 4.0,
      EV_Level1: null,
      Current_Level_2: 26.0,
      EV_Level2_2022: 104,
      EV_Level2_2023: 182,
      EV_Level2_2024: 338,
      EV_Level2_2025: 390,
      Latitude: 37.39641,
      Longitude: -122.117962,
      ConnectionType: "NACS / Tesla Supercharger;",
    },
    {
      Station_Name: "PALO ALTO CA / WEBSTER #3",
      Street_Address: "201 Almond Ave",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: 3.0,
      EV_Level2_2022: 12,
      EV_Level2_2023: 21,
      EV_Level2_2024: 39,
      EV_Level2_2025: 45,
      Latitude: 37.385746,
      Longitude: -122.109849,
      ConnectionType: "Tesla (Model S/X);",
    },
    {
      Station_Name: "PALO ALTO CA / HIGH #1",
      Street_Address: "4800 El Camino Real",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: 16.0,
      EV_Level1: null,
      Current_Level_2: null,
      EV_Level2_2022: 4,
      EV_Level2_2023: 7,
      EV_Level2_2024: 13,
      EV_Level2_2025: 15,
      Latitude: 37.399071,
      Longitude: -122.111216,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "New Station - Palo Alto",
      Street_Address: "988 N San Antonio Rd",
      Type: "new",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: null,
      EV_Level2_2022: 4,
      EV_Level2_2023: 7,
      EV_Level2_2024: 13,
      EV_Level2_2025: 15,
      Latitude: 37.399899,
      Longitude: -122.114673,
      ConnectionType: "CCS (Type 1); CCS (Type 1);",
    },
    {
      Station_Name: "PALO ALTO CA / TED THOMPSON #1",
      Street_Address: "12345 El Monte Rd",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: 2.0,
      EV_Level2_2022: 8,
      EV_Level2_2023: 14,
      EV_Level2_2024: 26,
      EV_Level2_2025: 30,
      Latitude: 37.360118,
      Longitude: -122.130649,
      ConnectionType: "CCS (Type 1);",
    },
    {
      Station_Name: "EDF Innovation Lab Inc",
      Street_Address: "4300 El Camino Real",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: 8.0,
      EV_Level2_2022: 32,
      EV_Level2_2023: 56,
      EV_Level2_2024: 104,
      EV_Level2_2025: 120,
      Latitude: 37.405356,
      Longitude: -122.119776,
      ConnectionType: "CCS (Type 1);",
    },
    {
      Station_Name: "New Station - Palo Alto",
      Street_Address: "Palo Alto",
      Type: "new",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: null,
      EV_Level2_2022: 2,
      EV_Level2_2023: 9,
      EV_Level2_2024: 11,
      EV_Level2_2025: 19,
      Latitude: 37.429079,
      Longitude: -122.12269,
      ConnectionType: "CCS (Type 1); CHAdeMO;",
    },
    {
      Station_Name: "New Station - Palo Alto_1",
      Street_Address: "Stanford",
      Type: "new",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: null,
      EV_Level2_2022: 5,
      EV_Level2_2023: 12,
      EV_Level2_2024: 20,
      EV_Level2_2025: 31,
      Latitude: 37.418195,
      Longitude: -122.156935,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "New Station - Palo Alto_2",
      Street_Address: "25890 Fremont Rd",
      Type: "new",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: 18.0,
      EV_Level2_2022: 72,
      EV_Level2_2023: 126,
      EV_Level2_2024: 234,
      EV_Level2_2025: 270,
      Latitude: 37.381985,
      Longitude: -122.130503,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "Los Altos School District - Santa Rita Elementary School",
      Street_Address: "700 Los Altos Ave",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: 18.0,
      EV_Level2_2022: 72,
      EV_Level2_2023: 126,
      EV_Level2_2024: 234,
      EV_Level2_2025: 270,
      Latitude: 37.394374,
      Longitude: -122.121728,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "LOS ALTOS PLAZA 3B",
      Street_Address: "167 Main St",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: 2.0,
      EV_Level2_2022: 8,
      EV_Level2_2023: 14,
      EV_Level2_2024: 26,
      EV_Level2_2025: 30,
      Latitude: 37.378953,
      Longitude: -122.114678,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "FOOTHILL-DEANZA STATION #1, #2",
      Street_Address: "12345 El Monte Rd",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: 2.0,
      EV_Level2_2022: 8,
      EV_Level2_2023: 14,
      EV_Level2_2024: 26,
      EV_Level2_2025: 30,
      Latitude: 37.359962,
      Longitude: -122.13055,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "FOOTHILL-DEANZA STATION #1, #3",
      Street_Address: "12345 El Monte Rd",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: 1.0,
      EV_Level2_2022: 4,
      EV_Level2_2023: 7,
      EV_Level2_2024: 13,
      EV_Level2_2025: 15,
      Latitude: 37.359932,
      Longitude: -122.130486,
      ConnectionType: "NEMA 14-50;",
    },
    {
      Station_Name: "FOOTHILL-DEANZA STATION #1, #4",
      Street_Address: "12345 El Monte Rd",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: 2.0,
      EV_Level2_2022: 8,
      EV_Level2_2023: 14,
      EV_Level2_2024: 26,
      EV_Level2_2025: 30,
      Latitude: 37.360027,
      Longitude: -122.13058,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "FOOTHILL-DEANZA STATION #1, #5",
      Street_Address: "12345 El Monte Rd",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: 1.0,
      EV_Level2_2022: 4,
      EV_Level2_2023: 7,
      EV_Level2_2024: 13,
      EV_Level2_2025: 15,
      Latitude: 37.36,
      Longitude: -122.13056,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "FOOTHILL-DEANZA STATION #1, #6",
      Street_Address: "12345 El Monte Rd",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: 2.0,
      EV_Level2_2022: 8,
      EV_Level2_2023: 14,
      EV_Level2_2024: 26,
      EV_Level2_2025: 30,
      Latitude: 37.36007,
      Longitude: -122.13061,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "FOOTHILL-DEANZA STATION #1, #7",
      Street_Address: "12345 El Monte Rd",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: 1.0,
      EV_Level2_2022: 4,
      EV_Level2_2023: 7,
      EV_Level2_2024: 13,
      EV_Level2_2025: 15,
      Latitude: 37.358543,
      Longitude: -122.12801,
      ConnectionType: "CHAdeMO; CCS (Type 1);",
    },
    {
      Station_Name: "New Station - Palo Alto_3",
      Street_Address: "26800 Fremont Rd",
      Type: "new",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: null,
      EV_Level2_2022: 8,
      EV_Level2_2023: 14,
      EV_Level2_2024: 26,
      EV_Level2_2025: 30,
      Latitude: 37.377567,
      Longitude: -122.147716,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "LOS ALTOS PLAZA 3B",
      Street_Address: "167 Main St",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: 2.0,
      EV_Level2_2022: 8,
      EV_Level2_2023: 14,
      EV_Level2_2024: 26,
      EV_Level2_2025: 30,
      Latitude: 37.377899,
      Longitude: -122.11804,
      ConnectionType: "Type 1 (J1772);",
    },
    {
      Station_Name: "Whole Foods Los Altos - Tesla Supercharger",
      Street_Address: "4800 El Camino Real",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: 2.0,
      EV_Level1: null,
      Current_Level_2: 1.0,
      EV_Level2_2022: 4,
      EV_Level2_2023: 7,
      EV_Level2_2024: 13,
      EV_Level2_2025: 15,
      Latitude: 37.39896,
      Longitude: -122.11018,
      ConnectionType: "CCS (Type 1);",
    },
    {
      Station_Name: "Hillview Community Center",
      Street_Address: "97 Hillview Ave",
      Type: "existing",
      ZIP: 94022,
      Fast_Count: null,
      EV_Level1: null,
      Current_Level_2: 2.0,
      EV_Level2_2022: 12,
      EV_Level2_2023: 17,
      EV_Level2_2024: 23,
      EV_Level2_2025: 33,
      Latitude: 37.379599,
      Longitude: -122.111861,
      ConnectionType: "CCS (Type 1);",
    },
  ];
  const [data, setData] = useState([]);
  const [mapData, setMapData] = useState([]);
  const [averageLatitude, setAverageLatitude] = useState();
  const [averageLongitude, setAverageLongitude] = useState();
  const inputRef = React.useRef();
  const predict = () => {
    const val = inputRef.current.value.toString();
    if (val.localeCompare("94306") !== 0 && val.localeCompare("94022") !== 0) {
      alert("Please search for other pincode!");
    }
    // Initialize variables to store the sum of latitude and longitude
    let sumLatitude = 0;
    let sumLongitude = 0;
    if (val.localeCompare("94306") === 0) {
      setData(data_94306);
    }
    if (val.localeCompare("94022") === 0) {
      setData(data_94022);
    }
    for (const location of data) {
      sumLatitude += parseFloat(location.Latitude);
      sumLongitude += parseFloat(location.Longitude);
    }

    // Calculate the average latitude and longitude
    const laverageLatitude = sumLatitude / data.length;
    const laverageLongitude = sumLongitude / data.length;
    setAverageLatitude(laverageLatitude);
    setAverageLongitude(laverageLongitude);
    const mapData = data.map((d) => [d.Latitude, d.Longitude]);
    setMapData(mapData);
    window.scrollTo(0, document.body.scrollHeight);
  };

  const [activeTab, setActiveTab] = useState("main");

  const new_icon = L.icon({
    iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png`,
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    shadowAnchor: [12, 41],
  });
  const existing_icon = L.icon({
    iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png`,
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    shadowAnchor: [12, 41],
  });

  const filterChargers = (filter) => {
    const val = inputRef.current.value.toString();
    // Initialize variables to store the sum of latitude and longitude
    let sumLatitude = 0;
    let sumLongitude = 0;
    let filteredData;
    if (val.localeCompare("94306") === 0) {
      filteredData = data_94306.filter(
        (p) => p?.Type.localeCompare(filter) === 0
      );
      setData(filteredData);
    }
    if (val.localeCompare("94022") === 0) {
      filteredData = data_94022.filter(
        (p) => p.Type.localeCompare(filter) === 0
      );
      setData(filteredData);
    }
    for (const location of filteredData) {
      sumLatitude += parseFloat(location.Latitude);
      sumLongitude += parseFloat(location.Longitude);
    }

    // Calculate the average latitude and longitude
    const laverageLatitude = sumLatitude / filteredData.length;
    const laverageLongitude = sumLongitude / filteredData.length;
    setAverageLatitude(laverageLatitude);
    setAverageLongitude(laverageLongitude);
    const mapData = filteredData.map((d) => [d.Latitude, d.Longitude]);
    setMapData(mapData);
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            EV Charging Infrastructure Dashboard
          </a>
        </div>
      </nav>
      <nav className="main-menu">
        <ul>
          <li>
            <a href="/">
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">Home</span>
            </a>
          </li>
          <li className="has-subnav">
            <button className="nav-link">
              <i className="fa fa-globe fa-2x"></i>
              <span
                className="nav-text"
                onClick={() => {
                  setActiveTab("dashboard");
                }}
              >
                Infrastructure Dashboard
              </span>
            </button>
          </li>
          <li className="has-subnav">
            <button
              className="nav-link"
              onClick={() => {
                setActiveTab("StationOwner");
              }}
            >
              <i className="fa fa-comments fa-2x"></i>
              <span className="nav-text">Station Dashboard</span>
            </button>
          </li>
          <li className="has-subnav">
            <button
              className="nav-link"
              onClick={() => {
                setActiveTab("Location");
              }}
            >
              <i className="fa fa-comments fa-2x"></i>
              <span className="nav-text">City Dashboard</span>
            </button>
          </li>
          <li className="has-subnav">
            <a
              href="https://github.com/shravaniparsi/master-project"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-camera-retro fa-2x"></i>
              <span className="nav-text">Github</span>
            </a>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => {
                setActiveTab("about");
              }}
            >
              <i className="fa fa-film fa-2x"></i>
              <span className="nav-text">About us</span>
            </button>
          </li>
          <li>
          <button
              className="nav-link"
              onClick={() => {
                setActiveTab("contact");
              }}
            >
              <i className="fa fa-book fa-2x"></i>
              <span className="nav-text">Contact us</span>
            </button>
          </li>
        </ul>

        <ul className="logout">
          <li>
            <a href="#">
              <i className="fa fa-power-off fa-2x"></i>
              <span className="nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      {activeTab === "main" && (
        <>
          <div className="main-content">
            <div className="container ">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <div className="search-form animate__animated animate__fadeIn">
                    <p>
                      Enter your City below to predict future charging station
                      locations
                    </p>
                    <form>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter City"
                          aria-label="Enter City"
                          aria-describedby="search-button"
                          ref={inputRef}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <button
                          type="button"
                          className="btn btn-outline-primary text-center"
                          onClick={() => predict()}
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
            {mapData.length && (
              <div className="mt-2" style={{ display: "flex" }}>
                <MapContainer
                  center={[averageLatitude, averageLongitude]}
                  zoom={13}
                  scrollWheelZoom={true}
                  style={{ width: "70%", height: "600px" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {mapData.map((point, i) => {
                    return (
                      <Marker
                        position={point}
                        icon={
                          data[i].Type.localeCompare("new")
                            ? new_icon
                            : existing_icon
                        }
                      >
                        https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-2x-green.png
                        <Popup style={{ width: "500px" }}>
                          <table>
                            {data[i].Station_Name ? (
                              <tr>
                                <td>
                                  <b>Station Name:</b>
                                </td>
                                <td style={{ paddingLeft: "10px" }}>
                                  {data[i].Station_Name}
                                </td>
                              </tr>
                            ) : (
                              ""
                            )}
                            {data[i].Street_Address ? (
                              <tr>
                                <td>
                                  <b>Street Address:</b>
                                </td>
                                <td style={{ paddingLeft: "10px" }}>
                                  {data[i].Street_Address}
                                </td>
                              </tr>
                            ) : (
                              ""
                            )}
                            {data[i].ZIP ? (
                              <tr>
                                <td>
                                  <b>ZIP:</b>
                                </td>
                                <td style={{ paddingLeft: "10px" }}>
                                  {data[i].ZIP}
                                </td>
                              </tr>
                            ) : (
                              ""
                            )}
                            {data[i].Type ? (
                              <tr>
                                <td>
                                  <b>Type:</b>
                                </td>
                                <td style={{ paddingLeft: "10px" }}>
                                  {data[i].Type}
                                </td>
                              </tr>
                            ) : (
                              ""
                            )}
                            {data[i].EV_Level1 ? (
                              <tr>
                                <td>
                                  <b>No of Current Level 1 Chargers:</b>
                                </td>
                                <td style={{ paddingLeft: "10px" }}>
                                  {data[i].EV_Level1}
                                </td>
                              </tr>
                            ) : (
                              ""
                            )}
                            {data[i].Current_Level_2 ? (
                              <tr>
                                <td>
                                  <b>No of Current Level 2 Chargers:</b>
                                </td>
                                <td style={{ paddingLeft: "10px" }}>
                                  {data[i].Current_Level_2}
                                </td>
                              </tr>
                            ) : (
                              ""
                            )}
                            {data[i].ConnectionType ? (
                              <tr>
                                <td>
                                  <b>Connection Type:</b>
                                </td>
                                <td style={{ paddingLeft: "10px" }}>
                                  {data[i].ConnectionType}
                                </td>
                              </tr>
                            ) : (
                              ""
                            )}
                          </table>
                          <table style={{ marginTop: "10px" }}>
                            <tr>
                              <td>
                                <b style={{ fontSize: "20px" }}>Predictions:</b>
                              </td>
                            </tr>
                            {data[i].EV_Level2_2023 ? (
                              <div
                                style={{
                                  display: "flex",
                                  transition: "width 0.5s",
                                  alignItems: "center",
                                  marginBottom: "10px",
                                }}
                              >
                                <div
                                  style={{ marginRight: "5px", width: "200px" }}
                                >
                                  <b style={{ color: "green" }}>
                                    Future no of EV Stations-2023:
                                  </b>
                                </div>
                                <div
                                  style={{
                                    flexGrow: 1,
                                    backgroundColor: "lightgrey",
                                    height: "20px",
                                    position: "relative",
                                    width: "300px",
                                  }}
                                >
                                  <div
                                    style={{
                                      height: "20px",
                                      backgroundColor: "green",
                                      width: `20%`,
                                      position: "absolute",
                                      left: 0,
                                      top: 0,
                                    }}
                                  >
                                    <span
                                      style={{
                                        position: "absolute",
                                        width: "100%",
                                        top: "50%",
                                        left: 0,
                                        transform: "translateY(-50%)",
                                        textAlign: "center",
                                        color: "white",
                                      }}
                                    >
                                      {data[i].EV_Level2_2023}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                            {data[i].EV_Level2_2024 ? (
                              <div
                                style={{
                                  display: "flex",
                                  transition: "width 0.5s",
                                  alignItems: "center",
                                  marginBottom: "10px",
                                }}
                              >
                                <div
                                  style={{ marginRight: "5px", width: "200px" }}
                                >
                                  <b style={{ color: "blue" }}>
                                    Future no of EV Stations-2024:
                                  </b>
                                </div>
                                <div
                                  style={{
                                    flexGrow: 1,
                                    backgroundColor: "lightgrey",
                                    height: "20px",
                                    position: "relative",
                                    width: "300px",
                                  }}
                                >
                                  <div
                                    style={{
                                      height: "20px",
                                      backgroundColor: "blue",
                                      width: `50%`,
                                      position: "absolute",
                                      left: 0,
                                      top: 0,
                                    }}
                                  >
                                    <span
                                      style={{
                                        position: "absolute",
                                        width: "100%",
                                        top: "50%",
                                        left: 0,
                                        transform: "translateY(-50%)",
                                        textAlign: "center",
                                        color: "white",
                                      }}
                                    >
                                      {data[i].EV_Level2_2024}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                            {data[i].EV_Level2_2025 ? (
                              <div
                                style={{
                                  display: "flex",
                                  transition: "width 0.5s",
                                  alignItems: "center",
                                  marginBottom: "10px",
                                }}
                              >
                                <div
                                  style={{ marginRight: "5px", width: "200px" }}
                                >
                                  <b style={{ color: "red" }}>
                                    Future no of EV Stations-2025:
                                  </b>
                                </div>
                                <div
                                  style={{
                                    flexGrow: 1,
                                    backgroundColor: "lightgrey",
                                    height: "20px",
                                    position: "relative",
                                    width: "300px",
                                  }}
                                >
                                  <div
                                    style={{
                                      height: "20px",
                                      backgroundColor: "red",
                                      width: `75%`,
                                      position: "absolute",
                                      left: 0,
                                      top: 0,
                                    }}
                                  >
                                    <span
                                      style={{
                                        position: "absolute",
                                        width: "100%",
                                        top: "50%",
                                        left: 0,
                                        transform: "translateY(-50%)",
                                        textAlign: "center",
                                        color: "white",
                                      }}
                                    >
                                      {data[i].EV_Level2_2025}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </table>
                        </Popup>
                      </Marker>
                    );
                  })}
                </MapContainer>
                <div style={{ width: "30%", backgroundColor: "#0D1C30" }}>
                  <div className="row p-5">
                    <table
                      style={{
                        fontSize: "18px",
                        padding: "10px",
                        margin: "0",
                        width: "300px",
                        borderCollapse: "collapse",
                        border: "1px solid white",
                        color: "white",
                      }}
                    >
                      <tr>
                        <td style={{ padding: "5px", textAlign: "center" }}>
                          <img
                            src="https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                            style={{ width: "25px", height: "25px" }}
                          />
                        </td>
                        <td style={{ padding: "5px" }}>DC Fast Chargers</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px", textAlign: "center" }}>
                          <img
                            src="https://maps.google.com/mapfiles/ms/icons/green-dot.png"
                            style={{ width: "25px", height: "25px" }}
                          />
                        </td>
                        <td style={{ padding: "5px" }}>Level 2 Chargers</td>
                      </tr>
                    </table>
                    <p className="text-info fw-bold pt-5">Summary</p>
                    <p className="text-primary fw-bold">
                      Total number of Existing Charging Stations:{" "}
                      {
                        data.filter(
                          (p) => p.Type.localeCompare("existing") === 0
                        ).length
                      }
                    </p>
                    <p className="text-primary fw-bold">
                      Total number of New Charging Stations:{" "}
                      {
                        data.filter((p) => p.Type.localeCompare("new") === 0)
                          .length
                      }
                    </p>

                    <table
                      style={{
                        fontSize: "18px",
                        padding: "10px",
                        margin: "0",
                        width: "300px",
                        borderCollapse: "collapse",
                        border: "none",
                        marginTop: "30px",
                        color: "white",
                      }}
                    >
                      <p className="fw-bold"> Filter</p>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          onChange={(e) => {
                            e.preventDefault();
                            filterChargers("new");
                          }}
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          New chargers
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          onChange={() => {
                            filterChargers("existing");
                          }}
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Existing chargers
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                          onChange={() => {
                            predict();
                          }}
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          All
                        </label>
                      </div>
                    </table>
                  </div>
                </div>
              </div>
            )}
            {/* {!mapData.length && <p>no predictions</p>} */}
          </div>
        </>
      )}
      {activeTab === "dashboard" && <TableauEmbed />}
      {activeTab === "StationOwner" && <StationOwner />}
      {activeTab === "Location" && <Location />}
      {activeTab === "about" && <About />}
      {activeTab === "contact" && <ContactUs />}
    </div>
  );
}

export default App;
