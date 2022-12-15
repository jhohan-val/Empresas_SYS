import AsideTablaClientes from "../Asides/AsideTablaClientes";
import BtnEditar from "../Botones/BtnEditar";
import BtnEliminar from "../Botones/BtnEliminar";
import axios from 'axios';
import { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

const apiClientes = "http://localhost:2002/clientes";

const TablaClientes = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(()=>{
        listarClientes();
    }, []);

    const listarClientes = async () =>{
        const response = await axios.get(apiClientes);
        setClientes(response.data);
        console.log(response.data);
    }
    return (
        <section>
            <Header />
                <section className="clientes" id="clientes">
                    <AsideTablaClientes />
                    <table className="tabla-clientes" id="tabla-clientes">
                        <thead className="thead">
                            <tr className="tr">
                                <td className="td-clientes">Nombre</td>
                                <td className="td-clientes">Documento</td>
                                <td className="td-clientes">Correo</td>
                                <td className="td-clientes">Dirección</td>
                                <td className="td-clientes">Barrio</td>
                                <td className="td-clientes">Teléfono</td>
                                <td className="td-clientes">Acción</td>
                            </tr>
                        </thead>
                        <tbody className="tbody">
                            {clientes.map((clientes)=> {
                                <tr key={clientes.id} class="text-center tr">
                                    <td className="td-clientes">{clientes.nombre}</td>
                                    <td className="td-clientes">{clientes.documento}</td>
                                    <td className="td-clientes">{clientes.correo}</td>
                                    <td className="td-clientes">{clientes.direccion}</td>
                                    <td className="td-clientes">{clientes.barrio}</td>
                                    <td className="td-clientes">{clientes.telefono}</td>
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
export default TablaClientes;
