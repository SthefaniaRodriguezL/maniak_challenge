import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//components
import Configurator from './components/Configurator.jsx';
import Testimonial from './components/Testimonial.jsx';
import Home from './components/Home.jsx';

class App extends React.Component {

  render() {
    return (
    	<BrowserRouter>
		  <div>
		    <Switch>
		      <Route exact path="/" component={Home}/>
          <Route path="/Testimonial" component={Testimonial}/>
          <Route path="/Configurator" component={Configurator}/>
		    </Switch>
    	  </div>
    	</BrowserRouter>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
