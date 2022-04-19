import React from 'react'
import NavItem from './navItem'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Mon Site</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <NavItem itemName="Home" isActive={true} />
                        <NavItem itemName="Liste des films" isActive={false} />
                        <NavItem itemName="Acteurs" isActive={false} />
                        <NavItem itemName="Séance" isActive={false} />
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Nom Prenom</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Profil</a>
                                <a className="dropdown-item" href="#">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
