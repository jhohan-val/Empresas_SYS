import LogoHeader from "./imagenes/LogoHeader";

const Header = () => {
  return (
    <header className="header-menu">  
        <section className="container-fluid">
          <LogoHeader />
          <a href="">Home</a>
          <a href="">Clientes</a>
          <a href="">Productos</a>
          <a href="">Proveedores</a>
        </section>
    </header>
  );
};

export default Header;
