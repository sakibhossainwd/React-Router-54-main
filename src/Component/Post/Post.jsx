// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    // console.log(post)
    const {id, title} = post;
    const navigate = useNavigate();
    const useNavigation = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div>
            <p>ID: {id}</p>
            <h4>Title: {title}</h4>
            <Link to={`/post/${id}`}><button>Show Detail</button></Link>
            <button onClick={useNavigation}>With handler</button>
        </div>
    );
};

export default Post;