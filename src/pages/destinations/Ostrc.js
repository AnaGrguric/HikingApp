import React from 'react';
import '../../App.css';
import PointsContent from '../../components/PointsContent';
import ShortcutsData from '../../ShortcutsData';
import Nav from '../../components/Nav';

function Ostrc() {
    return (
        <div>
            <div className="container">
                <Nav />
                <PointsContent data={ShortcutsData} pointsIndex={7} />
            </div>
        </div >
    )
}

export default Ostrc;