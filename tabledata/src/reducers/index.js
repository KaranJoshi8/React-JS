const reducer = (state = {}, action) => {
    switch(action.type){
        case 'GET_DATA':
            return{...state,}
        case 'DATA_RECIEVED':
            return { ...state, data: action.json}
       default: 
            return state;
    }
};
export default reducer;