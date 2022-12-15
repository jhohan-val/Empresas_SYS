import AsideProductos from "../Asides/AsideProductos";
import BtnEditar from "../Botones/BtnEditar";
import BtnEliminar from "../Botones/BtnEliminar";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const apiProductos = " http://localhost:2002/productos";

const TablaProductos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        listarProductos();
    }, []);

    const listarProductos = async () => {
        const response = await axios.get(apiProductos);
        setProductos(response.data);
        console.log(response.data);
    };


    return(
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
                {productos.map((productos) => (
                        <tr className="text-center" key={productos.id}>
                            <td>{productos.nombre}</td>
                            <td>{productos.fragancia}</td>
                            <td>{productos.referencia}</td>
                            <td>{productos.tamaño}</td>
                            <td>{productos.cantidad}</td>
                            <td>{productos.fabricante}</td>
                            <td className="d-flex">
                            <BtnEliminar />
                            <BtnEditar />
                        </td>
                        </tr>
                        ))}
                </tbody>
            </table>
        </section>
    )
}

export default TablaProductos;