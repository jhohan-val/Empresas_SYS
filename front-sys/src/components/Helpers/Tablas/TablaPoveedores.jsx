import AsideProveedores from "../Asides/AsideProveedores";
import BtnEditar from "../Botones/BtnEditar";
import BtnEliminar from "../Botones/BtnEliminar";
<<<<<<< HEAD
import axios from 'axios';
import { useState, useEffect } from "react";

const apiProveedores = "http://localhost:2002/proveedores";
=======
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const apiProveedores = " http://localhost:2002/proveedores";
>>>>>>> 55841c11e5fc8762f31404912098598e132a49cb

const TablaProveedores = () => {
    const [proveedores, setProveedores] = useState([]);

<<<<<<< HEAD
    useEffect(()=>{
        listarProveedores();
    }, []);

    const listarProveedores = async () =>{
        const response = await axios.get(apiProveedores);
        setProveedores(response.data);
        console.log(response.data);
    }
=======
    useEffect(() => {
        listarProveedores();
    }, []);

    const listarProveedores = async () => {
        const response = await axios.get(apiProveedores);
        setProveedores(response.data);
        console.log(response.data);
    };


>>>>>>> 55841c11e5fc8762f31404912098598e132a49cb
    return (
        <section className="proveedores" id="proveedores">
            <AsideProveedores/>
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
<<<<<<< HEAD
                    {proveedores.map((proovedores) =>(
                        <tr key={proovedores.id} className="tr">
                            <td className="td-proveedores">{proovedores.nombre}</td>
                            <td className="td-proveedores">{proovedores.nit}</td>
                            <td className="td-proveedores">{proovedores.correo}</td>
                            <td className="td-proveedores">{proovedores.direccion}</td>
                            <td className="td-proveedores">{proovedores.telefono}</td>
                            <td className="td-proveedores">{proovedores.producto}</td>
                            <td className="d-flex">
                                <BtnEliminar/>
                                <BtnEditar/>
                            </td>
                        </tr>
                    ))}
=======
                {proveedores.map((proveedores) => (
                        <tr className="text-center" key={proveedores.id}>
                            <td>{proveedores.nombre}</td>
                            <td>{proveedores.nit}</td>
                            <td>{proveedores.correo}</td>
                            <td>{proveedores.direccion}</td>
                            <td>{proveedores.telefono}</td>
                            <td>{proveedores.producto}</td>
                            <td className="d-flex">
                            <BtnEliminar />
                            <BtnEditar />
                        </td>
                        </tr>
                        ))}
>>>>>>> 55841c11e5fc8762f31404912098598e132a49cb
                </tbody>
            </table>
        </section>
    )
}

export default TablaProveedores;