import React from 'react';
import { connect } from 'react-redux'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter , Row ,Label,Input,ButtonGroup  } from 'reactstrap'
import { Table } from 'reactstrap';
import {addData } from '../actions/index.js';
// import PropTypes from 'prop-types';

class NewsItem extends React.Component{

constructor(props) {
  super(props);
  this.state = {
    addModal: false,
    editModal:false,
    deleteModal:false,
    Name:"",
    Address:"",
    Pincode:""
  };
  this.addtoggle = this.addtoggle.bind(this);
  this.edittoggle = this.edittoggle.bind(this);
  this.deletetoggle = this.deletetoggle.bind(this);
}
componentWillReceiveProps(nextProps){
  console.log('willr', nextProps);
}
addtoggle(data) {
  this.setState({
    addModal: !this.state.addModal,
    editModal:false,
    deleteModal:false,
    [data.target.name]: data.target.value,
  });
}
addtoggleData() {
  const {
    Name,
    Address,
    Pincode
  } = this.state;
  this.props.addData({
  Name,
  Address,
  Pincode
  })
}
edittoggle() {
  this.setState({
    editModal: !this.state.editModal,
    addModal: false,
    deleteModal:false
  });
}
deletetoggle() {
  this.setState({
    deleteModal: !this.state.deleteModal,
    editModal: false,
    addModal: false
  });
}
render(){
  const {Name , Address , Pincode} = this.state;
  return(
    <div>
    {this.props.data !=null?(
     <Table dark>
 
     <thead style={{justifyContent:'center' ,alignItems:'center'}}>
     <tr>
         <th>Sr no</th>
         <th> Name</th> 
         <th> Address</th>
         <th> pincode</th>
         <th> Actions</th>
         <th>  <Button onClick={this.addtoggle} outline color="success">Add Item</Button></th>
         {/* const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>; */}
       </tr>
       </thead>
      

   <tbody style={{justifyContent:'center' ,alignItems:'center'}}>
   
   {this.props.data && this.props.data.map((details,index)=>{
      return[
       <tr key={index}>
       <td key={index}>{details.SrNo}</td>
       <td key={index}>{details.name}</td>
       <td key={index} >{details.address}</td>
       <td key={index} >{details.pincode}</td>
      
       <td key = {index}><Button onClick={this.edittoggle} outline color="primary">Edit Item</Button></td>
       <td key = {index}><Button onClick={this.deletetoggle} outline color="danger">Delete Item</Button>
       <Row>
         {/* For Adding the Data: */}
       <Modal isOpen={this.state.addModal} toggle={this.addtoggle} className={this.props.className}>
       <ModalHeader toggle={this.addtoggle} >Add Item</ModalHeader>
          <ModalBody>
          <Label for="Name">Name</Label>
          <Input type="name" name="Name" value={Name} id="Name" placeholder="Enter the Name"  onChange={this.addtoggle}/>

          <Label for="Address">Address</Label>
          <Input type="textarea" name="Address" id="Address" value={Address} placeholder="enter a Valid Address" onChange={this.addtoggle} />

          <Label for="Pincode">Pincode</Label>
          <Input type="integer" name="Pincode" id="Pincode" value={Pincode} placeholder="Enter the pincode here" onChange={this.addtoggle} />
         
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.addtoggleData}>Add Data</Button>{' '}
            <Button color="danger" onClick={this.addtoggle}>Cancel</Button>
          </ModalFooter>
       </Modal>

        {/* For Editing the Data: */}
        <Modal isOpen={this.state.editModal} toggle={this.edittoggle} className={this.props.className}>
       <ModalHeader toggle={this.edittoggle} >Edit Item</ModalHeader>
          <ModalBody>
          <Label for="Name">Name</Label>
          <Input type="name" name="name" id="Name" placeholder="Enter the Name" />

          <Label for="Address">Address</Label>
          <Input type="textarea" name="Address" id="Address" placeholder="enter a Valid Address" />

          <Label for="Pincode">Pincode</Label>
          <Input type="integer" name="Pincode" id="Pincode" placeholder="Enter the pincode here" />
         
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.edittoggle}>Add Data</Button>{' '}
            <Button color="primary" onClick={this.edittoggle}>Cancel</Button>
          </ModalFooter>
       </Modal>
       
        {/* For Deleting the Data the Data: */}
        <Modal isOpen={this.state.deleteModal} toggle={this.deletetoggle} className={this.props.className}>
       <ModalHeader toggle={this.deletetoggle} >Add Item</ModalHeader>
          <ModalBody>
          <Label for="warning">Are You sure , You want to delete this data??</Label>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.deletetoggle}>Add Data</Button>{' '}
            <Button color="success" onClick={this.deletetoggle}>Cancel</Button>
          </ModalFooter>
       </Modal>
     </Row>
  
       </td>
       {/* {/ <td key = {index}>{details.Body}</td> /}
       {/ <td key={index} >{details.Status}</td> /} */}
       {details.Status==="Succesful" ? (<font color="Green"><td>{details.Status}</td></font>) : (<font color="Red"><td>{details.Status}</td></font>)}
        </tr> ]
   })}
  
       </tbody>
  
     </Table>

    ):(<div></div>)}
 </div>

  );
}
}
const mapStateToProps = (state) => ({
data: state.data,
// console.log("")
}
//console.log("data",data)
)
// const mapStateToProps = ({reducer}) => {
//     console.log('mapStateToProps', reducer);
//     return {reducer}
// }
NewsItem = connect(mapStateToProps,{
  addData
})(NewsItem)
export default NewsItem;