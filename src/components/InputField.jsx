

const InputField = ({fieldname,labelname}) => {
    return(
        <div className='inputcontainer'>
            <label for={fieldname}>{labelname}</label>
            <input className='inputfield' />
        </div>
    )
}

InputField.defaultProps = {
    fieldname:'myinput',
    labelname:'myinput',
}

export default InputField