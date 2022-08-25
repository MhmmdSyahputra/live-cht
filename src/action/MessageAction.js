import axios from "axios";
import {
    store
} from '../index'

export const GET_ALL_MESSAGE = "GET_ALL_MESSAGE"
export const GET_ALL_MESSAGE_IN = "GET_ALL_MESSAGE_IN"
export const ADD_MESSAGE_IN = "ADD_MESSAGE_IN"

// local
// const url = "http://localhost:3000/"

// deploy
const url = "https://my-json-server.typicode.com/MhmmdSyahputra/live-cht/"


export const getAllMessage = () => {
    // console.log("2. Masuk Action");
    return (dispatch) => {

        // loading
        dispatch({
            type: GET_ALL_MESSAGE,
            payload: {
                loading: true,
                data: false,
                errormessage: false
            }
        })

        //get api
        axios({
                method: 'GET',
                url: url + 'room',
                timeout: 120000
            })
            .then((response) => {
                // console.log("3. berhasil dapet data", response.data);
                //berhasil get api
                dispatch({
                    type: GET_ALL_MESSAGE,
                    payload: {
                        loading: false,
                        data: response.data,
                        errormessage: false
                    }
                })
            })
            .catch((error) => {
                // console.log("3. gagal dapet data", error);
                //gagal get api
                dispatch({
                    type: GET_ALL_MESSAGE,
                    payload: {
                        loading: false,
                        data: false,
                        errormessage: error.message
                    }
                })
            })
    }
}
export const getAllPesanIn = (id) => {
    // console.log("2. Masuk Action");
    return (dispatch) => {

        // loading
        dispatch({
            type: GET_ALL_MESSAGE_IN,
            payload: {
                loading: true,
                data: false,
                errormessage: false
            }
        })

        //get api
        axios({
                method: 'GET',
                url: url + 'room?id=' + id,
                timeout: 120000
            })
            .then((response) => {
                // console.log("3. berhasil dapet data", response.data);
                //berhasil get api
                dispatch({
                    type: GET_ALL_MESSAGE_IN,
                    payload: {
                        loading: false,
                        data: response.data,
                        errormessage: false
                    }
                })
            })
            .catch((error) => {
                // console.log("3. gagal dapet data", error);
                //gagal get api
                dispatch({
                    type: GET_ALL_MESSAGE_IN,
                    payload: {
                        loading: false,
                        data: false,
                        errormessage: error.message
                    }
                })
            })
    }
}

export const sendMessage = (data) => {
    // console.log("2. Masuk Action");
    const prveMessage = store.getState().MessageReducer.getAllMessageInResult[0].allmessage
    const idroom = store.getState().MessageReducer.getAllMessageInResult[0].id
    // console.log(store.getState().MessageReducer.getAllMessageInResult[0].allmessage)
    return (dispatch) => {

        // loading
        dispatch({
            type: ADD_MESSAGE_IN,
            payload: {
                loading: true,
                data: false,
                errormessage: false
            }
        })
        prveMessage.push(data)
        //get api
        axios({
                method: 'PATCH',
                url: url + 'room/' + idroom,
                timeout: 120000,
                data: {
                    allmessage: prveMessage
                }
            })
            .then((response) => {
                // console.log("3. berhasil dapet data", response.data);
                //berhasil get api
                dispatch({
                    type: ADD_MESSAGE_IN,
                    payload: {
                        loading: false,
                        data: response.data,
                        errormessage: false
                    }
                })
            })
            .catch((error) => {
                // console.log("3. gagal dapet data", error);
                //gagal get api
                dispatch({
                    type: ADD_MESSAGE_IN,
                    payload: {
                        loading: false,
                        data: false,
                        errormessage: error.message
                    }
                })
            })
    }
}