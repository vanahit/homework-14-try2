import React, { Component } from 'react';
import Loader from '../Loader/Loader';

export default class CurrencySelect extends Component {
	constructor(props) {
		super(props);
		this.state = { currency: 'USD', };
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({ currency: event.target.value });
   		this.props.getCurrencyValue(event.target.value);
   	}
	render() {
		return(
				<div className='table'>
					<div className='table-cell convert-amd'>Convert AMD to: </div>
						<div className='select'>
							<div className='label'>Select / Select Copy</div>
							<select 
								value={this.state.currency} 
								onChange={this.handleChange}
							>
								<option value='USD'>USD</option>
								<option value='EUR'>EUR</option>
								<option value='RUB'>RUB</option>
								<option value='GBP'>GBP</option>
							</select>
							<div className='currency-value'>
							{
								this.props.dataReceived &&
								<div>
									(
										{this.state.currency} = {this.props.currencyValue}
										{' '} AMD
									)
								</div> 
							}
							{
								!this.props.dataReceived &&
								<div>
									(
										{this.state.currency} =
										<span className='loader'> 
							                <Loader />
							            </span>
							          	{' '} AMD
							        )
								</div> 
							}
							</div>
						</div>
				</div>
		);
	}
}