import React from 'react';
import './BuildControl.css';

const buildControl = (props) => {
	return (
		<div className="BuildControl">
			<div className="Label">{props.label}</div>
			<button type="button" className="Less">
				Less
			</button>
			<button type="button" className="More" onClick={props.added}>
				More
			</button>
		</div>
	);
};

export default buildControl;
