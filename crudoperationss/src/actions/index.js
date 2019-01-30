export const getData = (data) => ({
    type: 'GET_DATA',
    paylaod:data
});

export const recievedData = (data) => ({
    type: 'RECIEVED_DATA',
    payload: data
});

export const addData = (data) => ({
    type:'ADD_DATA' , 
    payload: data
})