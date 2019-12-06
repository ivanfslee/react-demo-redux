
import React from 'react';
// import { selectSong } from '../actions'; //curly braces mean import named export. If it is an export default, you don't need curly braces
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>            
        </div>
    );
};

export default App;