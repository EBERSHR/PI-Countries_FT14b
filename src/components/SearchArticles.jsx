import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ItemSearchComponent from './ItemSearchComponent';


export default function SearchArticles() {

    const allData = useSelector(state => state.allData);
    const [lista, setLista] = useState([]);

    // console.log('ALLDATA::::', allData)

    const handleOnChange = (e) => {
        let array = [];
        allData.map(element => {
            if (element.descripcion.toLowerCase().includes(e.target.value.toLowerCase())
            || element.presentacion.toLowerCase().includes(e.target.value.toLowerCase())
            ||element.color.toLowerCase().includes(e.target.value.toLowerCase())
            ||element.marca.toLowerCase().includes(e.target.value.toLowerCase())
            ) {
               array.push(element);
            }  
            return null;   
        })
        setLista(array);
        if (!e.target.value) {
            setLista([]);
        }
    }

    return (
        <div>
            <div>
                <input type="text" onChange={(e) => { handleOnChange(e) }} />
            </div>
            <div>
                {lista ? lista.map((l) => {
                    return (
                        <div key={l.id}>
                            <ItemSearchComponent
                                id={l.id}
                                producto={l.descripcion + ' ' + l.marca + ' ' + l.presentacion + ' ' + l.color + ' ' + l.precioventa + ' ' + l.cantidad  }
                            />
                        </div>

                    )
                }) : null}
            </div>
            <div></div>
        </div>
    )
}
