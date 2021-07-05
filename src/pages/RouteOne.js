import React from 'react';
import '../App.css';
import Nav from '../components/Nav';
import RouteContent from '../components/RouteContent';
import RouteData from '../RouteData';
import ImageGallery from '../components/Gallery';

function RouteOne() {
    return (
        <div className="container">
            <Nav />
            <RouteContent data={RouteData} routeIndex={0}/>
            <ImageGallery data={RouteData} routeIndex={0}/>
        </div>
    );
};
export default RouteOne;

