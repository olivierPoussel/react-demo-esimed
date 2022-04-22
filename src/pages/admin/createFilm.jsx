import React, { useState } from 'react'
import { handleForm } from '../../service/formService'
import { getLocalStorage, JWT_KEY } from '../../service/localStorageService'

export default function CreateFilm() {
    const [form, setform] = useState({
        titre: "",
        description: "",
        duree: ""
    })

    const handleChange = (event) => {
        handleForm(event, form, setform)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        const token = getLocalStorage(JWT_KEY)
        fetch('http://localhost:1337/api/films', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + token

            },
            body: JSON.stringify({ data: form })
        }).then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error))
    }

    return (
        <div className="w50 d-flex justify-content-center">
            <form onSubmit={handleSubmit} >
                {console.log(form)}
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="titre" className="form-label mt-4">Titre du film</label>
                        <input onChange={handleChange} type="text" name='titre' className="form-control" id="titre" placeholder="Titre du film" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="form-label mt-4">Description</label>
                        <textarea onChange={handleChange} name="description" className="form-control" id="description" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="duree" className="form-label mt-4">Durée</label>
                        <input onChange={handleChange} type="number" name='duree' className="form-control" id="duree" placeholder="durée du film en minutes" />
                    </div>
                    <button type='submit' className="btn btn-primary mt-3">Ajouter</button>
                </fieldset>
            </form>
        </div>
    )
}
