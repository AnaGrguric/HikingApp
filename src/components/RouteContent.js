import React from 'react';
import Elevation from '../icons/elevation.svg';
import Lenght from '../icons/lenght.svg';
import Time from '../icons/time.svg';
import Star from '../icons/star.svg';


const RouteContent = ({ data, routeIndex }) => {
    return (
        <div className="content-section width" id="route-content">
            {data[routeIndex].map(item => (
                <div>
                    <div className="route-review">
                        <div className="route-grid">
                            <h4>{item.title}</h4>
                            <img src={item.coverimg} className="route-cover"></img>
                        </div>
                        <div className="route-review-content">
                            <div>
                                <div className="card-icons">
                                    <div className="card-icon">
                                        <img src={Lenght} alt="lenght-icon"></img>
                                        <p>{item.lenght}</p>
                                    </div>
                                    <div className="card-icon">
                                        <img src={Time} alt="clock-icon"></img>
                                        <p>{item.time}</p>
                                    </div>
                                    <div className="card-icon">
                                        <img src={Elevation} alt="elevation-icon"></img>
                                        <p>{item.elevation}</p>
                                    </div>
                                    <div className="card-icon">
                                        <img src={Star} alt="star-icon"></img>
                                        <p>{item.rating}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <h6>Opis staze</h6>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RouteContent;