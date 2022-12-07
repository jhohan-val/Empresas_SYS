import BtnAcceder from "../Botones/BtnAcceder";
import IconoClientes from "../imagenes/IconoClientes";

const CardClientes = () => {
  return (

    <section>
    <article className="card-clientes">
      <IconoClientes />
      <h3>Clientes</h3>
    </article>
    <article className="texto-clientes">
      <p>Esta tarjeta te permitirá agregar, editar y eliminar tus clientes</p>
      <BtnAcceder/>
    </article>
  </section>
  );
};

export default CardClientes;
