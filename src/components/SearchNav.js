import React from 'react';
import Filter from '../icons/filter.svg'
import '../App.css';
import Data from '../Data.js';
import Elevation from '../icons/elevation.svg';
import Lenght from '../icons/lenght.svg';
import Time from '../icons/time.svg';
import Star from '../icons/star.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ShortcutsPD from './ShortcutsPD';
import ShortcutsPoints from './ShortcutsPoints';
import Popup from './Filter';

const SearchNav = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [btnPopup, setBtnPopup] = useState(false);

    return (
        <div className="container">
            <nav className="search-nav" id="search-block">
                <div className="col-sm-4">
                    <input
                        placeholder="Search"
                        onClick={() => document.getElementById("search-block").classList.toggle("top") & document.getElementById("content-section").classList.toggle("block")}
                        onChange={(event) => {setSearchTerm(event.target.value);}}
                        >
                    </input>
                    <button src={Filter} className="filter-icon"
                        onClick={() => setBtnPopup(true)}
                    >
                    </button>
                </div>
            </nav>
            <Popup trigger={btnPopup} setTrigger={setBtnPopup} />
            <div className="content-section" id="content-section">
                <div className="shortcuts">
                    <p>Planinarski domovi (5)</p>
                    <ShortcutsPD />
                    <p>Vrhovi (5)</p>
                    <ShortcutsPoints />
                </div>
                <p className="results">Rezultati (4)</p>
                <div className="search-results">
                    {Data.filter((item) => {
                        if (searchTerm === "") {
                            return item;
                        } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return item;
                        }
                    }).map((item, key) => {
                        return (
                            <div className="card col-sm-4" key={key}>
                                <div className="grid-layout">
                                    <img className="route-img" src={item.coverimg} alt="woods"></img>
                                    <img className="route-img-small" src={item.smallimg} alt="map"></img>
                                </div>
                                <div className="route-info">
                                    <div className="route-title">
                                        <h6><Link to={item.link}>{item.title}</Link></h6>
                                        <p className="difficulty-meddium">{item.difficulty}</p>
                                    </div>
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
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default SearchNav;