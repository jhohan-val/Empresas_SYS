import Principal from "../Helpers/Principal";
<<<<<<< HEAD
=======
import Clientes from "../Helpers/Clientes";
import Productos from "../Helpers/Productos";
import Proveedores from "../Helpers/Proveedores";
import { Routes, Route } from 'react-router-dom'
import LogoHeader from "../Helpers/imagenes/LogoHeader";
import TablaClientes from "../Helpers/Tablas/TablaClientes";
import TablaProductos from "../Helpers/Tablas/TablaProductos";
import TablaProveedores from "../Helpers/Tablas/TablaPoveedores";
>>>>>>> 55841c11e5fc8762f31404912098598e132a49cb

const Main = () => {
    return (
        <main >
<<<<<<< HEAD
            <Principal />
=======

        {/* ---------------------------------RUTEOS---------------------------------------- */}
            {/* <Routes> */}
            {/* <Route PRINCIPAL /* path="/" element={ <Principal/> }> */}
            {/* <Route  path="/clientes" element={<Clientes />} /> */}
            {/* <Route PRODUCTOS path="/productos" element={<Productos />} /> */}
            {/* <Route PROVEEDORES path="/proveedores" element={<Proveedores />} /> */}
            {/* </Route> */}
            {/* </Routes> */}
        {/* ------------------------------------------------------------------------------- */}
        
            {/* PRINCIPAL */}
            {/* <Principal /> */}

            {/*CLIENTES */}
            {/* <Clientes/>  */}
            {/* <TablaClientes/> */}

            {/* PRODUCTOS */}
            {/* <Productos/> */}
            <TablaProductos/>

            {/* PROVEEDORES */}
            {/* <Proveedores/> */}
            {/* <TablaProveedores/> */}

>>>>>>> 55841c11e5fc8762f31404912098598e132a49cb
        </main >
    )
}

export default Main;