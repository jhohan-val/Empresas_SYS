import BtnPerfil from "./Botones/BtnPerfil";
import LogoHeader from "./imagenes/LogoHeader";

const Header = () => {
  return (
    <header className="header-menu">
      <nav class="navbar bg-success.bg-gradient">
        <section class="container-fluid">
          <LogoHeader />
          <h2 className="texto-header1">Home</h2>
          <h2 className="texto-header2">Clientes</h2>
          <h2 className="texto-header3">Productos</h2>
          <h2 className="texto-header4">Proveedores</h2>

          <button class="btn-perfil" type="button">
            <BtnPerfil/>
          </button>
        </section>
      </nav>
    </header>
  );
};

export default Header;
