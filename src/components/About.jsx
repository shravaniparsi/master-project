import React from "react";

const About = () => {
  return (
    <div
      className="container mt-5"
      style={{
        color: "white",
        backgroundColor: "#282c34",
        padding: "20px",
        borderRadius: "8px",
        marginLeft: "80px",
      }}
    >
      <h1 className="mb-4">About Our Project</h1>
      <p>
        Welcome to the EV Charging Infrastructure Dashboard! Our project aims to
        provide insights into the future of electric vehicle (EV) charging
        station locations based on predictive analysis.
      </p>
      <h2 className="mt-4">Abstract</h2>
      <p>
        The ever-increasing energy demand, along with environmental degradation,
        has prompted a paradigm shift away from conventional automobiles and
        toward Electric automobiles (EVs). The availability of charging
        infrastructure is required for public acceptance of EVs.Charging
        infrastructure planning is a complex process that includes activities
        such as charging station placement, charging demand projection, charging
        schedules, and the interaction between power distribution and road
        networks. With the introduction of machine learning in recent years,
        data-driven approaches to charging infrastructure planning have become
        popular. As a result, academics have begun to employ machine learning
        techniques to solve challenges related to charging infrastructure
        design, such as charging station placement, charging demand forecast,
        charging schedules, and so on. The goal of this study is to develop an
        optimization and visualization tool for city planners to use in
        determining the best site for future electric vehicle (EV) charging
        stations in a Smart city. It enables the user to investigate the ideal
        distribution of charging stations in various scenarios when demand for
        EV charging varies. The product is available as a web app.
      </p>
      <h2 className="mt-4">Key Features</h2>
      <ul>
        <li>City-wise predictions for future charging station locations</li>
        <li>
          Visualization of charging station distribution on an interactive map
        </li>
        <li>Station details including type, address, and predicted growth</li>
        <li>Filter options for new and existing chargers</li>
        <li>
          Analysis dashboards for station owner, city infrastructure planning
          and user
        </li>
      </ul>
      <h2 className="mt-4">How to Use</h2>
      <p>
        Start by entering your city in the search bar to predict future charging
        station locations. Use the interactive map to explore the distribution
        of charging stations and filter options to customize your view based on
        charger types.
      </p>
    </div>
  );
};

export default About;
