import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Films() {
    const [films, setFilms] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/films')
            .then(Response => Response.json())
            .then(data => setFilms(data))
    }, [])
    return (
        <ul>
            {
                films.map(film => <li key={film.id} >
                    <Link
                        to={`/film/${film.id}`}
                        state={film} >
                        {film.titre}
                    </Link>
                </li>)
            }
        </ul>
    )
}
