import { DataTypes } from "sequelize";
import dataBaseClientes from "../database/databaseClientes.js";

const Productos = dataBaseClientes.define('productos', {
    nombre: {
        type: DataTypes.STRING
    }, 
    fragancia: {
        type: DataTypes.STRING
    },
    referencia: {
        type: DataTypes.STRING
    },
    tamaño: {
        type: DataTypes.STRING
    },
    cantidad: {
        type: DataTypes.STRING
    },
    fabricante: {
        type: DataTypes.STRING
    }
});

export default Productos