import Login from "../Helpers/Login";
import Principal from "../Helpers/Principal";
import Clientes from "../Helpers/Clientes";
import Productos from "../Helpers/Productos";
import Proveedores from "../Helpers/Proveedores";
import { Routes, Route } from 'react-router-dom'

const Main = () => {
    return (

        <main >
            {/* <Routes> */}
            {/*  <Route LOGIN  path="/" element={<section className="login"><Login /></section>}> */}
            {/* <Route PRINCIPAL /* path="/" element={ <Principal/> }> */}
            {/* <Route  path="/clientes" element={<Clientes />} /> */}
            {/* <Route PRODUCTOS path="/productos" element={<Productos />} /> */}
            {/* <Route PROVEEDORES path="/proveedores" element={<Proveedores />} /> */}
            {/* </Route> */}
            {/*  </Route> */}
            {/* </Routes> */}
        {/* ------------------------------------------------------------------------------- */}
            {/* LOGIN */}
            {/* <section className="login">
                    <Login/>
                </section> */}

            {/* PRINCIPAL */}
            {/* <Principal /> */}

            {/*CLIENTES */}
            <Clientes/>     

            {/* PRODUCTOS */}
            {/* <Productos/> */}

            {/* PROVEEDORES */}
            {/* <Proveedores/> */}

        </main >
    )
}

export default Main;

