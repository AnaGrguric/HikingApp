import React from 'react';
import '../../App.css';
import PointsContent from '../../components/PointsContent';
import ShortcutsData from '../../ShortcutsData';
import Nav from '../../components/Nav';

function Okic() {
    return (
        <div>
            <div className="container">
                <Nav />
                <PointsContent data={ShortcutsData} pointsIndex={6} />
            </div>
        </div >
    )
}

export default Okic;