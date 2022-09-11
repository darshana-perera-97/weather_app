import React from "react";
import AppName from "../Components/AppName";
import Data from "../Components/Data";
import Video from "../Components/Video";

export default function HomePage() {
  return (
    <div>
      <Video />
      <div className="content">
        <div>
          <AppName />
          <Data />
        </div>
      </div>
    </div>
  );
}
