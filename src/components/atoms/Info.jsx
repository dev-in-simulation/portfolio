import React from 'react';
import PropTypes from 'prop-types';

function Info({ text }) {
    return (
        <p className='info'>{text}</p>
    );
}

Info.propTypes = {
    text: PropTypes.string.isRequired
};

export default Info;