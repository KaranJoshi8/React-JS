import React from "react";
import { connect } from "react-redux";
import { getNews } from "../actions";

let Button = ({ getNews }) => (
  <button style={btnStyle} onClick={getNews}>
    Press to see news
  </button>
);

const mapDispatchToProps = {
  getNews: getNews
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
    margin: '50px',
    fontSize: "25px",
    border: "3px",
    margin:"150px auto",
    display:'block'
  };

export default Button;
