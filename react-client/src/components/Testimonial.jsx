import React from 'react';

class Testimonial extends React.Component {
 constructor() {
   super()
   this.state = {
     stories: []
   }
 }
 componentDidMount() {
   fetch("https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json")
   .then(rsp => rsp.json())
   .then(rsp => { this.setState({stories: rsp})});
 }

  render () {
    console.log(this.state.stories);
    return (<div>
    {this.state.stories}
    </div>)
  }
}
export default Testimonial;
