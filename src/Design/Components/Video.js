import React from "react";
import videoBg from "./back3.mp4";

export default function Video() {
  return (
    <div>
      <video loop autoPlay muted>
        <source src={videoBg} type="video/mp4" />
      </video>
    </div>
  );
}
