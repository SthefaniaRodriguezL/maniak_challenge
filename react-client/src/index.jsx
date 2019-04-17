import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
 constructor() {
   super()
   this.state = {
     data: []
   }
 }
 componentDidMount() {
   fetch("https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json")
   .then(rsp => rsp.json())
   .then(rsp => { this.setState({data: rsp})});
 }

  render () {
    console.log(this.state.data);
    return (<div>
      <h1> Maniak Challenge</h1>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
