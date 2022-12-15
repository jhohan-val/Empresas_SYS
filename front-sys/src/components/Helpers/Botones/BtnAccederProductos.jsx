import { Link } from "react-router-dom";

const BtnAccederProductos = () => {
    return (
        <section>
            <section>
                <Link to={'/productos'} className="btn-acceder" type="button" >Acceder</Link>
            </section>
        </section>
    );
};

export default BtnAccederProductos;
