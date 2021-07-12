import React from 'react';
import Elevation from '../icons/elevation.svg';

const PointsContent = ({ data, pointsIndex }) => {
    return (
        <div className="width">
            <div className="content-section" id="points-content">
                {data[pointsIndex].map(item => (
                    <div>
                        <div className="route-review">
                            <div className="route-grid">
                                <h4>{item.name}</h4>
                                <img src={item.image} alt="route-img" className="route-cover"></img>
                            </div>
                            <div className="route-review-content">
                                <div>
                                    <div className="card-icons">
                                        <div className="card-icon">
                                            <img src={Elevation} alt="elevation-icon"></img>
                                            <p>{item.height}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <h6>Opis odredišta</h6>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PointsContent;