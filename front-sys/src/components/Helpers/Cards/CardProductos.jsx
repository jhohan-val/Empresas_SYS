import BtnAcceder from "../Botones/BtnAcceder";
import IconoProductos from "../imagenes/IconoProductos";

const CardProductos = () => {
  return (
<section>
      <article className="card-productos">
        <IconoProductos/>
        <h3 className="texto-card">Productos</h3>
      </article>
      <article className="texto-productos">
        <p>Esta tarjeta te permitirá agregar, editar y eliminar tus <i><b>productos</b></i></p>
        <BtnAcceder/>
      </article>
    </section>    
  );
};

export default CardProductos;