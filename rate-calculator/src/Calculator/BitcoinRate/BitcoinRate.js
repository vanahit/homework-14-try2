import React, { Component } from 'react';
import Loader from '../Loader/Loader';

export default class BitcoinRate extends Component {

	componentDidMount() {
		this.intervalId = setInterval(() => {
			this.props.getBtcRate();
		}, 180000);
	}

	componentWillUnmount()  {
		clearInterval(this.intervalId);
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.btc !== this.props.btc;
	}

	render() {
		return (
	    	<div className='bitcoin-rate'>
		    	<span className='rate'>Current Bitcoin Rate: {' '}  
			        <b>
			            {
			            	!this.props.btc && 
			            	<span className='loader'> 
			            	<Loader />
			            	</span>
			            }
			            {
			            	this.props.btc && this.props.btc
			            }
			          </b>
		        </span>
		        <span className='refresh' onClick={this.props.getBtcRate}>
		        	Refresh
		        </span>
		        <div>(BTC rate automatically will be updated every 3 minutes)</div>
	    	</div>
	    );
	}
					
				
}