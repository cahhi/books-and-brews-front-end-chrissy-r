const FormInput = ({id, label, value, handleChange}) => {

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type='text' className="border-[3px] border-[#555] px-2" value={value} onChange={handleChange} /> 
        </div>
    )
}

export default FormInput;
