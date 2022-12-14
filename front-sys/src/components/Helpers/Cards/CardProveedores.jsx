import BtnAcceder from "../Botones/BtnAcceder";
import IconoProveedores from "../imagenes/IconoProveedores";

const CardProveedores = () => {
  return (
    <section>
      <article className="card-proveedores">
        <IconoProveedores/>
        <h3 className="texto-card">Proveedores</h3>
      </article>
      <article className="texto-proveedores">
        <p>Esta tarjeta te permitirá agregar, editar y eliminar tus <i><b>proveedores</b></i></p>
        <BtnAcceder/>
      </article>
    </section>
  );
};

export default CardProveedores;
