/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';

class BuilderBuilder extends Component {
	render() {
		return (
			<>
				<Burger />
				<div>Build Controls</div>
			</>
		);
	}
}

export default BuilderBuilder;
