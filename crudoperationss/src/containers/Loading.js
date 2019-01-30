import React from 'react';
import { connect } from 'react-redux'
import img from '../containers/load.gif'

let Loading = ({ loading }) => (
loading ?
<div style={{ textAlign: 'center' }}>
   <img src={img} style={{width:350,height:200}} alt='loading' />
</div> :
null
);

const mapStateToProps = (state) => ({loading: state.loading})
Loading = connect(mapStateToProps,null)(Loading)
export default Loading;