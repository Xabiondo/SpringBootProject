import React from 'react'
import { connect } from 'react-redux'
import './Navbar.css'

export const Navbar = (props) => {
    return (
        <nav className='navbar'>
            <div className='navbarLeft'>
                <a href='/' className='logo'> Aqui ira el logo</a>
            </div>
            <div className='navbarCenter'>
                <ul className='navLinks'>
                    <li>
                        <a href='/ofertas'>Ofertas</a>
                    </li>
                    <li>
                        <a href='/gimnasios'>gimnasios cerca de mi</a>
                    </li>
                    <li>
                        <a href='/asistenteGimnasio'> Asistente fitness</a>
                    </li>
                    <li>
                        <a href='/foro'> Foro fitness</a>
                    </li>
                </ul>
            </div>
            <div className='navbarRight'>
                <a href='/login'>Iniciar sesión</a>
                <a href='/miPerfil'> Mi perfil</a>
            </div>
        </nav>
    )
}

