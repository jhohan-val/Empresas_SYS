import LogoLogin from "./imagenes/LogoLogin";

const Login = () => {
    return(
        <section className="login" id="login">

            <form className="login-form" id="login-form" action="">
                <input className="usuario" id="usuario" placeholder="Usuario" type="text" />
                <input className="contraseña" id="contraseña" placeholder="Contraseña" type="password" />
                <button className="btn-iniciar" id="btn-iniciar" type="submit"></button>
                <section className="mensaje-error">
                <img src="" class="icono-error" alt=""/>
                    <p class=""></p>
                </section>
            </form>
        </section>
    )
}

export default Login;