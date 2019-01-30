import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: [
  //       {
  //         component: "First",
  //         id: 1
  //       },
  //       {
  //         component: "Second",
  //         id: 2
  //       },
  //       {
  //         component: "Third",
  //         id: 3
  //       }
  //     ]
  //   };
    // this.state = {
    //   data: "Karan Joshi"
    // };
    // this.updateState = this.updateState.bind(this);
    //this.clearInput = this.clearInput.bind(this);
    // this.state = {
    //   data: 0
    // };
    // this.setNewNumber = this.setNewNumber.bind(this);
    //this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    // this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    // this.state = {
    //    data: []
    // }
    // this.setStateHandler = this.setStateHandler.bind(this);
  //}
  //  setStateHandler() {
  //     var item = "Karan  "
  //     var item2 = " Joshi "
  //     var item3 = " KJ "
  //     var item4 = " 8888, "

  //     var myArray = this.state.data.slice();
  //      myArray.push(item , item2 ,item3 ,item4 );
  //     this.setState({data: myArray})
  //  };
  //  forceUpdateHandler() {
  //   this.forceUpdate();
  // };
  // findDomNodeHandler() {
  //   var myDiv = document.getElementById('myDiv');
  //   ReactDOM.findDOMNode(myDiv).style.color = 'green';
  // }
  // setNewNumber() {
  //   this.setState({ data: this.state.data + 1 });
  // }
  // updateState(e) {
  //   //this.setState({ data: "Data updated from the child component..." });
  //   //this.setState({data: 'Data updated...'})
  //   this.setState({ data: e.target.value });
  // }
  // clearInput() {
  //   this.setState({ data: "" });
  //   ReactDOM.findDOMNode(this.refs.myInput).focus();
  // }
  render() {
    return (
      // <div>
      //   <div>
      //     {this.state.data.map((dynamicComponent, i) => (
      //       <Content key={i} componentData={dynamicComponent} />
      //     ))}
      //   </div>
      // </div>
      // <div>
      //   <input
      //     value={this.state.data}
      //     onChange={this.updateState}
      //     ref="myInput"
      //   />
      //   <button onClick={this.clearInput}>CLEAR</button>
      //   <h4>{this.state.data}</h4>
      // </div>
      // <div>
      //       <button onClick = {this.updateState}>CLICK</button>
      //       <h4>{this.state.data}</h4>
      //    </div>
      // <div>
      //   <Content
      //     myDataProp={this.state.data}
      //     updateStateProp={this.updateState}
      //   />
      // </div>
      // <div>
      //       <input type = "text" value = {this.state.data}
      //          onChange = {this.updateState} />
      //       <h4>{this.state.data}</h4>
      //    </div>
      // <div>
      //   <button onClick={this.setNewNumber}>INCREMENT</button>
      //   <Content myNumber={this.state.data} />
      // </div>
      // <div>
      //       <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
      //       <div id = "myDiv">
      //       <h4>Node Mali gayo</h4>
      //       </div>
      //    </div>
      // <div>
      //       <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
      //       <h4>Garbage number: {Math.random()}</h4>
      // </div>
      // <div>
      //       <button onClick = {this.setStateHandler}>SET STATE</button>
      //       <h4>State Array: {this.state.data}</h4>
      //    </div>
      <div>
            <h3>Array: {this.props.propArray}</h3>
            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc(3)}</h3>
            <h3>Number: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>
            <h3>Object: {this.props.propObject.objectName1}</h3>
            <h3>Object: {this.props.propObject.objectName2}</h3>
            <h3>Object: {this.props.propObject.objectName3}</h3>
         </div>
      // <div>
      //       <Header headerProp = {this.state.header}/>
      //        <Content contentProp = {this.state.content}/>
      // </div>
    );
  }
}

//class Content extends React.Component {
  //   componentWillMount() {
  //     console.log("Component WILL MOUNT!");
  //   }
  //   componentDidMount() {
  //     console.log("Component DID MOUNT!");
  //   }
  //   componentWillReceiveProps(newProps) {
  //     console.log("Component WILL RECIEVE PROPS!");
  //   }
  //   shouldComponentUpdate(newProps, newState) {
  //     return true;
  //   }
  //   componentWillUpdate(nextProps, nextState) {
  //     console.log("Component WILL UPDATE!");
  //   }
  //   componentDidUpdate(prevProps, prevState) {
  //     console.log("Component DID UPDATE!");
  //   }
  //   componentWillUnmount() {
  //     console.log("Component WILL UNMOUNT!");
  //   }
 // render() {
  //  return (
      // <div>
      //   <div>{this.props.componentData.component}</div>
      //   <div>{this.props.componentData.id}</div>
      // </div>
      // <div>
      //   <button onClick={this.props.updateStateProp}>CLICK</button>
      //   <h3>{this.props.myDataProp}</h3>
      // </div>
      //     <div>
      //         <input
      //           type="text"
      //           value={this.props.myDataProp}
      //           onChange={this.props.updateStateProp}
      //         />
      //         <h3>{this.props.myDataProp}</h3>
      //       </div>
      //       // <div>
      //       //   <h3>{this.props.myNumber}</h3>
      //       // </div>
//     );
//   }
// }
App.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
  propObject: PropTypes.object
}
App.defaultProps = {
  propArray: [1,2,3,4,5],
  propBool: true,
  propFunc: function(e){return e},
  propNumber: 1,
  propString: "String value...",

  propObject: {
     objectName1:"objectValue1",
     objectName2: "objectValue2",
     objectName3: "objectValue3"
  }
}
export default App;
// class Header extends React.Component {
//   render() {
//      return (
//         <div>
//            <h1>{this.props.headerProp}</h1>
//         </div>
//      );
//   }
// }
// class Content extends React.Component {
//   render() {
//      return (
//         <div>
//            <h2>{this.props.contentProp}</h2>
//         </div>
//      );
//   }
// }
//   constructor(props) {
//     super(props);
//     this.state = {
//        header: "State Header from props...",
//        content: "State Content from props..."
//     }
//  }
