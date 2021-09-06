import axios from "axios";
import { getDatabase, ref, onValue, set } from "firebase/database";
import database from "../../db";


export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_CUADRE = 'GET_CUADRE';
export const POST_INVENTARIO = 'POST_INVENTARIO';
export const POST_EGRESOS = 'POST_EGRESOS';
export const POST_FACTURAS = 'POST_FACTURAS';
export const GET_ID = 'GET_ID';



// const referencia = ref(database, "Inventario")
// onValue(referencia, (snapshot) => {
//   const data = snapshot.val();
//   // updateStarCount(postElement, data);
//   console.log(data);
// } );


export const getArticlesServer = () => {
    const referencia = ref(database, "Inventario")

    return (dispatch) => {
        onValue(referencia, (snapshot) => {
            const data = snapshot.val();
            dispatch(
                {
                    type: GET_ARTICLES,
                    payload: data
                });
        }
        );

        // Código para el Servidor Express
        // return (dispatch) => {
        //     return axios.get('http://localhost:3001/inventario')
        //         .then(response => {
        //             dispatch({
        //                 type: GET_ARTICLES,
        //                 payload: response.data
        //             })
        //         });
        // }}
    }
}

export const getIdServer = (payload) => {
    const referencia = ref(database, `Inventario/${payload}`)

    return (dispatch) => {
        onValue(referencia, (snapshot) => {
            const data = snapshot.val();
            dispatch({
                type: GET_ID,
                payload: data
            });

        })
        // return axios.get(`http://localhost:3001/inventario/${payload}`)
        //     .then(response => {
        //         response = dispatch({
        //             type: GET_ID,
        //             payload: response.data
        //         })
        //     }
            // );

    }
}

export const getCuadreServer = (payload) => {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/cuadre/?fecha=${payload}`)
            .then(response => {
                response = dispatch({
                    type: GET_CUADRE,
                    payload: response.data
                });
            });
    }
}

export const postInventario = (payload) => {
    return (dispatch) => {
        dispatch({
            type: POST_INVENTARIO,
            payload: payload
        });
        axios.post("http://localhost:3001/inventario", payload)
            .then(
                console.log('se envió el paquete')
                // response => dispatch({type : "REQUEST_SUCCEEDED", payload : response}),
                // error => dispatch({type : "REQUEST_FAILED", error : error})            
            );
    }

}

export const postEgresos = (payload) => {
    return (dispatch) => {
        dispatch({
            type: POST_EGRESOS,
            payload: payload
        });
        axios.post("http://localhost:3001/egresos", payload)
            .then(
                console.log('se envió el paquete de egresoss')
                // response => dispatch({type : "REQUEST_SUCCEEDED", payload : response}),
                // error => dispatch({type : "REQUEST_FAILED", error : error})            
            );
    }

}

export const postFacturas = (payload) => {
    return (dispatch) => {
        dispatch({
            type: POST_FACTURAS,
            payload: payload
        });
        axios.post("http://localhost:3001/ventas", payload)
            .then(
                console.log('se envió el paquete de egresoss')
                // response => dispatch({type : "REQUEST_SUCCEEDED", payload : response}),
                // error => dispatch({type : "REQUEST_FAILED", error : error})            
            );
    }

}

