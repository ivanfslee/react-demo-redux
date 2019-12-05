//Action creator

//named export -allows us to export more than one thing from a file
export const selectSong = (song) => {
    //return an action
    return {
        //type prop is required
        //payload is optional prop
        type: 'SONG_SELECTED',
        payload: song
    };
};

