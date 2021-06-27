const url = "http://localhost:3000/api/v1/messages/index"

export const addMessage = (message) => ({ type: "ADDED_MESSAGE", payload: message });
export const setMessages = (messages) => ({type: "GOT_MESSAGES", payload: messages})

export const fetchMessages = () => {
    console.log("B")
    return (dispatch) => {
        dispatch({type: "LOADING"})
        fetch(url)
        .then(res => res.json())
        .then(json => {
            dispatch(setMessages(json))
            console.log("F")
        })
        console.log("C")
    }
}
//crud
export const createMessage = (message) => {
   return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(message)
        }
        fetch(url, configObj)
        .then(res => res.json())
        .then(json => {
            dispatch(addMessage(json))
            console.log("F")
        })
       console.log("C")
    }
}
