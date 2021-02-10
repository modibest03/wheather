import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchLocation } from "../api/api";
import WheatherCondition from "../WheatherCondition";

function WheatherConditionData({ setSearch }) {
  const [woeid, setWoeid] = useState(null);

  const { isLoading, error, data, refetch, isIdle, isFetching } = useQuery(
    ["quote"],
    fetchLocation
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }, []);

  if (isIdle || isLoading || isFetching) return <div>Loading</div>;

  if (error) return "An error has occurred: " + error.message;

  return <WheatherCondition setSearch={setSearch} />;
}

export default WheatherConditionData;
