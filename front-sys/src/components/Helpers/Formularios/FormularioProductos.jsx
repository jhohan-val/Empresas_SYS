import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const apiProductos = "http://localhost:2002/productos";

const FormularioProductos = () => {
    const [nombre, setNombre] = useState("") 
    const [fragancia, setFragancia] = useState("") 
    const [referencia, setReferencia] = useState("") 
    const [tamaño, setTamaño] = useState("") 
    const [cantidad, setCantidad] = useState("") 
    const [fabricante, setFabricante] = useState("") 
    const navigate = useNavigate();
    
    const agregarProducto = async(e) => {
        e.preventDefault()
        const producto = {
            nombre, fragancia, referencia, tamaño, cantidad, fabricante
        }
        await axios.post(apiProductos, producto)
        navigate('/productos/tablaProductos')
    }

    return(
        <section>
            <Header />
                <section className="registro">
                    <form action="">
                        <h1 className="titulo">Registrando Clientes</h1>
                        <input class="form-item" placeholder="Nombre" type="text" />
                        <input class="form-item" placeholder="Documento" type="text" />
                        <input class="form-item" placeholder="Correo" type="email" />
                        <input class="form-item" placeholder="Dirección" type="text" />
                        <input class="form-item" placeholder="Barrio" type="text" />
                        <input class="form-item" placeholder="Teléfono" type="tel" />
                        <input class="btn-form-clientes" type="submit" value="Agregar" />
                    </form>
                </section>
            <Footer />
        </section>

    )
}
export default FormularioProductos;