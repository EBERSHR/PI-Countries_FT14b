import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import '../styles/forma.css';


const Forma = (props) => {

    const [entradas, setEntradas] = useState([]);
    const [entradasObj, setEntradasObj] = useState(props.table);
    let f = [];
    try {
        f = Object.values(props.table);
    } catch (error) { }

    useEffect(() => {
        setEntradas(f);
        setEntradasObj(props.table)
    }, []);

    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(props.action(entradasObj));
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
            <div className="formComponent">
                <form onSubmit={(e) => { handleOnSubmit(e) }}>
                    {entradas.map((ent, index) => {
                        let stp = '';
                        if (ent.decimals) { stp = '0.01' }

                        return (
                            <div key={index}>
                                <div key={index} className="inputTitle">
                                    {ent.title}
                                </div>
                                <div>
                                    <input key={index} type={ent.type} name={ent.name} placeholder={ent.name} step={stp} onChange={(e) => { handleOnChange(e) }} />

                                </div>
                            </div>
                        )
                    })}
                    <input type="submit" className="formButtom"/>
                </form>
            </div>
        )
    }

    return (
        <div>
            {formFactory()}
        </div>
    );
}

export default Forma;
