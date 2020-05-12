import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Course extends Component {    
    render () {
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <p>You selected the Course with ID: { this.props.id }</p>
            </div>
        );
    }
}

Course.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string
}

export default Course;