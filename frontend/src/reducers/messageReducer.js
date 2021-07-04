const messageReducer = (state = { messages: [], loading: false }, action) => {
    switch(action.type){
        case "GOT_MESSAGES":
            console.log("E")
            return {...state, messages: action.payload, loading: true}
        case "ADDED_MESSAGES":
            return { ...state, messages: [...state.messages, action.payload] }
        case "LOADING":
            return  {...state, loading: false }
        default:
            return state
    }
}

export default messageReducer
