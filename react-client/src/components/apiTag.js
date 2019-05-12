import React,{Component} from 'react';
// routes to the libraries
import axios from 'axios';

export default class ApiTrial extends Component {
 constructor() {
   super()
   // setting up the state to calculate the information
   this.state = {
     exampleArr : []
   }
   this.tagAPI = this.tagAPI.bind(this)
 }

   tagAPI (){
    axios.get("https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json")
    .then(res => { res.data.menu.items
    this.setState({
    exampleArr: res.data.menu.items
    })
   })
.catch(err => {
  console.log( 'error en axios request :', err);
})
}
 // Fetching API with .then method working:
  render () {
    console.log('state arr in render :', this.state.exampleArr);
    return (
      <div>
        <button>
        Api button
        </button>
      </div>
    )
  }
}
