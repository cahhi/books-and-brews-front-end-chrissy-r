const FormInput = ({id, label, value, handleChange}) => {

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type='text' className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus: shadow-outline"value={value} onChange={handleChange} /> 
        </div>
    )
}

export default FormInput;
