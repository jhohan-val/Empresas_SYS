import Principal from "../Helpers/Principal";
import Clientes from "../Helpers/Clientes";
import Productos from "../Helpers/Productos";
import Proveedores from "../Helpers/Proveedores";
import { Routes, Route } from 'react-router-dom'
import LogoHeader from "../Helpers/imagenes/LogoHeader";
import TablaClientes from "../Helpers/Tablas/TablaClientes";
import TablaProductos from "../Helpers/Tablas/TablaProductos";
import TablaProveedores from "../Helpers/Tablas/TablaPoveedores";

const Main = () => {
    return (

        <main >

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
            <TablaClientes/>

            {/* PRODUCTOS */}
            {/* <Productos/> */}
            {/* <TablaProductos/> */}

            {/* PROVEEDORES */}
            {/* <Proveedores/> */}
{/*             <TablaProveedores/>
 */}
        </main >
    )
}

export default Main;

