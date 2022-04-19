import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import CommentForm from '../components/commentForm';

export default function DetailFilm() {
    const params = useParams()
    const { state } = useLocation()
    console.log(params, state);
    return (
        <div>
            <div>{state.titre}</div>
            <CommentForm filmId={params.id} />
        </div>
    )
}
