import React from 'react';
import './CourseListItem.css';
import verifiedIcon from '../assets/verified-icon.svg';
import notVerifiedIcon from '../assets/unverified-icon.svg';

const CourseListItem = ({ courseName, subject, tutorName, isVerified, rating }) => {
    return (
        <div className="course-list-item">
            <div className="course-details">
                <h3 className="course-name">{courseName}</h3>
                <div className="tutor-info">
                    <span className="tutor-name">{tutorName}</span>
                    <img src={isVerified ? verifiedIcon : notVerifiedIcon} alt={isVerified ? "Verified" : "Not Verified"} className="verification-icon" />
                </div>
            </div>
            <h3 className='subject'>{subject}</h3>
            <div className="course-rating">
                <span>{rating} ★</span>
            </div>
        </div>
    );
}

export default CourseListItem;
