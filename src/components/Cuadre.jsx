import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getCuadreServer } from '../redux/actions';

export default function Cuadre() {

    let ventasDiarias = 0;
    let salidasDiarias = 0;

    const dispatch = useDispatch();
    const cuadreDiario = useSelector(state => state.cuadreDiario)
    console.log('CUADRE_DIARIO::::', cuadreDiario);

    const handleOnChange = (e) => {
        e.preventDefault();
        dispatch(getCuadreServer(e.target.value));
    }

    const history = useHistory();
    console.log('HISTORY:::', history.location.state);

    console.log('.............................', history.location.pathname);

    return (
        <div>
            <div>
                <input type="date" name="fecha" onChange={(e) => { handleOnChange(e) }} />
            </div>
            <div>
                VENTAS:
                {cuadreDiario && cuadreDiario.ventas ? cuadreDiario.ventas.map((ele, index) => {
                    let total = 0;
                    ventasDiarias = ventasDiarias + Number(ele.precioventa) * Number(ele.cantidad);
                    total = Number(ele.precioventa) * Number(ele.cantidad);
                    return (
                        <div key={index}>{ele.numerofactura}{" "}{ele.cantidad}{" "}{ele.articulo}{" "}{ele.precioventa}{" "}{total}</div>
                    )
                }) : <div></div>}
            </div>
            <div>
                EGRESOS:
                {cuadreDiario && cuadreDiario.egresos ? cuadreDiario.egresos.map(ele => {
                    salidasDiarias = salidasDiarias + ele.monto;
                    return (
                        <div>{ele.proveedor}{" "}{ele.formapago}{" "}{ele.notas}{" "}{ele.monto}</div>
                    )
                }) : <div></div>}
                <div>
                    VENTAS: {ventasDiarias}
                </div>
                <div>
                    EGRESOS: {salidasDiarias}
                </div>
                <div>
                    EFECTIVO: {ventasDiarias - salidasDiarias}
                </div>
            </div>
        </div>
    )
}
