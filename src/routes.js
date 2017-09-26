import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Home from 'async!./pages/home'
import Profile from 'async!./pages/profile'
import Contact from 'async!./pages/contact'
import About from 'async!./pages/about'
import Fav from 'async!./pages/fav'
import PaymentSuccess from 'async!./pages/payment-success'
import Cart from 'async!./pages/cart'
import Payment from 'async!./pages/payment'

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" />
					<Contact path="/contact-us/" />
					<About path="/about-us/" />
					<Fav path="/my-favs/" />
					<PaymentSuccess path="/order-placed/" />
					<Cart path="/cart/" />
					<Payment path="/payment/" />
				</Router>
			</div>
		);
	}
}
