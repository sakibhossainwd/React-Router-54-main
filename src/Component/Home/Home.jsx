// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    const navigation = useNavigation();
    return (
        <div className='Home-container'>
            <Header></Header>
            <div>
                {navigation.state === "loading" ? "loading" : ''}
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;