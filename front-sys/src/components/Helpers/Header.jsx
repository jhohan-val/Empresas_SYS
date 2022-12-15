import LogoHeader from "./imagenes/LogoHeader";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className="header-menu">
      <header className="header">
        <LogoHeader/>  
            <Link to={'/'}>Home</Link> 
            <Link to={'/clientes'}>Clientes</Link> 
            <Link to={'/productos'}>Productos</Link> 
            <Link to={'/proveedores'}>Proveedores</Link>
      </header>
    </section>
  );
};
export default Header 