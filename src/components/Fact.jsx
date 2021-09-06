import React from 'react';
import { useSelector } from 'react-redux';
import { postFacturas } from '../redux/actions';
import Forma from './Forma';


export default function Fact() {

    const table = useSelector(state => state.forma)

    return (
        <div>
            <Forma
                table={table}
                action={postFacturas}
            />
        </div>
    )
}
