import React from 'react';
import '../../App.css';
import PointsContent from '../../components/PointsContent';
import ShortcutsData from '../../ShortcutsData';
import Nav from '../../components/Nav';

function VelikiLovnik() {
    return (
        <div>
            <div className="container">
                <Nav />
                <PointsContent data={ShortcutsData} pointsIndex={9} />
            </div>
        </div >
    )
}

export default VelikiLovnik;