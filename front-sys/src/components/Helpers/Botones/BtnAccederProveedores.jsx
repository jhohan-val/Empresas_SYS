import { Link } from "react-router-dom";

const BtnAccederProveedores = () => {
    return (
        <section>
            <section>
                <Link to={'/proveedores'} className="btn-acceder" type="button" >Acceder</Link>
            </section>
        </section>
    );
};

export default BtnAccederProveedores;
