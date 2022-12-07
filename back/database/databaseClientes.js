import { Sequelize } from "sequelize";

const dataBaseClientes = new Sequelize('empresa_sys', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default dataBaseClientes