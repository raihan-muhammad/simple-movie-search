import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StarRating from "./StarRating";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      messages={["Terrible", "bad", "okay", "good", "amazing"]}
      defaultRating={3}
    />
    <StarRating color="royalblue" />
  </React.StrictMode>
);
