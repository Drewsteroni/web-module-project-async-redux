import React from 'react';
import { connect } from 'react-redux';

import { displayData } from '../actions/spaceActions'

const SpaceData = props => {
    const fetchSpace = e => {
        e.preventDefault();
        props.displayData();
    };

    return(
        <div>
            <h1>Space Stuff</h1>
            {props.isFetching && <p>Fetching Space Stuff</p>}
            <span>
                {props.data.map(data => (
                    <h2 key={data.url}>{data.ships}</h2>
                ))}
            </span>
            {props.error && <p className="error">{props.error}</p>}
            <button onClick={fetchSpace}>Fetch Space Stuff</button>
        </div>
    );
};

const mapStateToProps = state => ({
    data: state.data,
    error: state.error,
    isFetching: state.isFetching,
});

export default connect(
    mapStateToProps,
    { displayData }
)(SpaceData)