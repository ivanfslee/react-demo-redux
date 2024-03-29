import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }


    render() {
        //this.props === { songs: state.songs }
        console.log(this.props);
        return (
            <div className="ui divided list">{this.renderList()}</div>
        );
    }
}

//state parameter is all data inside redux store 
const mapStateToProps = (state) => { 
    console.log(state);
    return { songs: state.songs }; // makes this.props === { songs: state.songs }
}

//action creator selectSong is passed in as an obj to connect component
export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);
