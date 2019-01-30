import { put, takeLatest, all } from 'redux-saga/effects';
import { recievedData } from '../actions/index'

function* fetchData() {

  const data=[
    {
        SrNo:1,
        name:"Karan",
        address:"Ahmedabad",
        pincode:"364001",
        actions:"Succesful"

    },
    {
        SrNo:2,
        name:"Parth",
        address:"Bhavnagar",
        pincode:"364002",
        actions:"Succesful"
    },
    {
      SrNo:3,
      name:"Bharat Bham",
      address:"Agra",
      pincode:"364003",
      actions:"Failed"
    }
]
yield put(recievedData(data));
console.log("Saaga",data)
}

function* displaydata(){
    yield takeLatest('ADD_DATA',displaydata)
}

function* actionWatcher() {
     yield takeLatest('GET_DATA', fetchData)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   displaydata()
   ]);
}