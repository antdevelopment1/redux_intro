// Action Creator
export const selectSong = (song) => {

    // Returned action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
}