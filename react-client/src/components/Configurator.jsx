import React from 'react';

class Configurator extends React.Component {
 constructor() {
   super()
   this.state = {
     calculate: []
   }
 }

 // Fetching API with .then method working:
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json")
    .then(rsp => rsp.json())
    .then(rsp => { this.setState({calculate: rsp})});
  }

  render () {
     console.log(this.state.calculate);
    return (<div>
      {object.keys(this.state.calculate).map(function(prop, key) <div key ={key}>{prop}</div>)}
    </div>)
  }
}
export default Configurator;
