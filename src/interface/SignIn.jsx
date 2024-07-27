import { NavLink } from 'react-router-dom';
import './SignIn.css'

function SignIn() {

    return (
        <>
            <main>
                <section className="section-content">
                    <h1>Sign In</h1>
                    <button>
                        <i className="fa-brands fa-google"></i>
                        <p>Continue with Google</p>
                    </button>
                    <button>
                        <i className="fa-brands fa-facebook"></i>
                        <p>Continue with Facebook</p>
                    </button>

                    <div>Or</div>

                    <input placeholder="Username" />
                    <input placeholder="Password" />

                    <NavLink className="signin-nav-link" to="/studentdashboard">
                        <button className='btn-signin'>Sign In</button>
                    </NavLink>
                    
                    <div className="signup">
                        <p>Don't have an account? </p>
                        <a href="/signup">Sign Up.</a>
                    </div>
                </section>
            </main>
        </>
    )
}

export default SignIn;