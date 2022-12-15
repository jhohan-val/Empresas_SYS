import LogoHeader from "./imagenes/LogoHeader";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header-menu">
      <LogoHeader/>  
        <section className="container-fluid">
          <Link to={'/'}>Home</Link> 
          <Link to={'/clientes'}>Clientes</Link> 
          <Link to={'/productos'}>Productos</Link> 
          <Link to={'/proveedores'}>Proveedores</Link>
        </section>
    </header>
  );
};
export default Header 