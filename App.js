import React from "react";
import ReactDOM from "react-dom/client"; 
 
 
 const heading = React.createElement("h1",{className:"parent"},"hello world");


        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);