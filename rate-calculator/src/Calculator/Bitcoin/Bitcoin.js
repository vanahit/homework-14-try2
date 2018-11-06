import React, { Component } from 'react';
import BitcoinRate from '../BitcoinRate/BitcoinRate';

export default class Bitcoin extends Component {
	constructor(props) {
		super(props);
		this.state = { showState: false, btc: '', };
		this.showBitcoinRate = this.showBitcoinRate.bind(this);
		this.getBtcRate = this.getBtcRate.bind(this);
	}
	getBtcRate() {
		fetch('http://cb.am/latest.json.php?coins&currency=BTC',)
			.then(response => response.json())
			.then(value => {
				this.setState ({ btc: value.BTC, });
			})
			.catch(err => console.log(err));
	}
	shouldComponentUpdate(nextProps, nextState) {
		return nextState.showState !== this.state.showState || nextState.btc !== this.state.btc
				? true : false;
	}
	showBitcoinRate() {
		this.setState({ showState: !this.state.showState, });
		if (!this.state.showState) {
			this.getBtcRate();
		}
	}
   	render() {
		return(
				<div className='bitcoin'>	
					<div 
						className='bitcoin-title'
						onClick = {this.showBitcoinRate}
					>
					{ 
						!this.state.showState &&
						<span> Show bitcoin rate </span>
					}
					{ 
						this.state.showState &&
						<span> Hide bitcoin rate </span>
					}
					</div>
					{
						this.state.showState && 
							<BitcoinRate 
								getBtcRate={this.getBtcRate}
								btc={this.state.btc}
							/>
					}
				</div>
			);		
	}
}