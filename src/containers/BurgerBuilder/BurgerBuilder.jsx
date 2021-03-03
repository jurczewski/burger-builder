/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';

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
			<div>Build Controls</div>
		</>
	);
};

export default builderBuilder;
