import {
    GET_ALL_MESSAGE,
    GET_ALL_MESSAGE_IN,
    ADD_MESSAGE_IN,
    ADD_USER,
    GET_USER,
    GET_ALL_USER,
    ADD_NEW_ROOM,
} from "../../action/MessageAction"

const initialState = {
    getAllMessageResult: false,
    getAllMessageLoading: false,
    getAllMessageError: false,

    getAllMessageInResult: false,
    getAllMessageInLoading: false,
    getAllMessageInError: false,

    sendMessageInResult: false,
    sendMessageInLoading: false,
    sendMessageInError: false,

    addUserResult: false,
    addUserLoading: false,
    addUserError: false,

    getUserResult: false,
    getUserLoading: false,
    getUserError: false,

    getAllUserResult: false,
    getAllUserLoading: false,
    getAllUserError: false,

    addNewRoomResult: false,
    addNewRoomLoading: false,
    addNewRoomError: false,

    
    
}

const message = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_MESSAGE:
            // console.log("4. masuk reducer");
            return {
                ...state,
                getAllMessageResult: action.payload.data,
                getAllMessageLoading: action.payload.loading,
                getAllMessageError: action.payload.errormessage
            }
        case GET_ALL_MESSAGE_IN:
            // console.log("4. masuk reducer");
            return {
                ...state,
                getAllMessageInResult: action.payload.data,
                getAllMessageInLoading: action.payload.loading,
                getAllMessageInError: action.payload.errormessage
            }
        case ADD_MESSAGE_IN:
            // console.log("4. masuk reducer");
            return {
                ...state,
                sendMessageInResult: action.payload.data,
                sendMessageInLoading: action.payload.loading,
                sendMessageInError: action.payload.errormessage
            }
        case ADD_USER:
            // console.log("4. masuk reducer");
            return {
                ...state,
                addUserResult: action.payload.data,
                addUserLoading: action.payload.loading,
                addUserError: action.payload.errormessage
            }
        case GET_USER:
            // console.log("4. masuk reducer");
            return {
                ...state,
                getUserResult: action.payload.data,
                getUserLoading: action.payload.loading,
                getUserError: action.payload.errormessage
            }
        case GET_ALL_USER:
            // console.log("4. masuk reducer");
            return {
                ...state,
                getAllUserResult: action.payload.data,
                getAllUserLoading: action.payload.loading,
                getAllUserError: action.payload.errormessage
            }

        case ADD_NEW_ROOM:
            // console.log("4. masuk reducer");
            return {
                ...state,
                addNewRoomResult: action.payload.data,
                addNewRoomLoading: action.payload.loading,
                addNewRoomError: action.payload.errormessage
            }
       

        default:
            return state;
    }
}

export default message