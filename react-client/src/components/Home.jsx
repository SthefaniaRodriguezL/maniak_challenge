 import React, { Component } from 'react';
import {Link} from "react-router-dom";



class Home extends Component {
	constructor() {
		super()
		this.state = {
			general: {}
		}
	}
	componentDidMount() {
	   fetch("https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json")
	   .then(rsp => rsp.json())
	   .then(rsp => { this.setState({general: rsp})});
	 }

	render(){
		console.log(this.state.general);
		return (
			<div>
				<button><Link to="/Testimonial">Testimonial</Link></button>
				<button><Link to="/Configurator">Configurator</Link></button>
				<button><Link to="/Home">Home</Link></button>
				<button><Link to="/Solutions">Solutions</Link></button>
				<button><Link to="/Stories">Stories</Link></button>
				<button><Link to="/Partners">Partners</Link></button>
				<button><Link to="/About">About</Link></button>
				<button><Link to="/Blog">Blog</Link></button>

				<h1> wtf </h1>
			</div>
		)
	}

}

export default Home;
