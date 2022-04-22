import React, { useContext } from 'react'
import { getLocalStorage, JWT_KEY } from '../../service/localStorageService'
import { UserContext } from '../../service/userContextService'

export default function Test() {
    const { user } = useContext(UserContext)

    const handleClick = (event) => {
        const token = getLocalStorage(JWT_KEY)
        fetch('http://localhost:1337/api/users-permissions/roles/' + user.id,
            {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
    }

    return (

        <button onClick={handleClick}>TEST</button>
    )
}
