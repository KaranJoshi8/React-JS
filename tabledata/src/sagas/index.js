import { put, takeLatest, all } from 'redux-saga/effects';
import {dataRecived} from'../action/index'

function* fetchData()
{
    const data=[
        {
            Srno:"xyz@SpeechGrammarList.com",
            name:"Work Regarding",
            address:"20-1-2019",
            pincode:"Hello abc I am writing this mail for last work regarding",
            actions:"Succesful"
    
        },
        {
            Srno:"abc@SpeechGrammarList.com",
            name:"Funtion ",
            address:"22-1-2019",
            pincode:"I am write this mail to you for fuction invitetion",
            actions:"Succesful"
       
        },
        {
            Srno:"def@SpeechGrammarList.com",
            name:"Convocation ",
            address:"22-1-2019",
            pincode:"I am write this mail to you for Convocation invitetion",
            actions:"Failed"
       
        }
    ]
    yield put(dataRecived(data));
  

}

function* action(){
   
 yield takeLatest("GET_Data",fetchData);

}

export default function* rootSaga() {
    yield all([
      action(),
       
    ]);
  }