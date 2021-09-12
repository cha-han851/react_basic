import React from 'react';

export default class CountUpDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  countUp = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
  countDown = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div className="count-up-down">
        <h1>countUpDown</h1>
        <h3>{this.state.count}</h3>
        <button onClick={()=>{this.countUp()}}>+</button>
        <button onClick={()=>{this.countDown()}}>-</button>
      </div>
    );
  }
}