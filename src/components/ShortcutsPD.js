import React from 'react';
import Shortcut from './Shortcut';
import ShortcutsData from '../ShortcutsData';

class ShortcutsPD extends React.Component {
    render() {
        return (
            <div>
                <div className="shortcutsPD">
                    <Shortcut data={ShortcutsData} shortcutIndex={0}/>
                    <Shortcut data={ShortcutsData} shortcutIndex={1}/>
                    <Shortcut data={ShortcutsData} shortcutIndex={2}/>
                    <Shortcut data={ShortcutsData} shortcutIndex={3}/>
                    <Shortcut data={ShortcutsData} shortcutIndex={4}/>
                </div>
            </div>


        )
    }
}

export default ShortcutsPD;