import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//components
import Calculator from './components/Calculator.jsx';
import Testimonial from './components/Testimonial.jsx';
import Home from './components/Home.jsx';





class App extends React.Component {
 constructor() {
   super()
   this.state = {
     data: []
   }
 }
 // componentDidMount() {
 //   fetch("https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json")
 //   .then(rsp => rsp.json())
 //   .then(rsp => { this.setState({data: rsp})});
 // }

  render() {
    const { Info } = this.state;
    return (
    	<BrowserRouter>
		  <div>
		    <Switch>
		      <Route exact path="/" component={Home}/>
          <Route exact path="/Calculator" component={Calculator}/>
		    </Switch>
    	  </div>
    	</BrowserRouter>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
