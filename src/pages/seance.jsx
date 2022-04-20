import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Seance() {
    const [salles, setsalles] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/salles')
            .then((response) => response.json())
            .then((data) => setsalles(data))
    }, [])
    return (
        <ul>
            {
                salles.map((salle) => <li key={salle.id}><Link to={`/seances/${salle.id}`} >{salle.nom}</Link></li>)
            }
        </ul>
    )
}
