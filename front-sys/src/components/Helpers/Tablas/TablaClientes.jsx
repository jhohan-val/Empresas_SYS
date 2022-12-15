import AsideClientes from "../Asides/AsideClientes";
import BtnEditar from "../Botones/BtnEditar";
import BtnEliminar from "../Botones/BtnEliminar";
<<<<<<< HEAD
import axios from 'axios';
import { useState, useEffect } from "react";

const apiClientes = "http://localhost:2002/clientes";
=======
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const apiClientes = " http://localhost:2002/clientes";
>>>>>>> 55841c11e5fc8762f31404912098598e132a49cb

const TablaClientes = () => {
    const [clientes, setClientes] = useState([]);

<<<<<<< HEAD
    useEffect(()=>{
        listarClientes();
    }, []);

    const listarClientes = async () =>{
        const response = await axios.get(apiClientes);
        setClientes(response.data);
        console.log(response.data);
    }
    return (
        <section className="clientes" id="clientes">
            <table className="tabla-clientes" id="tabla-clientes">
                <thead className="thead">
                    <tr className="tr">
=======
    useEffect(() => {
        listarClientes();
    }, []);

    const listarClientes = async () => {
        const response = await axios.get(apiClientes);
        setClientes(response.data);
        console.log(response.data);
    };

    return (  
        
        <section className="clientes" id="clientes">
            <AsideClientes/>
            <table class="tabla-clientes" id="tabla-clientes">
                <thead class="thead">
                    <tr class="tr">
>>>>>>> 55841c11e5fc8762f31404912098598e132a49cb
                        <td className="td-clientes">Nombre</td>
                        <td className="td-clientes">Documento</td>
                        <td className="td-clientes">Correo</td>
                        <td className="td-clientes">Dirección</td>
                        <td className="td-clientes">Barrio</td>
                        <td className="td-clientes">Teléfono</td>
                        <td className="td-clientes">Acción</td>
                    </tr>
                </thead>
<<<<<<< HEAD
                <tbody className="tbody">
                    {clientes.map((clientes)=> {
                        <tr key={clientes.id} class="tr">
                            <td className="td-clientes">{clientes.nombre}</td>
                            <td className="td-clientes">{clientes.documento}</td>
                            <td className="td-clientes">{clientes.correo}</td>
                            <td className="td-clientes">{clientes.direccion}</td>
                            <td className="td-clientes">{clientes.barrio}</td>
                            <td className="td-clientes">{clientes.telefono}</td>
                            <td className="d-flex">
                                <BtnEliminar />
                                <BtnEditar />
                            </td>
                        </tr>
                    })}
=======
                <tbody class="tbody">
                    {clientes.map((clientes) => (
                        <tr className="text-center" key={clientes.id}>
                            <td>{clientes.nombre}</td>
                            <td>{clientes.documento}</td>
                            <td>{clientes.correo}</td>
                            <td>{clientes.direccion}</td>
                            <td>{clientes.barrio}</td>
                            <td>{clientes.telefono}</td>
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
export default TablaClientes;
