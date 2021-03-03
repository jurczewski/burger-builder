/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const initialState = {
	ingredients: {
		salad: 0,
		bacon: 0,
		cheese: 0,
		meat: 0,
	},
};

const builderBuilder = () => {
	const [order, setOrder] = useState(initialState);

	return (
		<>
			<Burger ingredients={order.ingredients} />
			<BuildControls />
		</>
	);
};

export default builderBuilder;
