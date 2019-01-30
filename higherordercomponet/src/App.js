import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var newData = {
  data: 'Data from HOC...',
}
var oldData = {
  data1:'Old data from HOC',
}

//
var myoldHOC = Composecomponent => class extends React.Component{
  componentDidMount(){
    this.setState({
      data1:oldData.data1
    })
  }
  render(){
    return <Composecomponent {...this.props} {...this.state}/>;
  }
}
class myyyComponent extends React.Component {
  render() {
     return ( 
        <div>
           <h1>{this.props.data1}</h1>
        </div>
     )
  }
}

//
var MyHOC = ComposedComponent => class extends React.Component {
  componentDidMount() {
     this.setState({
        data: newData.data
     });
  }

  render() {
     return <ComposedComponent {...this.props} {...this.state} />;
  }
};

class MyComponent extends React.Component {
  render() {
     return (
        <div>
           <h1>{this.props.data}</h1>
        </div>
     )
  }
}

export default myoldHOC(myyyComponent);