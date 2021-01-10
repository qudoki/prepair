import React from "react";
import placeholderclose from "../../static/wood.png";
import "./style.css";

export function Wrapper() {
	return (
		<div className="wrap">
			<img
				src={placeholderclose}
				className="background-closeup"
				alt="woodplanks"
			/>
			<h1 className="subtitle">Create a New Project</h1>
		</div>
	);
}

export default Wrapper;
