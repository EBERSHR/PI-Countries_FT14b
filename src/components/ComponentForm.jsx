import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postInventario } from '../redux/actions';


const ComponentForm = () => {

    const table = useSelector(state => {
        console.log('useSelector(ComponentForm)', state);
        return state.inventarioForm})

    console.log('TABLA EN COMPONENT FORM', table);

    const [entradas, setEntradas] = useState([]);
    const [entradasName, setEntradasName] = useState([]);
    const [entradasObj, setEntradasObj] = useState(table);
    let f = [];
    let en = [];
    try {
        f = Object.values(table);
        en = Object.keys(table);

    } catch (error) { }

    useEffect(() => {
        setEntradas(f);
        setEntradasName(en);
        setEntradasObj(table)
    }, []);
    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(entradasObj);
        // dispatch(addTest(entradasObj));
        dispatch(postInventario(entradasObj));                                        // hacer el dispatch
    }

    const handleOnChange = (e) => {
        console.log(e.target.value);
        setEntradasObj(
            {
                ...entradasObj,
                [e.target.name]: e.target.value
            }
        )
    }

    const formFactory = () => {
        return (
            <>
                <form onSubmit={(e) => { handleOnSubmit(e) }}>
                    {entradas.map((ent, index) => {

                        if (typeof ent === 'string') {
                            return (<input key={index} type="text" name={entradasName[index]} placeholder={entradasName[index]} onChange={(e) => { handleOnChange(e) }} />)
                        }
                        if (typeof ent === 'number') {
                            return (<input key={index} type="number" name={entradasName[index]} placeholder={entradasName[index]} onChange={(e) => { handleOnChange(e) }} />)
                        }

                    })}
                    <input type="submit" />
                </form>
            </>
        )
    }

    return (
        <div>
            {formFactory()}
        </div>
    );
}

export default ComponentForm;
