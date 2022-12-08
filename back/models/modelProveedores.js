import { DataTypes } from "sequelize";
import dataBaseClientes from "../database/databaseClientes.js";

const Proveedores = dataBaseClientes.define('proveedores', {
    nombre: {
        type: DataTypes.STRING
    }, 
    nit: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    producto: {
        type: DataTypes.STRING
    }
});

export default Proveedores