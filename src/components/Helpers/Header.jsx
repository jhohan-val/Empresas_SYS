const Header = () =>{
    return(

        <header className="header-menu">
           {/*  <nav className="navbar">
                <h2 className="texto-header1">Home</h2>
                <h2 className="texto-header2">Clientes</h2>
                <h2 className="texto-header3">Productos</h2>
                <h2 className="texto-header4">Proveedores</h2>
            </nav> */}

<nav class="navbar bg-success.bg-gradient">
            <section class="container-fluid">
            
            <img src="" alt="Logo" width="70" height="70" class="d-inline-block align-text-top rounded-circle " />
                <h2 className="texto-header1">Home</h2>
                <h2 className="texto-header2">Clientes</h2>
                <h2 className="texto-header3">Productos</h2>
                <h2 className="texto-header4">Proveedores</h2>
            
            {/* <button class="btn btn-outline-success" type="submit">Buscar</button> */}
      
            </section>
            </nav>

        </header>
    )
}

export default Header;