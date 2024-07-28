import React from 'react'
import './CourseCard.css'
import verifiedIcon from '../assets/verified-icon.svg'
import notVerifiedIcon from '../assets/unverified-icon.svg'

const CourseCard = ({ courseName, courseImage, tutorName, isVerified }) => {
    return (
        <div className="course-card">
            <img src={courseImage} alt={courseName} className="course-image" />
            <div className="course-details">
                <h3 className="course-name">{courseName}</h3>
                <div className="tutor-info">
                    <span className="tutor-name">{tutorName}</span>
                    <img src={isVerified ? verifiedIcon : notVerifiedIcon} alt={isVerified ? "Verified" : "Not Verified"} className="verification-icon" />
                </div>
            </div>
        </div>
    )
}

export default CourseCard
