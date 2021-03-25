import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import './SideDrawer.css';

const sideDrawer = (props) => {
	let attachedClasses = ['SideDrawer', 'Close'];

	if (props.open) {
		attachedClasses = ['SideDrawer', 'Open'];
	}

	return (
		<>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(' ')}>
				<div className="SideDrawer__Logo">
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</>
	);
};

export default sideDrawer;
