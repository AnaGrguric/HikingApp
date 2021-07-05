import React from 'react';
import '../../App.css';
import PointsContent from '../../components/PointsContent';
import ShortcutsData from '../../ShortcutsData';
import Nav from '../../components/Nav';

function PD_CerinskiVir() {
    return (
        <div className="container">
            <Nav />
            <PointsContent data={ShortcutsData} pointsIndex={2} />
        </div>
    );
};

export default PD_CerinskiVir;