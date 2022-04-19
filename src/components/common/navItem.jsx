import React from 'react'

export default function NavItem({ isActive, itemName }) {

    return (
        <li className="nav-item">
            <a className={isActive ? 'nav-link active' : 'nav-link'} href="#">{itemName}
                {
                    isActive ??
                    (<span className="visually-hidden">(current)</span>)
                }

            </a>
        </li>
    )
}
