import axios from "axios";
import { store } from '../index'
import swal from 'sweetalert';

export const GET_ALL_MESSAGE = "GET_ALL_MESSAGE"
export const GET_ALL_MESSAGE_IN = "GET_ALL_MESSAGE_IN"
export const ADD_MESSAGE_IN = "ADD_MESSAGE_IN"
export const GET_USER = "GET_USER"
export const GET_ALL_USER = "GET_ALL_USER"
export const ADD_USER = "ADD_USER"

// local
const url = "http://localhost:3000/"

// deploy
// const url = "https://my-json-server.typicode.com/MhmmdSyahputra/live-cht/"

export const addUser = (data) => {
    return (dispatch) => {

        // loading
        dispatch({
            type: ADD_USER,
            payload: {
                loading: true,
                data: false,
                errormessage: false
            }
        })
        //get api
        axios({
            method: 'POST',
            url: url + 'user/',
            timeout: 120000,
            data: data
        })
            .then((response) => {
                // console.log("3. berhasil dapet data", response.data);
                //berhasil get api
                dispatch({
                    type: ADD_USER,
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
                    type: ADD_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errormessage: error.message
                    }
                })
            })
    }
}

export const getUser = (uid) => {
    // console.log("2. Masuk Action");
    return (dispatch) => {

        // loading
        dispatch({
            type: GET_USER,
            payload: {
                loading: true,
                data: false,
                errormessage: false
            }
        })

        //get api
        axios({
            method: 'GET',
            url: url + 'user?uid=' + uid,
            timeout: 120000
        })
            .then((response) => {
                // console.log("3. berhasil dapet data", response.data);
                //berhasil get api
                dispatch({
                    type: GET_USER,
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
                    type: GET_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errormessage: error.message
                    }
                })
            })
    }
}
export const getAllUser = () => {
    // console.log("2. Masuk Action");
    return (dispatch) => {

        // loading
        dispatch({
            type: GET_ALL_USER,
            payload: {
                loading: true,
                data: false,
                errormessage: false
            }
        })

        //get api
        axios({
            method: 'GET',
            url: url + 'user',
            timeout: 120000
        })
            .then((response) => {
                // console.log("3. berhasil dapet data", response.data);
                //berhasil get api
                dispatch({
                    type: GET_ALL_USER,
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
                    type: GET_ALL_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errormessage: error.message
                    }
                })
            })
    }
}


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

export const addNewKontak = (data) => {
    // console.log("2. Masuk Action");
    const prveMessage = store.getState().MessageReducer.getUserResult[0].mykontak
    const id = store.getState().MessageReducer.getUserResult[0].id
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
        // get api
        axios({
            method: 'PATCH',
            url: url + 'user/' + id,
            timeout: 120000,
            data: {
                mykontak: prveMessage
            }
        })
            .then((response) => {
                // console.log("3. berhasil dapet data", response.data);
                //berhasil get api
                swal({
                    title: "Sukses",
                    text: "Berhasil Ditambah Ke kontak",
                    icon: "success",
                    button: "Oke"
                })
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