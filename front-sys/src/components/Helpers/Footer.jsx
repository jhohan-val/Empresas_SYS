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
            </footer>
        </section>
    )
}

export default Footer;