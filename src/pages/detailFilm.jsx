import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import CommentForm from '../components/commentForm';

export default function DetailFilm() {
    const params = useParams()
    const { state } = useLocation()
    console.log(params, state);
    const [comments, setcomments] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/comments?filmId=' + params.id)
            .then((response) => response.json())
            .then((data) => setcomments(data))
    }, [params])
    const addComment = (comment) => {
        setcomments([...comments, comment])
    }
    return (
        <div>
            <div>{state.titre}</div>
            <ul>
                {comments.map((comment) => <li key={comment.id}>{comment.content}</li>)}
            </ul>

            <CommentForm filmId={params.id} addComment={addComment} />
        </div>
    )
}
