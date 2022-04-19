import React, { useState } from 'react'

export default function CommentForm({ filmId }) {

    const [content, setContent] = useState('')

    const handleChange = (event) => {
        console.log(event.target.value)
        setContent(event.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault();

        const data = {
            content,
            filmId
        }
        console.log(data)
        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(JSON.stringify(error)))
    }

    return (
        <form onSubmit={handleClick}>
            <label htmlFor="content">Commentaire</label>
            <input
                name='content'
                id='content'
                type="text"
                onChange={handleChange}
                value={content}
            />
            <button>Envoyer</button>
        </form>
    )
}
