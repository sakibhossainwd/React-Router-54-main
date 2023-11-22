// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friendDetail = useLoaderData();
    console.log(friendDetail)
    return (
        <div>
            <h3>Here is all Detail about this friend</h3>
            <h2>Name: {friendDetail.name}</h2>
        </div>
    );
};

export default FriendDetail;