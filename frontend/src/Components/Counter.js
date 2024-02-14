import React, { Component,setState } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
         
      }
    }
    increment()
    {
        this.setState({ count: this.state.count+1}, ()=>console.log("Callback value"+this.state.count))

        console.log(this.state.count)
    }
    
  render() {
    return (
      <div>
        <center>
            <h1>Count: {this.state.count}</h1>
            <button onClick={()=>this.increment()}>Increment</button>
        </center>
      </div>
    )
  }
}

export default Counter