import React, { Component } from 'react';
import {Link} from "react-router-dom";



class Home extends Component {
	render(){
		return (
			<div>
			  <h1> I am Home Component</h1>
			  <button><Link to="/Calculator">go to calculator component</Link></button>
			</div>
		)
	}

}

export default Home;
