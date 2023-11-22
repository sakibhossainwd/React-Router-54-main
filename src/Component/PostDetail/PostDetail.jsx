// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const postDetail = useLoaderData();
    // console.log(postDetail)
    const navigate = useNavigate();
    const handlerGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h1>about this post:-- {postDetail.id}</h1>
            <p>ID: {postDetail.id}</p>
            <p>Body: {postDetail.body}</p>
            <button onClick={handlerGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;