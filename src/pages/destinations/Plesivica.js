import React from 'react';
import '../../App.css';
import PointsContent from '../../components/PointsContent';
import ShortcutsData from '../../ShortcutsData';
import Nav from '../../components/Nav';

function Plesivica() {
    return (
        <div>
            <div className="container">
                <Nav />
                <PointsContent data={ShortcutsData} pointsIndex={8} />
            </div>
        </div >
    )
}

export default Plesivica;