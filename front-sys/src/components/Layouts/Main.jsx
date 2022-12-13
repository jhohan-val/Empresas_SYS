import Login from "../Helpers/Login";
import Principal from "../Helpers/Principal";
import Clientes from "../Helpers/Clientes";
import Productos from "../Helpers/Productos";
import Proveedores from "../Helpers/Proveedores";
import { Routes, Route } from 'react-router-dom'

const Main = ()  =>{
    return (

    <main >
        <Routes>
            <Route /* LOGIN */ path="/" element={<section className="login"><Login/></section>}>
                <Route /* PRINCIPAL */ path="/" element={ <Principal/> }>
                    <Route /*CLIENTES */ path="/clientes" element={ <Clientes/> }/>
                    <Route /* PRODUCTOS */ path="/productos" element={ <Productos/> }/>
                    <Route /* PROVEEDORES */ path="/proveedores" element={ <Proveedores/> }/>
                </Route>
            </Route>
        </Routes>
    </main> 
    )
}

export default Main;

