import React, { Component } from 'react';

import './Courses.css';
import Course from '../Course/Course'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        activeCourse: {}
    }

    handleArticleClick = (course) => {
        this.setState({ activeCourse: course });
        this.props.history.push(this.props.match.url + "/" + course.id)
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => 

                            (
                            <Link key={course.id} to={this.props.match.url + "/" + course.id}>
                                <article onClick={() => this.handleArticleClick(course)} className="Course" >{course.title}</article>
                            </Link>
                            )
                        )
                    }
                </section>
       
                <Route exact path="/courses/:id" component={() => <Course title={this.state.activeCourse.title} id={this.state.activeCourse.id}/>}/>

            </div>
        );
    }
}

export default Courses;