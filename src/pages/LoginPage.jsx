import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"
const LoginPage = () => {
    return(
        <article className='article'>
            <div className='divcell'>
                <LoginForm/>
            </div>

            <div className='divcell'>
                <SignupForm/>
            </div>
        </article>
    )
}


export default LoginPage