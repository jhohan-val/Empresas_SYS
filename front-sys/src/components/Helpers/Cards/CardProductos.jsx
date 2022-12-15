<<<<<<< HEAD
=======
import BtnAcceder from "../Botones/BtnAcceder";
>>>>>>> 55841c11e5fc8762f31404912098598e132a49cb
import BtnAccederProductos from "../Botones/BtnAccederProductos";
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
<<<<<<< HEAD
        <BtnAccederProductos/>
=======
        <BtnAccederProductos />
>>>>>>> 55841c11e5fc8762f31404912098598e132a49cb
      </article>
    </section>    
  );
};

export default CardProductos;