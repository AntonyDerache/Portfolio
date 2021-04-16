import React from 'react';
import PropTypes from 'prop-types';

const CompetenceItem = props => {
    return <li><div className={`${props.classImg} background-image`}></div>{props.name}</li>
}

CompetenceItem.propTypes = {
    classImg: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default CompetenceItem