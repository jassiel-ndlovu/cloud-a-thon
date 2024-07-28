import React, { useState } from 'react'
import CourseListItem from './CourseListItem'
import SearchFilterSection from './SearchFilterSection';
import './CourseList.css'

const CourseList = ({ courses }) => {
    const [filteredCourses, setFilteredCourses] = useState(courses);

    const handleSearch = (searchTerm) => {
        const lowercasedTerm = searchTerm.toLowerCase();
        const filtered = courses.filter(course =>
            course.courseName.toLowerCase().includes(lowercasedTerm) ||
            course.tutorName.toLowerCase().includes(lowercasedTerm)
        );
        setFilteredCourses(filtered);
    };

    const handleFilter = (filter) => {
        if (filter === "") {
            setFilteredCourses(courses);
        } else {
            const filtered = courses.filter(course => course.subject === filter);
            setFilteredCourses(filtered);
        }
    };

    return (
        <div className="course-list-container">
            <SearchFilterSection onSearch={handleSearch} onFilter={handleFilter} />
            <div className="course-list">
                {filteredCourses.map(course => (
                    <CourseListItem
                        key={course.id}
                        subject={course.subject}
                        courseName={course.courseName}
                        tutorName={course.tutorName}
                        isVerified={course.isVerified}
                        rating={course.rating}
                    />
                ))}
            </div>
        </div>
    );
}

export default CourseList;
