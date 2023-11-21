// eslint-disable-next-line no-unused-vars
import React from 'react';

const Friend = ({friend}) => {
    console.log(friend);
    const {id, name} = friend;
    return (
        <div>
            <p>Id: {id}</p>
            <h5>Name: {name}</h5>
        </div>
    );
};

export default Friend;