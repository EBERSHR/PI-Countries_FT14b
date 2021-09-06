import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navBar.css';

export default function NavBar() {
    return (
        <div className="navBar">
            <div className="navBarList">
            <ul>
            <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/facturar" activeClassName="active">Facturar</NavLink>
                </li>
                <li>
                    <NavLink exact to="/inventario" activeClassName="active">Inventario</NavLink>
                </li>
                <li>
                    <NavLink exact to="/busqueda" activeClassName="active">Busqueda</NavLink>
                </li>
                <li>
                    <NavLink exact to="/ventas">Facturación</NavLink>
                </li>
                <li>
                    <NavLink exact to="/egresos">Egresos</NavLink>
                </li>
                <li>
                    <NavLink exact to="/cuadre">Cuadre Diario</NavLink>
                </li>
                <li>
                    <NavLink exact to="/forma">Formulario</NavLink>
                </li>
            </ul>

            </div>
        </div>
    );
}
