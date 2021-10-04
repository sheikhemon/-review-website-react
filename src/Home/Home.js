import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course.js';
import { useCourses } from '../hooks/useCourses.js';
import './Home.css'

const Home = () => {
    const [courses] = useCourses();

    return (
        <Container>
            <div className="Home-style">
                <h1 style={{ marginBottom: '24px', fontSize: '55px', color: '#232946', fontWeight: '700' }}>SKILL PATHWAY PROGRAMMING</h1>
                <h2 style={{ marginBottom: '24px', fontSize: '45px', color: '#232946', fontWeight: '700' }}>Top Courses for Frontend and Backend Development</h2>
                <p style={{ fontSize: '18px', letterSpacing: '1px', fontWeight: '600', paddingBottom: '60px' }}>“Developers are builders of tomorrow,” <br /> as said by a popular writer. They always match the steps with ever-changing and emerging technologies, such as Javascript, APIs, Python, etc. </p>
                <h2 style={{ fontSize: '45px', color: '#232946', fontWeight: '600' }}>Our Running Services</h2>
                <hr className="line" />
                <Row
                    xs={1} md={2} className="g-4 ">
                    {
                        courses.slice(0, 4).map(course => <Course
                            course={course}
                        ></Course>)
                    }
                </Row>
            </div>
        </Container>
    );
};

export default Home;