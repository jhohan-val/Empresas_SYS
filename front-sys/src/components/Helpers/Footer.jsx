import IconoFacebook from "./imagenes/IconoFacebook";
import IconoInstagram from "./imagenes/IconoInstagram";
import IconoTwitter from "./imagenes/IconoTwitter";

const Footer = () => {
    return (
        <section className="footer-basic">
            <footer className="footer-iconos">
                <IconoFacebook />
                <IconoTwitter />
                <IconoInstagram />
                <p className="footer-copyright">Todos los derechos reservados © 2022</p>
            </footer>
        </section>
    )
}

export default Footer;