import { NavLink } from 'react-router-dom';
import CardList from '../components/CardList';
import './Home.css'

function Home() {
    const cardsData = [
        { profileImage: 'https://i.pinimg.com/originals/55/8d/80/558d805ca6259504b1d9d3d4b5a94ac4.jpg', name: 'John Doe', rating: 4 },
        { profileImage: 'https://i.pinimg.com/originals/05/d0/f3/05d0f30fda3b593a296ed7f4bcd12fcf.jpg', name: 'Jane Smith', rating: 5 },
        { profileImage: 'https://i.pinimg.com/originals/e0/29/25/e02925ed8f92b4d580704ca0810a9a4a.jpg', name: 'Alice Johnson', rating: 3 },
        { profileImage: 'https://i.pinimg.com/originals/c2/e4/92/c2e49287038238bd3dfa86df77b10a4b.jpg', name: 'Alice Johnson', rating: 3 }
    ];

    return (
        <>
            <header>
                <div className='div-logo'>
                    <i className="fa-solid fa-earth-africa"/>
                    <h1>TutorSphere</h1>
                </div>
                <div className='div-buttons'>
                    <NavLink to="/signin">
                        <button className="sign-in">Sign In</button>
                    </NavLink>
                    <button className="sign-up">Sign Up</button>
                </div>
            </header>
            <main>
                <section className='section-image'>
                    <img src='https://images.pexels.com/photos/4144532/pexels-photo-4144532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image' className='img-intro'></img>
                </section>
                
                <h1>Learning <em>Re-invented</em></h1>
                
                <section className='section-verified-tutors'>
                    <div className='section-title'>
                        <h2>Our Tutors</h2>
                    </div>
                    <div className='div-card-list'>
                        <CardList cards={cardsData} />
                    </div>
                </section>
                <section className='section-intro'>
                    <article>
                        <h3>About Us</h3>
                        <p>
                            In today's fast-paced educational landscape, finding the right tutor can be a challenging task for students and parents alike. At the same time, dedicated and skilled tutors often struggle to connect with students who need their expertise. Our Tutor Service Middleman platform is designed to bridge this gap, providing a seamless and efficient solution for both tutors and students.
                        </p>
                    </article>

                    <article>
                        <h3>For Tutors</h3>
                        <p>
                            Our platform offers a unique opportunity for tutors to expand their reach and grow their client base. By signing up on our platform, tutors can showcase their qualifications, teaching styles, and areas of expertise to a wide audience. The process is straightforward and user-friendly, allowing tutors to create detailed profiles that highlight their strengths and attract potential students.

                            One of the standout features of our platform is its integrated Learning Management System (LMS). This comprehensive tool enables tutors to manage their teaching activities effectively. From scheduling classes to assigning and grading homework, the LMS provides all the functionalities needed to conduct online or in-person tutoring sessions seamlessly. Tutors can track student progress, communicate directly with students and parents, and access a variety of educational resources to enhance their teaching.

                            In return for these services, our platform operates on a subscription-based model, taking a small percentage from the tutors' monthly subscription fees. This approach ensures that tutors have access to our extensive network of students and the tools they need to succeed without any upfront costs.

                        </p>
                    </article>
                    
                    <article>
                        <h3>For Students and Parents</h3>
                        <p>
                            Our platform is equally beneficial for students and their parents. Finding a qualified tutor who matches a student's specific needs can be a daunting task. Our platform simplifies this process by providing a verified list of tutors, each with detailed profiles and reviews from previous students. This transparency helps students and parents make informed decisions about the best tutor for their needs.

                            The integrated LMS is not just a tool for tutors; it also enhances the learning experience for students. With features like progress tracking, personalized feedback, and interactive assignments, students can stay engaged and motivated throughout their learning journey. Parents can also monitor their child's progress and communicate directly with tutors, ensuring a collaborative approach to education.
                        </p>
                    </article>
                    
                    <article>
                        <h3>Verification and Trust</h3>
                        <p>
                            Trust and safety are paramount on our platform. We have a rigorous verification process to ensure that all tutors are qualified and trustworthy. This includes background checks, credential verification, and interviews. Additionally, students are also verified to maintain a secure and professional environment for all users.
                        </p>
                    </article>

                    <article>
                        <h3>Conclusion</h3>
                        <p>
                            Our Tutor Service Middleman platform is more than just a marketplace for tutors and students. It is a comprehensive solution that addresses the challenges faced by both parties in the education sector. By providing a robust LMS, a transparent and secure platform, and a subscription-based model that benefits tutors, we aim to revolutionize the way tutoring services are accessed and delivered.

                            Join us today and be a part of a platform that is committed to educational excellence and mutual growth. Whether you are a tutor looking to expand your reach or a student seeking personalized education, our platform is here to support you every step of the way.
                        </p>
                    </article>
                </section>
            </main>
            <footer>
                &#169; TutorSphere 2024
            </footer>
        </>
    );
}

export default Home;