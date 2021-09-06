import React from 'react';
import { postEgresos } from '../redux/actions';
import Forma from './Forma';
import { useSelector } from 'react-redux';


export default function Egresos() {

    const table = useSelector(state => {
        // return state[`${forma.table}`];
        return state.egresosForm;
    })

    return (
        <div>
            Egresos
            <Forma
                table={table}
                action={postEgresos}
            />
        </div>
    )
}


// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { postEgresos } from '../redux/actions';

// const Egresos = () => {

//     const table = useSelector(state => {
//         // return state[`${forma.table}`];
//         return state.egresosForm;                                            // llamar el modelo
//    })


//     const [entradas, setEntradas] = useState([]);
//     const [entradasName, setEntradasName] = useState([]);
//     const [entradasObj, setEntradasObj] = useState(table);
//     let f = []; 
//     let en = [];
//     try {
//         f = Object.values(table);
//         en = Object.keys(table);

//     } catch (error) {}

//     useEffect(() => {
//         setEntradas(f);
//         setEntradasName(en);
//         setEntradasObj(table)
//     }, []);
//     const dispatch = useDispatch();

//     const handleOnSubmit = (e) => {
//         e.preventDefault();
//         // console.log(entradasObj);
//         // dispatch(addTest(entradasObj));
//         dispatch(postEgresos(entradasObj));                                        // hacer el dispatch
//     }

//     const handleOnChange = (e) => {
//         // console.log(e.target.value);
//         setEntradasObj(
//             {
//                 ...entradasObj,
//                 [e.target.name]: e.target.value
//             }
//         )
//     }

//     const formFactory = () => {
//         return (
//             <>
//                 <form onSubmit={(e) => { handleOnSubmit(e) }}>
//                     {/* <input type="date" /> */}
//                     {entradas.map((ent, index) => {

//                             if (typeof ent === 'string') {
//                                 return (<input key={index} type="text" name={entradasName[index]} placeholder={entradasName[index]} onChange={(e) => { handleOnChange(e) }} />)
//                             }
//                             if (typeof ent === 'number') {
//                                 return (<input key={index} type="number" name={entradasName[index]} placeholder={entradasName[index]} onChange={(e) => { handleOnChange(e) }} />)
//                             }

//                     })}
//                     <input type="submit" />
//                 </form>
//             </>
//         )
//     }

//     return (
//         <div>
//             {formFactory()}
//         </div>
//     );
// }

// export default Egresos;
