import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Seances() {
    const { id } = useParams()
    const [seances, setseances] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/seance?salleId=' + id)
            .then((response) => response.json())
            .then((data) => setseances(data))
    }, [id])
    return (
        <ul>
            {
                seances.map((seance, index) => (
                    <li key={index}>{new Date(seance.date_seance).toLocaleString()}</li>
                ))
            }
        </ul>
    )
}
