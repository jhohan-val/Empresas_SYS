import axios from "axios";
import { useState } from "react"
/* import { useNavigate } from "react-router-dom"; */
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
    /* const navigate = useNavigate(); */
    
    const agregarProducto = async(e) => {
        e.preventDefault()
        const producto = {
            nombre, fragancia, referencia, tamaño, cantidad, fabricante
        }
        await axios.post(apiProductos, producto)
        /* navigate('/productos/tablaProductos') */
    }

    return(
        <section>
            <Header />
                <section className="registro">
                    <form onSubmit={agregarProducto} action="">
                        <h1 className="titulo">Registrando productos</h1>
                        <input value={nombre} onChange={(e)=> setNombre(e.target.value)} className="form-item" placeholder="Nombre" type="text" />
                        <input value={fragancia} onChange={(e)=> setFragancia(e.target.value)} className="form-item" placeholder="Tipo de fragancia" type="text" />
                        <input value={referencia} onChange={(e)=> setReferencia(e.target.value)} className="form-item" placeholder="Referencia" type="text" />
                        <input value={tamaño} onChange={(e)=> setTamaño(e.target.value)} className="form-item" placeholder="Tamaño" type="text" />
                        <input value={cantidad} onChange={(e)=> setCantidad(e.target.value)} className="form-item" placeholder="Cantidad" type="text" />
                        <input value={fabricante} onChange={(e)=> setFabricante(e.target.value)} className="form-item" placeholder="Fabricante" type="text" />
                        <input className="btn-form-productos" type="submit" value={"Agregar"}/>
                    </form>
                </section>
            <Footer />
        </section>

    )
}
export default FormularioProductos;