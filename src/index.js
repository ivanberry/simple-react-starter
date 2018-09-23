import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
	return <div>Hello React!</div>;
}

console.log(document.getElementById("root"));

ReactDOM.render(<Index />, document.getElementById("root"));
