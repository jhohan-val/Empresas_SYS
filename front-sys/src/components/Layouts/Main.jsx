import Principal from "../Helpers/Principal";
import Clientes from "../Helpers/Clientes";
import Productos from "../Helpers/Productos";
import Proveedores from "../Helpers/Proveedores";
import { Routes, Route } from 'react-router-dom'

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
            {/* <Clientes/> */}     

            {/* PRODUCTOS */}
            <Productos/>

            {/* PROVEEDORES */}
            {/* <Proveedores/> */}

        </main >
    )
}

export default Main;

