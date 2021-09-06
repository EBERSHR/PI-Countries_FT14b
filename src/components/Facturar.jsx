import React from 'react';
import '../styles/facturar.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function Facturar() {

    const itemFactura = useSelector(state => state.allData);
    console.log(itemFactura)
    const [busca, setBusca] = useState('');
    const [fact, setFactura] = useState();
    const [mapeo, setMapeo] = useState();

    const handleOnChange = (e) => {
        setBusca(e.target.value)
        let mp = [];
        itemFactura.map(element => {
            if (element.descripcion.toLowerCase().includes(busca.toLowerCase())) {
                mp.push(element);
            }
        });
        setMapeo(mp);
    }

    const setItem = (e) => {
        console.log(e.color);
    }

    return (
        <div className="facturarComponent">

            <div className="facturacionSpace">
                <div className="facturarItem">
                    <input type="number" className="itemCantidad" />
                    <input type="text" className="itemDescripcion" onChange={(e) => { handleOnChange(e) }} />
                    {/* <input type="number" className="itemPrecio" readOnly defaultValue="0.00" step="0.01" />          
                <input type="number" className="itemTotal"  readOnly defaultValue="0.00" step="0.01" />           */}
                </div>
                <div>
                    {
                        mapeo ? mapeo.map((element, index) => {
                            return(
                                <div key={element.id} name={element.color} onClick={(e) => { setItem(e) }}>
                                    {element.descripcion}
                                    {' '}
                                    {element.marca}
                                    {' '}
                                    {element.presentacion}
                                    {' '}
                                    {element.color}
                                </div>
                            )
                        }) : <div></div>
                    }
                </div>
            </div>
            <div className="factura">
                Factura



            </div>




        </div>
    )
}
