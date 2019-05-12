import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ApiTrial from "./apiTrial.js"

class Home extends Component {
	render(){
		return (
			<div>
				<button><Link to="/Testimonial">Testimonial</Link></button>
				<button><Link to="/Configurator">Configurator</Link></button>
				<h1> hey </h1>
				<div>
				<ApiTrial/>
				</div>
			</div>
		)
	}

}

export default Home;
