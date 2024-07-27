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

                    <input placeholder="Enter your username" />
                    <input placeholder="Enter your password" />
                    <button className='btn-signin'>Sign In</button>
                    
                    <div className="signup">
                        <p>Don't have an account? </p>
                        <a href="#">Sign Up.</a>
                    </div>
                </section>
            </main>
        </>
    )
}

export default SignIn;