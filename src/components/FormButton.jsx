

const FormButton = ({buttonclass,buttontext}) =>{
    return (
        <button type='submit' className={buttonclass}>{buttontext}</button>
    )
}

FormButton.defaultProps = {

    buttonclass:'',
    buttontext:'button'
}

export default FormButton