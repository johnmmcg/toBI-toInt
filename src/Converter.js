import React, { Component } from 'react';

class Converter extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="converter animated fadeIn">
        <h1> {this.props.to} </h1>
        <h3> {this.props.to} </h3>
        <p> {this.props.fro} </p>
          <br/>
        <input type="text" placeholder={this.props.input} onChange={this.props.handleChange}/>
        <h2> {this.props.output} </h2>
      </div>
    )
  }
}

export default Converter;
