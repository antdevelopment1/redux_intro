import {combineReducers} from 'redux';

const songsReducers = () => {
    return [
        {
            title: 'Start Spangled Banner',
            duration: '4:05'
        },
        {
            title: 'Funky Town',
            duration: '3:55'
        }, 
        {
            title: 'Rehab',
            duration: '3:42'
        }
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    } else {
        return selectedSong;
    }
}

export default combineReducers({
    songs: songsReducers,
    selectedSong: selectedSongReducer
})

