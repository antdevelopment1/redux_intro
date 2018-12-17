import React from 'react';
import actions from './../actions/index.js';
// The path for the line above and below are equivalent. Both will navigate to actions/index.js
// import {selectSong} from './../actions';
import SongList from './SongList';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <div><SongList /></div>
                </div>
            </div>
        </div>
    )
}

export default App;