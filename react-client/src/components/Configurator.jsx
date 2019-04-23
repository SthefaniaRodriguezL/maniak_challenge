import React from 'react';

class Configurator extends React.Component {
 constructor() {
   super()
   // setting up the state to calculate the information
   this.state = {
     calculate: {}
   }
 }

 // Fetching API with .then method working:
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json")
    .then(rsp => rsp.json())
    .then(rsp => { this.setState({'calculate':rsp.calculator})});
  }

  render () {
    // console logging the API.
    //rendering the API information
    console.log(this.state);
    return (<div>
     <h1 className='title'>
       {this.state.calculate.title}
     </h1>
     <p>
       {this.state.calculate.description}
     </p>
    </div>)
  }
}
export default Configurator;
