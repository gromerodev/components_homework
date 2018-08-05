import React, { Component } from 'react';

class Contact extends Component {
	render() {
		return (
			<aside id="contact-me">
				<a href="#">
					<i className="fa fa-arrow-alt-circle-up">::before</i>
				</a>
				<header>
					<h1>Contact Me</h1>
					<p>Please feel free to contact me for any information you may have!</p>
				</header>
				<form action="#" method="post">
					<div className="form-field">
						<label for="user_name">Name</label>
						<br />
						<input type="text" name="user_name" required />
					</div>
					<div className="form-field">
						<label for="user_email">Email</label>
						<br />
						<input type="email" name="user_email" required />
					</div>
					<div className="form-field">
						<textarea name="message" />
					</div>
					<input type="submit" value="Contact me! Thanks!" />
				</form>
			</aside>
		);
	}
}

export default Contact;
