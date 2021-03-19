import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';

const sideDrawer = () => {
	return (
		<div className="SideDrawer">
			<div className="SideDrawer__Logo">
				<Logo />
			</div>
			<nav>
				<NavigationItems />
			</nav>
		</div>
	);
};

export default sideDrawer;
