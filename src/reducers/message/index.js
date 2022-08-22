import { GET_ALL_MESSAGE } from "../../action/MessageAction"

const initialState = {
    getAllMessageResult: false,
    getAllMessageLoading: false,
    getAllMessageError: false
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

        default:
            return state;
    }
}

export default message