import React from 'react';
import Nav from '../components/Nav';
import SearchNav from '../components/SearchNav';
import Map from '../components/esri/Map';

function Home(){
    return(
        <div className="container">
            <Nav/>
            <SearchNav />
            <Map />
        </div>
    )
}

export default Home;