import CardClientes from "../Helpers/Cards/CardClientes";
import Footer from "../Helpers/Footer";
import Header from "../Helpers/Header";
import Login from "../Helpers/Login";

const Main = ()  =>{
    return (
            <main>
                {/* <section className="login">
                    <Login/>
                </section> */}
                
                <section className="header">
                    <Header/>
                    <CardClientes/>
                </section>

                <section className="footer">

                </section>

            </main>  
    )
}

export default Main;

