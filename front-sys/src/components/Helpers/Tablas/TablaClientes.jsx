import AsideClientes from "../Asides/AsideClientes";
import BtnEditar from "../Botones/BtnEditar";
import BtnEliminar from "../Botones/BtnEliminar";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const apiClientes = " http://localhost:2002/clientes";

const TablaClientes = () => {
    const [clientes, setClientes] = useState([]);

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
                        <td className="td-clientes">Nombre</td>
                        <td className="td-clientes">Documento</td>
                        <td className="td-clientes">Correo</td>
                        <td className="td-clientes">Dirección</td>
                        <td className="td-clientes">Barrio</td>
                        <td className="td-clientes">Teléfono</td>
                        <td className="td-clientes">Acción</td>
                    </tr>
                </thead>
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
                </tbody>
            </table>
        </section>
    )
}
export default TablaClientes;
