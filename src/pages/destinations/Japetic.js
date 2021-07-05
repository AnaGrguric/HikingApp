import React from 'react';
import '../../App.css';
import PointsContent from '../../components/PointsContent';
import ShortcutsData from '../../ShortcutsData';
import Nav from '../../components/Nav';

function Japetic() {
    return (
        <div>
            <div className="container">
                <Nav />
                <PointsContent data={ShortcutsData} pointsIndex={5} />
            </div>
        </div >
    )
}

export default Japetic;