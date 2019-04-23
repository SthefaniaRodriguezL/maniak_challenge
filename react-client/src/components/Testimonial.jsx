import React from 'react';

class Testimonial extends React.Component {
 constructor() {
   super()
   this.state = {
     stories: {}
   }
 }
 componentDidMount() {
   fetch("https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json")
   .then(rsp => rsp.json())
   .then(rsp => { this.setState({'stories': rsp.slider})});
 }

  render () {
    console.log(this.state);
    return (<div>
      <h1>
        {this.state.stories.title}
      </h1>
      <p>
        {this.state.stories.review}
      </p>
    </div>)
  }
}
export default Testimonial;
