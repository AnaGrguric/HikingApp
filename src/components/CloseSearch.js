import React from 'react';
import btnClose from '../icons/btnClose.svg'

class CloseSearch extends React.Component {
    render() {
        return (
            <div className="close-icon hidden" id="close-search"
            onClick={() => 
            document.getElementById("content-section").classList.remove("block") & 
            document.getElementById("search-block").classList.remove("top") &
            document.getElementById("close-search").classList.add("hidden")}>
            <img src={btnClose}></img>
            </div>
        )
    }
}
export default CloseSearch;

