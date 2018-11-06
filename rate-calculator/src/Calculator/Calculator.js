import React, { Component } from 'react';
import CurrencySelect from './CurrencySelect/CurrencySelect';
import ConvertArea from './ConvertArea/ConvertArea';
import Bitcoin from './Bitcoin/Bitcoin';
import round from 'lodash/round';

export default class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {	
			data: null,
			currency: 'USD',
			currencyValue: '',
			inputValue: '',
			convertedValue: 0,
			dataReceived: false,
		};
		this.getCurrencyValue = this.getCurrencyValue.bind(this);
		this.setInputValue = this.setInputValue.bind(this);
		this.convert = this.convert.bind(this);
		this.getData = this.getData.bind(this);
	}
	setInputValue(value) {
		this.setState({ inputValue: value, });
		this.convert(value, this.state.currencyValue);
	}
	convert(value, currencyValue) {
		this.convertedValue = round((1 / currencyValue * value), 4);
	}
	getCurrencyValue(currency) {
		let currencyValue;
   		switch(currency) {
  			case 'RUB': currencyValue = this.state.data.RUB; break;
	  		case 'EUR':	currencyValue = this.state.data.EUR; break;
	  		case 'USD':	currencyValue = this.state.data.USD; break;
	  		default: currencyValue = this.state.data.GBP;	break;
	  	}
  		this.convert(this.state.inputValue, +currencyValue);
  		this.setState({ currency: currency, currencyValue: +currencyValue, });
  	}
  	getData() {
		fetch(`http://cb.am/latest.json.php`)
  			.then(response => response.json())
  			.then(data => {
  				this.setState({ data: data,	dataReceived: true });
  				this.getCurrencyValue('USD');
  			})
	}
   	componentDidMount() {
   		this.getData();
   	}
	render() {
		return (
			<div>
				<main>
					<h1>
						Rate calculator
					</h1>
					<CurrencySelect
						getCurrencyValue ={this.getCurrencyValue}
						dataReceived={this.state.dataReceived}
						currencyValue={this.state.currencyValue}
					 />
					<ConvertArea 
						setInputValue={this.setInputValue}
						convertedValue={this.convertedValue}
						currency={this.state.currency}
						dataReceived={this.state.dataReceived}
					/>
					<Bitcoin/>
				</main>
			</div>
		);
	}
}