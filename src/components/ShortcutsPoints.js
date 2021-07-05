import React from 'react';
import Shortcut from './Shortcut';
import ShortcutsData from '../ShortcutsData';

class ShortcutsPoints extends React.Component {
    render() {
        return (
            <div>
                <div className="shortcutsPoints">
                    <Shortcut data={ShortcutsData} shortcutIndex={5}/>
                    <Shortcut data={ShortcutsData} shortcutIndex={6}/>
                    <Shortcut data={ShortcutsData} shortcutIndex={7}/>
                    <Shortcut data={ShortcutsData} shortcutIndex={8}/>
                    <Shortcut data={ShortcutsData} shortcutIndex={9}/>
                </div>
            </div>


        )
    }
}

export default ShortcutsPoints;