import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				
				<Link className="navbar-brand logo-name" to="/">
					Cisco
				</Link>
				
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/chart">
								Chart
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/paragraph">
								Paragraph
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/posts/new">
								Form
							</Link>
						</li>
					</ul>
				</div>
			</nav>
      </div>
    );
  }
}
