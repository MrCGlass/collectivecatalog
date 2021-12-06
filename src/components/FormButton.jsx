

const FormButton = ({buttonclass,buttontext,form}) =>{
    return (
        <button type='submit' form={form} className={buttonclass}>{buttontext}</button>
    )
}

FormButton.defaultProps = {

    buttonclass:'',
    buttontext:'button',
    form:'',
}

export default FormButton