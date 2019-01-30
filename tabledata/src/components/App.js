import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux'
import {Modal, ModalHeader, ModalBody , Row , Button, Table } from 'reactstrap'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    console.log("Data is Coming",this.props.data) 
    return (
      <div className="App">56

      </div>
    );
  }
}

export default App;
