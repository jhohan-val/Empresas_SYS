import BtnEditar from "../Botones/BtnEditar";
import BtnEliminar from "../Botones/BtnEliminar";
import axios from 'axios';
import { useState, useEffect } from "react";

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
        <section className="proveedores" id="proveedores">
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
                </tbody>
            </table>
        </section>
    )
}

export default TablaProveedores;