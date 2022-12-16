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
                <section className="footer-copyright">
                    <p>Todos los derechos reservados a </p>
                </section>
            </footer>
        </section>
    )
}

export default Footer;