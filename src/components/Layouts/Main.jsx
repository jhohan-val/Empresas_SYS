import CardClientes from "../Helpers/Cards/CardClientes";
import CardProductos from "../Helpers/Cards/CardProductos";
import CardProveedores from "../Helpers/Cards/CardProveedores";
import Footer from "../Helpers/Footer";
import Header from "../Helpers/Header";
import Login from "../Helpers/Login";

const Main = ()  =>{
    return (
        <section>
            
            <main>
                {/* <section className="login">
                    <Login/>
                </section> */}
                
                <section className="header">
                    <Header/>  
                </section>

                <section className="cards">
                    <CardClientes/>
                    <CardProductos/>
                    <CardProveedores/>
                </section>
                
                <section className="footer">
                    <Footer/>
                </section>
            </main> 

                

        </section>
             
    )
}

export default Main;

