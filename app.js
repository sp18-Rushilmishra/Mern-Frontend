import React from "react";
import ReactDOM from "react-dom/client";
// import index from './index.css'

// const heading = React.createElement("h1" ,{} , "hello react");

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// import React from "react";

// import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1" , {id : "heading"} , "Namaste Rushil");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//JSX-HTML like syntax

// React Element
// const jsxHeading = (<h1 className = "head"> 
// Namaste Rushil 
// </h1>);

// React Functional Components
const elem = <span>React element</span>

const Title = () => (
    <h1 className = "head" tabIndex = '5'>
    {elem}
    Namaste Rushil ye bhi render karna hai
    </h1>
);
// const number = "rushil";
    // const data = api.getData();

const HeadingComponent = () => (
    <div id ="container">
    {/* {number} */}
    {/* {data} */}
    <Title />
    <h1>Namaste Rushil functional Components</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render( <HeadingComponent /> );



