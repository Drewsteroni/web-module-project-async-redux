import React from 'react';
import { connect } from 'react-redux';

const spaceData = (props) => {
    const space = props.space;

    return(
        <div>
            {space.data}
        </div>
    )
}

export default connect(spaceData)