// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend);
    const {id, name} = friend;
    return (
        <div>
            <p>Id: {id}</p>
            <h5>Name: {name}</h5>
            <p><Link to={`/friend/${id}`}>show me detail</Link></p>
        </div>
    );
};

export default Friend;