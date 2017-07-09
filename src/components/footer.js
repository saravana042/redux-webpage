import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
		<div className="container-fluid fixed-bottom navbar-fixed-bottom">
			<div className="">
				<Link className="navbar-brand logo-name ftr-lg" to="/">
					Cisco
				</Link>
			</div>
		</div>
    );
  }
}
