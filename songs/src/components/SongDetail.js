import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ( {song} ) => {
    // console.log(song.title)

    if (!song) {
        return (
            <div>Please pick a song</div>
        )
    }
    return (
        <div>
           {song.title}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {song: state.selectedSong}
}
export default connect(mapStateToProps) (SongDetail);