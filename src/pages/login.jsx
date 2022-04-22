import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { JWT_KEY, setLocalStorage, USER_KEY } from '../service/localStorageService'
import { UserContext } from '../service/userContextService'

export default function Login() {

    const [form, setform] = useState({ email: "user@ex.com", password: "User1234" })

    const { setUser } = useContext(UserContext)

    const navigate = useNavigate()

    const handleChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        setform({ ...form, [key]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // fetch(`http://localhost:5000/users?email=${form.email}&password=${form.password}`)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data)
        //         if (data.length > 0) {
        //             //ok
        //             setLocalStorage(USER_KEY, data[0])
        //             setUser(data[0])
        //             navigate('/')
        //         } else {
        //             //try again
        //             //message d'erreur
        //         }

        fetch('http://localhost:1337/api/auth/local', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                identifier: form.email,
                password: form.password,
            })

        }).then(response => response.json())
            .then((data) => {
                console.log(data)
                if (data.error) {
                    //afficher message erreur
                    console.log(data.error)
                } else {
                    setLocalStorage(JWT_KEY, data.jwt)
                    setLocalStorage(USER_KEY, data.user)
                    setUser(data.user)
                    navigate('/')
                }
            })
    }

    return (
        <div className='d-flex justify-content-center'>
            {console.log(form)}
            <form onSubmit={handleSubmit} className='d-flex flex-column w-50'>
                <div className="form-group">
                    <label htmlFor='exampleInputEmail1' className="form-label mt-4">Email</label>
                    <input value={form.email} onChange={handleChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrer votre email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Mot de passe</label>
                    <input value={form.password} onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Mot de passe" />
                </div>
                <button className='btn btn-primary align-self-end mt-3' type='submit'>Connexion</button>
            </form>
        </div>
    )
}
