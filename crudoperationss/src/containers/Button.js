import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

let Button = ({ getData }) => (
  <button style={btnStyle} onClick={getData}>
    Press to see Data
  </button>
);

const mapDispatchToProps = {
  getData: getData
};

Button = connect(
  null,
  mapDispatchToProps
)(Button);

const btnStyle = {
    backgroundColor: "#0000ff",
    width: '250px',
    height: '100px',
    borderRadius: '100px',
    fontSize: "25px",
    border: "3px",
    margin:"150px auto",
    display:'block'
  };

export default Button;
