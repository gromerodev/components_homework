import React, { Component } from 'react';

class Footer extends Component {
	state = {};
	render() {
		return (
			<footer>
				<div>
					<a href="www.facebook.com" target="_blank" />
					<a href="www.twitter.com" target="_blank" />
					<a href="www.github.com" target="_blank" />
				</div>
				<p>©GRwynCode 2018</p>
			</footer>
		);
	}
}

export default Footer;
