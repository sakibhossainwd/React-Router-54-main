// eslint-disable-next-line no-unused-vars
import React from 'react';

const Post = ({post}) => {
    const {id, title} = post
    return (
        <div>
            <p>ID: {id}</p>
            <h4>Title: {title}</h4>
            {/* <Link to='#'>Show details</Link> */}
        </div>
    );
};

export default Post;