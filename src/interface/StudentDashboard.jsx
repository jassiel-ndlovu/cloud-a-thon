import CourseList from '../components/CourseList';
import CoursesSection from '../components/CoursesSection';
import './StudentDashboard.css'

function StudentDashboard() {
    const courses = [
        { id: 1, courseName: 'Intro to Stats', tutorName: 'John Doe', isVerified: true, rating: 4.5, subject: 'Mathematics' },
        { id: 2, courseName: 'Advanced Algebra', tutorName: 'Jane Smith', isVerified: false, rating: 4.0, subject: 'Mathematics' },
        { id: 3, courseName: 'Physics 101', tutorName: 'Albert Einstein', isVerified: true, rating: 5.0, subject: 'Physics' }
    ];

    return (
        <>
            <header className='db-student-header'>
                <div className="db-student-header-logo">
                    <i className="fa-solid fa-earth-africa"/>
                    <h1>Student Dashboard</h1>
                </div>
                <div className='db-student-credentials'>
                    <i className="fa-solid fa-bell"></i>

                    <section className='db-student-user'>
                        <div className='db-user-wrapper'>
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <h3>Jane Doe</h3>
                    </section>
                </div>
            </header>
            <main>
                <section className='db-student-section-enrolled-courses'>
                    <h3 className='db-student-h3-enrolled'>Enrolled Courses</h3>
                    <CoursesSection />
                </section>
                <section className='db-student-search-courses'>
                    <h3 className='db-student-h3-find'>Find More Courses</h3>
                    <CourseList courses={courses} />
                </section>

            </main>
        </>
    )
}

export default StudentDashboard;