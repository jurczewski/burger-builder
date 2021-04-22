/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './DrawerToggle.css';

const drawerToggle = (props) => (
	<div className="DrawerToggle" onClick={props.clicked}>
		<div />
		<div />
		<div />
	</div>
);

export default drawerToggle;
