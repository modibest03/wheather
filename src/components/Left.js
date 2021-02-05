import React, { useState } from "react";

import "./Left.scss";
import SearchLocation from "./SearchLocation";
import WheatherCondition from "./WheatherCondition";

function Left() {
  const [search, setSearch] = useState("condition");
  return (
    <div className="left">
      {search === "condition" ? (
        <WheatherCondition setSearch={setSearch} />
      ) : (
        <SearchLocation setSearch={setSearch} />
      )}
    </div>
  );
}

export default Left;
