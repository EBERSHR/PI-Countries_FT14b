import React from 'react';
import { useParams } from 'react-router-dom';
import { getIdServer } from "../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


export default function Details() {
    let { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getIdServer(id));
    }, [dispatch])

    const detail = useSelector(state => state.detail)
    const {descripcion, costo, imagen } = detail;
    console.log('DETALLE:::::', detail);
    return (
        <div>
            {id}
            {descripcion}
            {costo}
            <img src={imagen} />

        </div>
    )
}
