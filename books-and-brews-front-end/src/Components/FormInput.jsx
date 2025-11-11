const FormInput = ({id, label, value, handleChange}) => {

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type='text' value={value} onChange={handleChange} /> 
        </div>
    )
}

export default FormInput;
