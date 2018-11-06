import React, { Component } from 'react';
import './style.css';

export default class Loader extends Component {
	render() {
		return(
			<div className="cssload-squeeze">
				<span></span>
				<span></span>
				<span></span>
			</div>
		);
	}
}