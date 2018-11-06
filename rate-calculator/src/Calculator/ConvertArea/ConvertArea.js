import React, { Component } from 'react';
import Loader from '../Loader/Loader';		

export default class ConvertArea extends Component {
	constructor(props) {
		super(props);
		this.state = { inputValue: 0, };
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({inputValue: +event.target.value});
		this.props.setInputValue(+event.target.value);
   	}
   componentDidMount() {
   		this.inputTarget.focus();
   }
   render() {
		return(
			<div className='table'>
				<div className='table-cell input'>
					<div className='label'>Input / Text (Focus) Copy</div>
						<input type='number'
							min='0'
							ref={e => this.inputTarget = e}
							value={this.state.inputValue}
							onChange={this.handleChange}
						/>
				</div>
				<div className='table-cell converted-amd'>
					{     
						!this.props.dataReceived && 
							<span>
								{this.state.inputValue} AMD =
								<span className='loader'> 
				               		 <Loader />
				            	</span>
				            	{' '} 
								{this.props.currency}
							</span>
					}
				    {	
				    	this.props.dataReceived && 
							<span>
								{this.state.inputValue} AMD =
								{' '} 
								{  
									this.state.inputValue && 
									this.props.convertedValue
								} 
								{' '}
								{this.props.currency}
							</span>
					}
				</div>
			</div>
		);
	}
}

