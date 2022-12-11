import BtnAcceder from "../Botones/BtnAcceder";
import IconoProveedores from "../imagenes/IconoProveedores";

const CardProveedores = () => {
  return (
    <section>
      <article className="card-productos">
        <IconoProveedores/>
        <h3>Proveedores</h3>
      </article>
      <article className="texto-productos">
        <p>Esta tarjeta te permitirá agregar, editar y eliminar tus proveedores</p>
        <BtnAcceder/>
      </article>
    </section>
  );
};

export default CardProveedores;
