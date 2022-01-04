import React from 'react';

class Class extends React.Component{
  constructor(){
    super()
    this.state = {
      date: new Date()
    }
  }
  
  tick(){
    this.setState({
      date: new Date()
    })
  }

  componentDidMount() {
    this.timerID = setInterval(()=> this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render(){
    return(
      <div className='class'>
        <h1>Realtime CLOCK Class</h1>
        <hr />
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Class;