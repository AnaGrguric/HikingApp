import React from 'react';
import Close from '../icons/close.svg';

function Popup(props) {

    return (props.trigger) ? (
        <div className="popup" id="filter-popup">
            <img src={Close} alt="close-btn" className="btn-close"
                onClick={() => props.setTrigger(false)}></img>
            <h4>Odaberite kriterije:</h4>
            <div>
                <h5>Težina staze:</h5>
                <select id="select-difficulty">
                    <option value="easy">Lagana</option>
                    <option value="medium">Srednje teška</option>
                    <option value="hard">Teška</option>
                </select>
            </div>
            <div>
                <h5>Duljina staze:</h5>
                <select id="select-lenght">
                    <option value="2km">do 2km</option>
                    <option value="2km - 5km">2km - 5km</option>
                    <option value="5km">više od 5km</option>
                </select>
            </div>
            <div>
                <h5>Uspon:</h5>
                <select id="select-height">
                    <option value="200m">do 200m</option>
                    <option value="200-400m">200m - 400m</option>
                    <option value="400m">više od 400m</option>
                </select>
            </div>
            <button>Primjeni</button>

        </div>
    ) : "";
}

export default Popup;