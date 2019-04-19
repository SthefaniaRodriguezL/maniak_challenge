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
      <h1> Save more with Bellotero.io </h1>
      <p> With Bellotero.io you save time and money make real-time decisions that boost your business and your botton line. Get less wrongfully blocked payments, save time on bookkeeping and no need to worry about safety. </p>
    </div>)
  }
}
export default Calculator;
