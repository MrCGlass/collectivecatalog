import InputField from './InputField'
import FormButton from './FormButton'
const LoginForm = () => {
    return(
        <div className='formcontainer'>
            <form className='formsstyle'>
                <InputField fieldname='email' labelname='Email'/>
                <hr/>
                <InputField fieldname='password' labelname='Password'/>
                <FormButton/>
            </form>
        </div>
    )
}

export default LoginForm 