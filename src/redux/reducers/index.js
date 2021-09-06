import axios from "axios";
import {
    GET_ARTICLES, POST_INVENTARIO, POST_EGRESOS, POST_FACTURAS,
    GET_CUADRE, GET_ID
} from "../actions";

const initialState = {
    allData: [],
    cuadreDiario: {},
    detail: {},
    inventarioForm: {
        descripcion: '',
        marca: '', presentacion: '',
        medidaunidad: '', piezaxcaja: 0,
        mts2xcaja: 0.0, cantidad: 0,
        mts2: 0.0, costo: 0.00,
        precioventa: 0.0, descuento1: 0.0,
        descuento2: 0.0, color: '',
        categoria: '', remision: '',
        fecha: '', proveedor: '',
        cancelado: false, notas: ''
    },
    egresosForm: {
        fecha: { type: 'date', name: 'fecha', title: 'Fecha' },
        tipocuenta: { type: 'text', name: 'tipocuenta', title: 'Tipo de Cuenta' },
        documento: { type: 'text', name: 'documento', title: 'Documento' },
        numerodocumento: { type: 'number', name: 'numerodocumento', title: 'Nro. Documento' },
        proveedor: { type: 'text', name: 'proveedor', title: 'Proveedor' },
        concepto: { type: 'text', name: 'concepto', title: 'Concepto' },
        monto: { type: 'number', name: 'monto', title: 'Monto', decimals: true },
        cancelado: { type: 'text', name: 'cancelado', title: 'Cancelado' },
        formapago: { type: 'text', name: 'formapago', title: 'Forma de Pago' },
        tiendaId: { type: 'number', name: 'tiendaId', title: 'Tienda', decimals: false },
        notas: { type: 'text', name: 'notas', title: 'Notas' }
    },
    ventasForm: {
        numerofactura: 0,
        fecha: '',
        cliente: '',
        telefono: '',
        direccion: '',
        ciudad: '',
        cantidad: 0.0,
        articulo: '',
        precioventa: '',
        iva: 0.0,
        total: 0.0,
        tiendaId: 0
    },
    forma: {
        numerofactura: { type: 'number', name: 'numerofactura', title: 'Nro. Factura', decimals: false },
        fecha: { type: 'date', name: 'fecha', title: 'Fecha' },
        cliente: { type: 'text', name: 'cliente', title: 'Cliente' },
        telefono: { type: 'text', name: 'telefono', title: 'Teléfono' },
        direccion: { type: 'text', name: 'direccion', title: 'Dirección' },
        ciudad: { type: 'text', name: 'ciudad', title: 'Ciudad' },
        cantidad: { type: 'number', name: 'cantidad', title: 'Cantidad', decimals: true },
        articulo: { type: 'text', name: 'articulo', title: 'Artículo' },
        precioventa: { type: 'number', name: 'precioventa', title: 'Precio', decimals: true },
        iva: { type: 'number', name: 'iva', title: 'I.V.A.', decimals: true },
        total: { type: 'number', name: 'total', title: 'Total', decimals: true },
        tiendaId: { type: 'number', name: 'tiendaId', title: 'Tienda' }
    }
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        
        case GET_ARTICLES:
            console.log('GET_ARTICLES::::', state)
            return {
                ...state,
                allData: action.payload,
            }

        case GET_ID:
            return {
                ...state,
                detail: action.payload
            }

        case POST_INVENTARIO:
            return (dispatch) => {
                dispatch({
                    type: POST_INVENTARIO,
                    payload: action.payload
                });
                axios.post("http://localhost:3001/inventario", action.payload)
                    .then(
                        console.log('se envió el paquete')
                        // response => dispatch({type : "REQUEST_SUCCEEDED", payload : response}),
                        // error => dispatch({type : "REQUEST_FAILED", error : error})            
                    );
            }

        case POST_EGRESOS:
            return (dispatch) => {
                dispatch({
                    type: POST_EGRESOS,
                    payload: action.payload
                });
                axios.post("http://localhost:3001/egresos", action.payload)
                    .then(
                        console.log('se envió el paquete de egresoss')
                        // response => dispatch({type : "REQUEST_SUCCEEDED", payload : response}),
                        // error => dispatch({type : "REQUEST_FAILED", error : error})            
                    );
            }

        case POST_FACTURAS:
            return (dispatch) => {
                dispatch({
                    type: POST_FACTURAS,
                    payload: action.payload
                });
                axios.post("http://localhost:3001/ventas", action.payload)
                    .then(
                        console.log('se envió el paquete de egresoss')
                        // response => dispatch({type : "REQUEST_SUCCEEDED", payload : response}),
                        // error => dispatch({type : "REQUEST_FAILED", error : error})            
                    );
            }

        case GET_CUADRE:
            return {
                ...state,
                cuadreDiario: action.payload
            }

        default:
            return state;
    }
}

