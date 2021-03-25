import React, { useState } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Layout.css';

const layout = (props) => {
	const [showSideDrawer, setShowSideDrawer] = useState(true);

	const sideDrawerClosedHandler = () => {
		setShowSideDrawer(false);
	};

	const sideDrawerToggleHandler = () => {
		setShowSideDrawer(!showSideDrawer);
	};

	return (
		<>
			<Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
			<SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />, Backdrop
			<main className="Content">{props.children}</main>
		</>
	);
};

export default layout;
