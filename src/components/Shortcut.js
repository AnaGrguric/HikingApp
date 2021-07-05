import React from 'react';
import { Link } from 'react-router-dom';

const Shortcut = ({ data, shortcutIndex }) => {
    return (
        <div>
            {data[shortcutIndex].map(item => (
                <div className="shortcut">
                    <img src={item.image} alt="planinarski-dom"></img>
                    <p><Link to={item.link}>{item.name}</Link></p>
                </div>
            ))}
        </div>
    )
}

export default Shortcut;