import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
    render() {
        return (
            <div>SongList Here</div>
        );
    }
};

export default connect()(SongList);
