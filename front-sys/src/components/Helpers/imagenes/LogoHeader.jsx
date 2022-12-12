import logoheader from '../../../../public/logo.png'

const LogoHeader =() => {
    return(
        <section className='logo'>
            <img className="logo-header" src={logoheader} alt="logoheader"/>
        </section>
    )
}

export default LogoHeader