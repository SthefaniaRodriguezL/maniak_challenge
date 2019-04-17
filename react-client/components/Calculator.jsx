import React from 'react';

class Calculator extends React.Component {
 constructor() {
   super()
   this.state = {
     calculate: []
   }
 }
 componentDidMount() {
   fetch("https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json")
   .then(rsp => rsp.json())
   .then(rsp => { this.setState({calculate: rsp})});
 }

  render () {
    console.log(this.state.calculate);
    return (<div>
      <h1> Calculator </h1>

    </div>)
  }
}
export default Calculator;
