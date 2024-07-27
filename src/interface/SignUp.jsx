import { NavLink } from 'react-router-dom';
import './SignUp.css'

function SignUp() {

    return (
        <>
            <main>
                <section className="signup-section-content">
                    <h1>Create account</h1>
                    <div className='signup-div-buttons'>
                        <button>
                            <i className="fa-brands fa-google"></i>
                        </button>
                        <button>
                            <i className="fa-brands fa-facebook"></i>
                        </button>
                    </div>

                    <div>Or</div>

                    <input placeholder="Username" />
                    <input placeholder="Password" />
                    <input placeholder="Confirm Password" />
                    <input placeholder="Email Address" />

                    <NavLink className="signup-nav-link" to="/studentdashboard">
                        <button className='btn-signup'>Sign Up</button>
                    </NavLink>
                    
                    <div className="signin">
                        <p>Already have an account? </p>
                        <a href="/signin">Sign In.</a>
                    </div>
                </section>
            </main>
        </>
    )
}

export default SignUp;