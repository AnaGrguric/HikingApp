import React from 'react';
import '../../App.css';
import PointsContent from '../../components/PointsContent';
import ShortcutsData from '../../ShortcutsData';
import Nav from '../../components/Nav';

function PD_Zeljeznicar() {
    return (
        <div className="container">
            <Nav />
            <PointsContent data={ShortcutsData} pointsIndex={1} />
        </div>
    );
};

export default PD_Zeljeznicar;