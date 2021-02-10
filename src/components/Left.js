import React, { useState } from "react";
import WheatherConditionData from "./apidata/WheatherConditionData";

import "./Left.scss";
import SearchLocation from "./SearchLocation";

function Left() {
  const [search, setSearch] = useState("condition");
  return (
    <div className="left">
      {search === "condition" ? (
        <WheatherConditionData setSearch={setSearch} />
      ) : (
        <SearchLocation setSearch={setSearch} />
      )}
    </div>
  );
}

export default Left;
