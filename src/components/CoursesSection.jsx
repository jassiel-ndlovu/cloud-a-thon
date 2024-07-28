import React from 'react'
import CourseCard from './CourseCard'
import './CoursesSection.css'

const CoursesSection = () => {
    const courses = [
        {
            courseName: 'Intro to Stats',
            courseImage: 'https://cf.cjdropshipping.com/3f155667-276e-44f1-a4d5-f91be42f92ab.jpg',
            tutorName: 'John Doe',
            isVerified: true
        },
        {
            courseName: 'Advanced Algebra',
            courseImage: 'https://cf.cjdropshipping.com/987d10f3-d9bf-4de1-a7ab-4e5ada0912a1.jpg',
            tutorName: 'Fred Smith',
            isVerified: false
        },
        {
            courseName: 'Precalculus',
            courseImage: 'https://thealiencanva.com/cdn/shop/files/ea648e6a-8fc8-4ddc-9eaa-1a671903933a.jpg?v=1714802871&width=493',
            tutorName: 'Jane Smith',
            isVerified: true
        },
        {
            courseName: 'Physics 101',
            courseImage: 'https://cf.cjdropshipping.com/9f831f1a-0424-4b05-907e-144baff33780.jpg',
            tutorName: 'Carly Smith',
            isVerified: false
        },
        {
            courseName: 'Software Design',
            courseImage: 'https://cf.cjdropshipping.com/9f831f1a-0424-4b05-907e-144baff33780.jpg',
            tutorName: 'Issa Smith',
            isVerified: false
        },
    ]

    return (
        <div className="courses-section">
            {courses.map((course, index) => (
                <CourseCard
                    key={index}
                    courseName={course.courseName}
                    courseImage={course.courseImage}
                    tutorName={course.tutorName}
                    isVerified={course.isVerified}
                />
            ))}
        </div>
    )
}

export default CoursesSection
