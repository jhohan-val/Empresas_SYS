import { Link } from "react-router-dom";

const BtnAccederClientes = () => {
    return (
        <section>
            <section>
                <Link to={'/clientes'} className="btn-acceder" type="button" >Acceder</Link>
            </section>
        </section>
    );
};

export default BtnAccederClientes;
