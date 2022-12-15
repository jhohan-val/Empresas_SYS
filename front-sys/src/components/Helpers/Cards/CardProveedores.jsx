import BtnAccederProveedores from "../Botones/BtnAccederProveedores";
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
<<<<<<< HEAD
        <BtnAccederProveedores/>
=======
        <BtnAccederProveedores />
>>>>>>> 55841c11e5fc8762f31404912098598e132a49cb
      </article>
    </section>
  );
};

export default CardProveedores;
