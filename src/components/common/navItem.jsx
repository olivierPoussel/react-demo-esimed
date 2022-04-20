import React from 'react'
import { Link } from 'react-router-dom'

export default function NavItem({ isActive, itemName, url }) {

    return (
        <li className="nav-item">
            <Link to={url} className={isActive ? 'nav-link active' : 'nav-link'} >{itemName}</Link>
            {
                isActive ??
                (<span className="visually-hidden">(current)</span>)
            }
        </li>
    )
}
