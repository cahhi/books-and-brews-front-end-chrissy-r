const FormTextArea = ({id, label, value, handleChange}) => {

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} value={value} onChange={handleChange}/>
        </div>
    );

};

export default FormTextArea;