import React, { Component } from 'react';
import Converter from './Converter';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'toBi',
      froInt: 9,
      toBi: '1001',
      froBi: 1010101,
      toInt: '85'
    };
    this.handleChangeInt = this.handleChangeInt.bind(this);
    this.handleChangeBi = this.handleChangeBi.bind(this);
    this.toBi = this.toBi.bind(this);
    this.toInt = this.toInt.bind(this);
    this.swap = this.swap.bind(this);

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

  swap(e) {
    if (this.state.mode === 'toBi') {
      this.setState({mode: 'toInt'})
    } else {
      this.setState({mode: 'toBi'})
    }
  }

  render() {
    var swap = <button onClick={this.swap}> Swap </button>;
    var converter;
    if (this.state.mode === 'toBi') {
      converter = <Converter
        to={this.state.mode}
        fro='[froInt]'
        handleChange={this.handleChangeInt}
        converter={this.toBi}
        input={this.state.froInt}
        output={this.state.toBi}
      />
    } else {
      converter = <Converter
        to={this.state.mode}
        fro='[froBi]'
        handleChange={this.handleChangeBi}
        converter={this.toInt}
        input={this.state.froBi}
        output={this.state.toInt}
      />
    }

    return (
      <div className="container animated slideInDown">
        {converter}
        {swap}
      </div>
    );
  }
}

export default Container;
