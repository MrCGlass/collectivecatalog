import InputField from './InputField'
import FormButton from './FormButton'
import Header from './Header'


const LoginForm = () => {
    return(
        <div className='formcontainer'>
            <form className='formsstyle' name='LoginForm' >
                <Header title='Login'/>
                <div className='fielddiv'>
                    <InputField fieldname='email' labelname='Email'/>
                    <hr/>
                    <InputField fieldname='password' labelname='Password'/>
                    
                </div>
                <FormButton form='LoginForm'/>
            </form>
        </div>
    );
}

export default LoginForm; 