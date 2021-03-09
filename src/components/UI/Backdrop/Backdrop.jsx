/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './Backdrop.css';

const backdrop = (props) => {
	return props.show ? <div className="Backdrop" onClick={props.clicked} /> : null;
};

export default backdrop;
