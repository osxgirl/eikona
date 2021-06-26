const messageReducer = (state = { messages: [], loading: false }, action) => {
    switch(action.type){
        case "GOT_MESSAGES":
            console.log("E")
            return {...state, messages: action.payload, loading: false}
        case "ADDED_MESSAGE":
            return { ...state, messages: [...state.messagess, action.payload] }
        case "LOADING":
            return  {...state, loading: true }
        default:
            return state
    }
}

export default messageReducer
