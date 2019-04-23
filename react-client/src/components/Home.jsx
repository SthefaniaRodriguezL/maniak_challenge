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
				<button><Link to="/Testimonial">go to Testimonial component</Link></button>
				<button><Link to="/Configurator">go to Configurator component</Link></button>
				<h1> wtf </h1>
			</div>
		)
	}

}

export default Home;
