import BtnPerfil from "./Botones/BtnPerfil";
import LogoHeader from "./imagenes/LogoHeader";

const Header = () => {
  return (
    <header className="header-menu">
      <nav class="navbar bg-success.bg-gradient">
        <section class="container-fluid">
          <LogoHeader />
          <a href="">Home</a>
          <a href="">Clientes</a>
          <a href="">Productos</a>
          <a href="">Proveedores</a>
          <button class="btn-perfil" type="button" value="Salir">SALIR</button>
        </section>
      </nav>
    </header>
  );
};

export default Header;
