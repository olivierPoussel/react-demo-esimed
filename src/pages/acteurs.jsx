import React, { useEffect, useState } from 'react'

export default function Acteurs() {
    const [acteurs, setacteurs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/acteurs')
            .then((response) => response.json())
            .then((data) => setacteurs(data))
    }, [])

    return (
        <ul>
            {
                acteurs.map((acteur) => <li key={acteur.id}>{acteur.prenom + ' ' + acteur.nom}</li>)
            }
        </ul>
    )
}
