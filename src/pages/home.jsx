import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    const [films, setFilms] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/film')
            .then(Response => Response.json())
            .then(data => setFilms(data))
    }, [])
    return (
        <>
            <h1>Les films</h1>
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
        </>
    )
}
