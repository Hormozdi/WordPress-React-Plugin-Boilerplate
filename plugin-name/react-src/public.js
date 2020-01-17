import React from "react";
import ReactDOM from "react-dom";

// Import main components here
import SimplePureComponent from "./components/SimplePureComponent";

jQuery(document).ready(function() {
  let tempElement = null;

  // Repeat this "if statement" foreach rendering
  if ((tempElement = document.getElementById("content"))) {
    ReactDOM.render(<SimplePureComponent />, tempElement);
  }
});

// Set ajax url to get data from Backend
if (ajaxurl) {
  window.reactAjaxUrl = ajaxurl;
}
