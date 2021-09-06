import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import ComponentForm from './ComponentForm';
import SearchArticles from './SearchArticles';
import Details from "./Details";
import Egresos from "./Egresos";
import Facturas from "./Facturas";
import Cuadre from "./Cuadre";
// import Forma from "./Forma";
import Fact from "./Fact";
import Facturar from "./Facturar";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/detalles/:id" >
                        <Details /> 
                    </Route>
                    <Route path="/inventario">
                        Inventario
                        <ComponentForm />
                    </Route>
                    <Route path="/facturar">
                        <Facturar />
                    </Route>
                    <Route path="/forma">
                        Facturas
                        <Fact />
                    </Route>
                    <Route path="/busqueda">
                        Busqueda
                        <SearchArticles />
                    </Route>
                    <Route path="/ventas">
                        Facturas
                        <Facturas />
                    </Route>
                    <Route path="/egresos">
                        Egresos
                        <Egresos />
                    </Route>
                    <Route path="/cuadre">
                        {/* <Cuadre /> */}
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}
