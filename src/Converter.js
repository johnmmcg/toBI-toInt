import React, { Component } from 'react';

class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      froInt: 9,
      toBi: '1001',
      froBi: 1010101,
      toInt: '85'
    };
    this.handleChangeInt = this.handleChangeInt.bind(this);
    this.handleChangeBi = this.handleChangeBi.bind(this);
    this.toBi = this.toBi.bind(this);
    this.toInt = this.toInt.bind(this);

  }

  toBi(int) {
    var output = "";
    var regex = /^[a-zA-Z ]+$/;
    if (int < 0 || int.toString().match(regex) ) {
      return 'NaN';
    } else {
      while ( int > 0 ) {
        var bit = Math.floor(int % 2)!==0 ? "1" : "0";
        output = bit + output;
        int = Math.floor(int/2);
      }
      while(Math.floor(output.length % 8)!==0) {
        output = "0" + output;
      }
      return output;
    }
  }

  toInt(binary) {
    var regex = /([a-zA-Z2-9])\w/g;
    if (binary < 0 || binary.toString().match(regex) ) {
      return 'NaN';
    } else {
      return parseInt(binary, 2)
    }
  }

  handleChangeInt(e) {
    var toBi = this.toBi(e.target.value);
    this.setState({toBi: toBi});
    this.setState({froInt: e.target.value});
  }

  handleChangeBi(e) {
    this.setState({froBi: e.target.value})
    var toInt = this.toInt(e.target.value)
    this.setState({toInt: toInt})
  }

  render() {
    return (
      <div className="converter animated slideInDown">
        <div className="toBi animated slideInLeft">
          <h1> toBi </h1>
          <h3> toBi </h3>
          <p> [froInt] </p>
            <br/>
          <input type="text" placeholder={this.state.froInt} onChange={this.handleChangeInt}/>
          <h2> {this.state.toBi} </h2>
        </div>
        <div className="toInt animated slideInRight">
          <h1> toInt </h1>
          <h3> toInt </h3>
          <p> [froBi] </p>
            <br/>
          <input type="text" placeholder={this.state.froBi} onChange={this.handleChangeBi}/>
          <h2> {this.state.toInt} </h2>
        </div>
      </div>
    );
  }
}

export default Converter;
