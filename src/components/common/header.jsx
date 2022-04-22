import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../service/userContextService'
import NavItem from './navItem'

export default function Header() {

    const { user } = useContext(UserContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className='navbar-brand' to='/' >Mon site</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <NavItem url="/" itemName="Home" isActive={true} />
                        <NavItem url="/films" itemName="Liste des films" isActive={false} />
                        <NavItem url="/acteurs" itemName="Acteurs" isActive={false} />
                        <NavItem url="/seances" itemName="Séance" isActive={false} />
                        {
                            (user?.id) ? (
                                <>
                                    <NavItem url="/test" itemName="Test" isActive={false} />
                                    <NavItem url="/film/create" itemName="Créer un film" isActive={false} />
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Nom Prenom</a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Profil</a>
                                            <a className="dropdown-item" href="#">Logout</a>
                                        </div>
                                    </li>
                                </>
                            ) : (
                                <NavItem url="/login" itemName="Connexion" isActive={false} />
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
