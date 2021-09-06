import React from 'react';
import { useHistory } from 'react-router-dom';


export default function ItemSearchComponent(props) {
    // const id = 12;
    let history = useHistory();

    const handleOnClick = (e) => {
        console.log(e.target.id, e.target.value);
        history.push(`/detalles/${e.target.id}`)
    }

    return (
        <div key={props.id} >
            {/* <a href="/detalles">{props.producto}</a> */}
            <input type="button" value={props.producto} onClick={(e) => { handleOnClick(e) }} id={props.id} />
        </div>
    )
}
