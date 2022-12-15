import LogoHeader from "./imagenes/LogoHeader";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<<<<<<< HEAD
    <header className="header-menu">  
        <section className="container-fluid">
          <LogoHeader />
          <a href="">Home</a>
          <a href="">Clientes</a>
          <a href="">Productos</a>
          <a href="">Proveedores</a>
=======
    <header className="header-menu">
      <LogoHeader/>  
        <section className="container-fluid">
          <Link to={'/'}>Home</Link> 
          <Link to={'/clientes'}>Clientes</Link> 
          <Link to={'/productos'}>Productos</Link> 
          <Link to={'/proveedores'}>Proveedores</Link>
>>>>>>> 55841c11e5fc8762f31404912098598e132a49cb
        </section>
    </header>
  );
};
export default Header 