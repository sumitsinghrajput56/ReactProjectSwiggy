 const heading = React.createElement("div",{className:"parent"},[React.createElement("div",{className:"child"},[React.createElement("h1",{className:"heading1"},"hello world!"),React.createElement("h1",{className:"heading2"},"hello world!")]),React.createElement("div",{className:"child1"},[React.createElement("h1",{className:"heading3"},"hello world!"),React.createElement("h1",{className:"heading4"},"hello world!")])]);


        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);