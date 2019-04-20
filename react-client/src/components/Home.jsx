import React, { Component } from 'react';
import {Link} from "react-router-dom";



class Home extends Component {
	render(){
		return (
			<div>
				<button><Link to="/Testimonial">go to Testimonial component</Link></button>
				<button><Link to="/Configurator">go to Configurator component</Link></button>
				<h1> I am Home Component</h1>

			</div>
		)
	}

}

export default Home;
