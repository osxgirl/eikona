const url = "http://localhost:3000/api/v1/messages"

export const addMessage = (message) => ({ type: "ADDED_MESSAGE", payload: message });
export const setMessages = (messages) => ({type: "GOT_MESSAGES", payload: messages});


export const fetchMessages = () => {
    return (dispatch) => {
            dispatch({type: "LOADING"})
            fetch(url)
            .then(res => res.json())
            .then(json => {
                // instead of setState, we need to dispatch an action
                dispatch(setMessages(json)) // dispatching an action to the reducer
                console.log("F")
            })
            console.log("C")
            // responsible for dispatching the setToys action
        }
    }

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
        })
    }
}

