import React, { Component } from 'react';

class Resume extends Component {
	state = {};
	render() {
		return (
			<aside id="resume">
				<a href="#">
					<i class="far fa-arrow-alt-circle-up">::before</i>
				</a>
				<h1>Resume</h1>
				<header>
					<h2>George Romero</h2>
					<address>
						<a href="tel:222caliente4u">222caliente4u </a>
						<a href="mailto:gromes@roming.com">gromes@roming.com </a>
						<a href="www.gcodez.com" rel="nofollow">
							www.gcodez.com{' '}
						</a>
						Leet Street savage avenure
					</address>
				</header>
				<hr />
				<ol>
					<li>
						<h3>Technical Skills</h3>
						<ul>
							<li>Lanuguages: HTML, CSS, JS</li>
							<li>Lanuguages: HTML, CSS, JS</li>
							<li>Lanuguages: HTML, CSS, JS</li>
						</ul>
						<p>
							A lot of ReactJs. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id animi
							quidem obcaecati quisquam ullam. Quos aperiam ipsum cupiditate hic cum quaerat aut qui
							sapiente repudiandae, sed accusantium perspiciatis, molestias.
						</p>
					</li>
					<li>
						<h3>Experience</h3>
						<ul>
							<li>
								<h4>
									"The One Place -
									<small>2000-2010</small>
									<ul>
										<li>I did this</li>
										<li>I did that</li>
									</ul>
								</h4>
							</li>
						</ul>
					</li>
				</ol>
			</aside>
		);
	}
}

export default Resume;
