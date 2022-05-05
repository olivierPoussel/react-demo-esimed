import React, { useContext, useState } from 'react'
import { handleForm } from '../../service/formService'
import { getLocalStorage, JWT_KEY } from '../../service/localStorageService'
import { UserContext } from '../../service/userContextService'

export default function Test() {
    const { user } = useContext(UserContext)

    const [form, setform] = useState({
        titre: "test",
        description: "test D",
        duree: "156",
        "files.image": null
    })

    const handleClick = (event) => {
        const token = getLocalStorage(JWT_KEY)
        fetch('http://localhost:1337/api/users/me',
            {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const formElement = event.target;
        const formElements = formElement.elements;
        const formData = new FormData();
        const data = {};
        for (let i = 0; i < formElements.length; i++) {
            const currentElement = formElements[i];
            if (!['submit', 'file'].includes(currentElement.type)) {
                data[currentElement.name] = currentElement.value;
            } else if (currentElement.type === 'file') {
                for (let i = 0; i < currentElement.files.length; i++) {
                    const file = currentElement.files[i];
                    formData.append(`files.${currentElement.name}`, file, file.name);
                }
            }
        }
        formData.append('data', JSON.stringify(data));

        const token = getLocalStorage(JWT_KEY)
        fetch('http://localhost:1337/api/films?populate=image',
            {
                headers: {
                    'content-type': 'application/json',
                    // 'content-type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + token
                },
                method: 'POST',
                body: formData,
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
    }

    const handleChange = (event) => {
        if (event.target.name !== 'image') {
            handleForm(event, form, setform)
        } else {
            setform({ ...form, "image": event.target.files[0] })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name='titre' value={form.titre} />
                <textarea onChange={handleChange} name="description" cols="30" rows="10" value={form.description}></textarea>
                <input onChange={handleChange} type="number" name="duree" value={form.duree} />
                <input onChange={handleChange} type="file" name="image" />
                <button type="submit">Créer</button>
            </form>
            <button onClick={handleClick}>TEST</button>
        </>
    )
}
