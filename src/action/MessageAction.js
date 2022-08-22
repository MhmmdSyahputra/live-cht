import axios from "axios";

export const GET_ALL_MESSAGE = "GET_ALL_MESSAGE"
export const GET_ALL_MESSAGE_IN = "GET_ALL_MESSAGE_IN"

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