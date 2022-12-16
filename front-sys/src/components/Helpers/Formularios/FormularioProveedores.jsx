import axios from "axios"
import { useState } from "react"
/* import { useNavigate } from "react-router-dom" */
import Footer from "../Footer";
import Header from "../Header";

const apiProveedores = "http://localhost:2002/proveedores";

const FormularioProveedores = () => {
    const [nombre, setNombre] = useState("") 
    const [nit, setNit] = useState("") 
    const [correo, setCorreo] = useState("") 
    const [direccion, setDireccion] = useState("") 
    const [telefono, setTelefono] = useState("") 
    const [producto, setProducto] = useState("") 
    /* const navigate = useNavigate(); */

    const agregarProveedor = async(e) => {
        e.preventDefault()
        const proveedor = {
            nombre, nit, correo, direccion, telefono, producto
        }
        await axios.post(apiProveedores, proveedor)
        /* navigate('/proveedores/tablaProveedores') */
    }

    return(
        <section>
            <Header />
                <section className="registro">
                    <form onSubmit={agregarProveedor} action="">
                        <h1 className="titulo">Registrando proveedores</h1>
                        <input value={nombre} onChange={(e)=> setNombre(e.target.value)} className="form-item" placeholder="Nombre" type="text" />
                        <input value={nit} onChange={(e)=> setNit(e.target.value)} className="form-item" placeholder="Nit" type="text" />
                        <input value={correo} onChange={(e)=> setCorreo(e.target.value)} className="form-item" placeholder="Correo" type="email" />
                        <input value={direccion} onChange={(e)=> setDireccion(e.target.value)} className="form-item" placeholder="Dirección" type="text" />
                        <input value={telefono} onChange={(e)=> setTelefono(e.target.value)} className="form-item" placeholder="Teléfono" type="tel" />
                        <input value={producto} onChange={(e)=> setProducto(e.target.value)} className="form-item" placeholder="Producto" type="text" />
                        <input className="btn-form-proveedores" type="submit" value={"Agregar"}/>
                    </form>
                </section>
            <Footer />
        </section>
    )
}

export default FormularioProveedores;