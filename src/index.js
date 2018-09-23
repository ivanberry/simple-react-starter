import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.css";

const Index = () => {
	return <div className={styles.test}>Hello React!</div>;
}

ReactDOM.render(<Index />, document.getElementById("root"));
