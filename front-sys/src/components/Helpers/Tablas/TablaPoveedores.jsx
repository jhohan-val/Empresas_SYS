
import BtnEditar from "../Botones/BtnEditar";
import BtnEliminar from "../Botones/BtnEliminar";
import axios from 'axios';
import { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import AsideTablaProveedores from "../Asides/AsideTablaProveedores";
import BtnEliminarProveedores from "../Botones/BtnEliminarProveedores";

const apiProveedores = "http://localhost:2002/proveedores";

const TablaProveedores = () => {
    const [proveedores, setProveedores] = useState([]);

    useEffect(()=>{
        listarProveedores();
    }, []);

    const listarProveedores = async () =>{
        const response = await axios.get(apiProveedores);
        setProveedores(response.data);
        console.log(response.data);
    }
    return (
        <section>
            <Header />
                <section className="proveedores" id="proveedores">
                    <AsideTablaProveedores />
                    <table className="tabla-proveedores" id="o">
                        <thead className="thead">
                            <tr className="tr">
                                <td className="td-proveedores">Nombre</td>
                                <td className="td-proveedores">Nit</td>
                                <td className="td-proveedores">Correo</td>
                                <td className="td-proveedores">Dirección</td>
                                <td className="td-proveedores">Teléfono</td>
                                <td className="td-proveedores">Producto</td>
                                <td className="td-proveedores">Acción</td>
                            </tr>
                        </thead>
                        <tbody className="tbody">
                            {proveedores.map((proveedores) => (
                                <tr className="text-center" key={proveedores.id}>
                                    <td className="td-clientes">{proveedores.nombre}</td>
                                    <td className="td-clientes">{proveedores.nit}</td>
                                    <td className="td-clientes">{proveedores.correo}</td>
                                    <td className="td-clientes">{proveedores.direccion}</td>
                                    <td className="td-clientes">{proveedores.telefono}</td>
                                    <td className="td-clientes">{proveedores.producto}</td>
                                    <td className="d-flex">
                                    <BtnEliminarProveedores/>
                                    <BtnEditar/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            <Footer />
        </section>
    )
}

export default TablaProveedores;