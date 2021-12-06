import InputField from "./InputField";
import React from 'react';
import Header from "./Header";
import FormButton from "./FormButton";



class SignupForm extends React.Component {
    render(){
        return (
            <div className='formcontainer'>
                <form className='formsstyle' name='SignupForm'>
                    <Header title='Sign Up'/>
                    <div className='fielddiv'>
                        <InputField fieldname='first_name' labelname='First Name'/>
                        <InputField fieldname='last_name' labelname="Last Name"/>
                        <InputField fieldname='email' labelname='Email'/>
                        <InputField fieldname='password' labelname='Password'/>
                    </div>
                    <FormButton form='SignupForm'/>
                </form>
            </div>
        )
    }
}

export default SignupForm 