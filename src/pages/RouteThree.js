import React from 'react';
import '../App.css';
import Nav from '../components/Nav';
import RouteData from '../RouteData';
import RouteContent from '../components/RouteContent';
import ImageGallery from '../components/Gallery';


function RouteThree() {
    return (
        <div className="container">
            <Nav />
            <RouteContent data={RouteData} routeIndex={2}/>
            <ImageGallery data={RouteData} routeIndex={2}/>
        </div>
    );
};

export default RouteThree;