import React, { Component } from 'react';


// is correctly defined and exported React component which renders
// a <div> with a className of "cell"
export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }
  
  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }
  
  render() {
    return (
      <div 
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }
  
}
