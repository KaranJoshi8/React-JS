import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state1 = {
      header: "Header from state...",
      content: "Content from state..."
   }
    this.state = {
       data: 
       [
          {
             "id":1,
             "name":"Karan",
             "age":"21",
             "gender":"male"
          },
          {
             "id":2,
             "name":"Bharat",
             "age":"20",
             "gender":"male"
          },
          {
             "id":3,
             "name":"Parth",
             "age":"19",
             "gender":"male"
          }
       ]
    }
 }  

  render() {
    var i = 1;
    var myStyle = {
      fontSize: 100,
      color: "blue"
    };
    return (
      <div>
        <div>Hello World!!!</div>
        <div>
          <h1> Nested Elements</h1>
          <h2> Content</h2>
          <p> This is the content!!!</p>
        </div>

        <div>
          <h1>Attributes</h1>
          <h2>Content</h2>
          <p data-myattribute="somevalue">This is the content!!!</p>
        </div>
        <div>
          addition
          <h1>{1 + 1}</h1>
        </div>

        <div>
          if else in jsx
          <h1>{i == 1 ? "True!" : "False"}</h1>
          <h1>{i == 2 ? "True!" : "False"}</h1>
          <h1 style={myStyle}>Header</h1>
        </div>
        <div>
          <h1>Comment</h1>
          {/* End of the line Comment..
            Multi line comment...  */}
        </div>
        <p>
          HTML tags always use lowercase tag names, while React components start
          with Uppercase. Note − You should use className and htmlFor as XML
          attribute names instead of class and for. This is explained on React
          official page as − Since JSX is JavaScript, identifiers such as class
          and for are discouraged as XML attribute names. Instead, React DOM
          components expect DOM property names such as className and htmlFor,
          respectively.
        </p>
        <div>
            <Header/>
            <Content/>
         </div>
         <div>
            <Header1/>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
            </table>
         </div>

         <div>
           
            <h1>{this.state1.header}</h1>
            <h2>{this.state1.content}</h2>
         </div>
         <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
         </div>
      </div>

      
    );
  }
}
App.defaultProps = {
  headerProp: "Default Header from props...",
  contentProp:"Default Content from props..."
}

class Header extends React.Component {
  render() {
     return (
        <div>
           <h1>stateless concept Header</h1>
        </div>
     );
  }
}
class Header1 extends React.Component {
  render() {
     return (
        <div>
           <h1>Stateful concept Header</h1>
        </div>
     );
  }
}
class Content extends React.Component {
  render() {
     return (
        <div>
           <h2> stateless concept Content</h2>
           <p>The content text!!!</p>
        </div>
     );
  }
}
class TableRow extends React.Component {
  render() {
     return (
        <tr>
           <td> ID:{this.props.data.id}</td><br />
           <td> Name:{this.props.data.name}</td><br />
           <td> Age:{this.props.data.age}</td><br />
           <td> Gender:{this.props.data.gender}</td><br />
        </tr>
     );
  }
}
export default App;
