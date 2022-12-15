import BtnAccederClientes from "../Botones/BtnAccederClientes";
import IconoClientes from "../imagenes/IconoClientes";

const CardClientes = () => {
  return (

    <section>
    <article className="card-clientes">
      <IconoClientes />
      <h3 className="texto-card">Clientes</h3>
    </article>
    <article className="texto-clientes">
      <p>Esta tarjeta te permitirá agregar, editar y eliminar tus <i><b>clientes</b></i></p>
      <BtnAccederClientes/>
    </article>
  </section>
  );
};

export default CardClientes;
