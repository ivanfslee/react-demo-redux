
import React from 'react';
// import { selectSong } from '../actions'; //curly braces mean import named export. If it is an export default, you don't need curly braces
import SongList from './SongList';

const App = () => {
    return (
        <div>
            <SongList />
        </div>
    );
};

export default App;