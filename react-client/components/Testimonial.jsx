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
      <h1> Testimonial </h1>
      <p>"It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail" </p>

    </div>)
  }
}
export default Testimonial;
