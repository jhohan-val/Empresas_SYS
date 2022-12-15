import AsideProductos from "../Asides/AsideProductos";
import BtnEditar from "../Botones/BtnEditar";
import BtnEliminar from "../Botones/BtnEliminar";
import axios from 'axios';
import { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

const apiProductos = "http://localhost:2002/productos";

const TablaProductos = () => {
    const [productos, setProductos] = useState([]);
    
    useEffect(()=>{
        listarProductos();
    }, []);

    const listarProductos = async () =>{
        const response = await axios.get(apiProductos);
        setProductos(response.data);
        console.log(response.data);
    }
    return(
        <section>
            <Header />
                <section className="productos" id="productos">
                    <AsideProductos/> 
                    <table className="tabla-productos" id="tabla-productos">
                        <thead className="thead">
                            <tr className="tr">
                                <td className="td-productos">Nombre</td>
                                <td className="td-productos">Fragancia</td>
                                <td className="td-productos">Referencia</td>
                                <td className="td-productos">Tamaño</td>
                                <td className="td-productos">Cantidad</td>
                                <td className="td-productos">Fabricante</td>
                                <td className="td-productos">Acción</td>
                            </tr>
                        </thead>
                        <tbody className="tbody">
                            {productos.map((productos)=> {
                                <tr key={productos.id} className="tr">
                                    <td className="td-productos">{productos.nombre}</td>
                                    <td className="td-productos">{productos.fragancia}</td>
                                    <td className="td-productos">{productos.referencia}</td>
                                    <td className="td-productos">{productos.tamaño}</td>
                                    <td className="td-productos">{productos.cantidad}</td>
                                    <td className="td-productos">{productos.fabricante}</td>
                                    <td className="d-flex">
                                        <BtnEliminar/>
                                        <BtnEditar/>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </section>
            <Footer />
        </section>
    )
}

export default TablaProductos;