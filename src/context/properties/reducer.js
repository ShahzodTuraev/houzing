const reducer =(state, {payload, type})=>{
    switch(type){
        case 'refetch': 
            return {...state, refetch: payload};
        default: 
            return state;
    }
}

export default reducer;