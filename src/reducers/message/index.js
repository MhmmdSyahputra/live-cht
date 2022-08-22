import { GET_ALL_MESSAGE, GET_ALL_MESSAGE_IN } from "../../action/MessageAction"

const initialState = {
    getAllMessageResult: false,
    getAllMessageLoading: false,
    getAllMessageError: false,

    getAllMessageInResult: false,
    getAllMessageInLoading: false,
    getAllMessageInError: false,

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

        default:
            return state;
    }
}

export default message