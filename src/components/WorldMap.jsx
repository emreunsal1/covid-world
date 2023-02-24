import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Graticule,
  Geographies,
  Geography,
  Sphere,
  ZoomableGroup,
} from "react-simple-maps";
import { geoWinkel3 } from "d3-geo-projection";
import { scaleLinear } from "d3-scale";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const projection = geoWinkel3()
  .translate([800 / 2, 800 / 2])
  .scale(140);

const colorScale = scaleLinear()
  .domain([0, 500000])
  .range(["#ffedea", "#ff5233"]);

export default function WorldMap() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const countryStatus = useSelector(
    (state) => state.countriesStore.countryStatus
  );

  useEffect(() => {
    dispatch({ type: "COUNTRIES_FETCH_REQUESTED" });
  }, []);

  const countryClickHandler = (geo) => {
    console.log("geo", geo);
    navigate(`/${geo.properties.name}`);
  };

  return (
    <div>
      <ComposableMap projection={projection}>
        <ZoomableGroup center={[0, 0]} zoom={1}>
          <Graticule stroke="#EEECEF" />
          <Geographies
            geography="/features.json"
            stroke="white"
            strokeWidth={0.2}
          >
            {({ geographies }) =>
              countryStatus &&
              geographies.map((geo) => (
                <Geography
                  onClick={() => countryClickHandler(geo)}
                  key={geo.rsmKey}
                  fill={
                    colorScale(countryStatus[geo.properties.name]?.deaths) ||
                    "#ffedea"
                  }
                  geography={geo}
                  style={{
                    default: {
                      outline: "none",
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none",
                    },
                    pressed: {
                      fill: "none",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
          <Sphere stroke="#EEECEF" strokeWidth={1} />
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
