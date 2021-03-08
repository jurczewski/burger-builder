import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
};

const initialOrder = {
	ingredients: {
		salad: 0,
		bacon: 0,
		cheese: 0,
		meat: 0,
	},
	totalPrice: 4,
	purchasable: false,
};

const builderBuilder = () => {
	const [order, setOrder] = useState(initialOrder);

	const updatePurchase = (ingredients) => {
		const summed = Object.keys(ingredients)
			.map((igKey) => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);

		setOrder((prevState) => ({
			...prevState,
			purchasable: summed > 0,
		}));
	};

	const addIngredientHandler = (type) => {
		const oldCount = order.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...order.ingredients,
		};
		updatedIngredients[type] = updatedCount;

		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = order.totalPrice;
		const newPrice = oldPrice + priceAddition;

		setOrder((prevState) => ({
			...prevState,
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		}));
		updatePurchase(updatedIngredients);
	};

	const removeIngredientHandler = (type) => {
		const oldCount = order.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...order.ingredients,
		};
		updatedIngredients[type] = updatedCount;

		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = order.totalPrice;
		const newPrice = oldPrice - priceDeduction;

		setOrder((prevState) => ({
			...prevState,
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		}));
		updatePurchase(updatedIngredients);
	};

	const disabledInfo = {
		...order.ingredients,
	};

	Object.keys(disabledInfo).forEach((key) => {
		disabledInfo[key] = disabledInfo[key] <= 0;
	});

	return (
		<>
			<Burger ingredients={order.ingredients} />
			<BuildControls
				ingredientAdded={addIngredientHandler}
				ingredientRemoved={removeIngredientHandler}
				disabled={disabledInfo}
				price={order.totalPrice}
				purchasable={order.purchasable}
			/>
		</>
	);
};

export default builderBuilder;
