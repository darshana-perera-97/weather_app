import React from "react";
import HomePage from "./Layouts/HomePage";
import LoadingSc from "./Layouts/LoadingSc";

export default function Design() {
  const [loading, setLoading] = React.useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2500);
  return (
    <div>
      {loading && <LoadingSc />}
      {!loading && <HomePage />}
      {/* <HomePage /> */}
    </div>
  );
}
