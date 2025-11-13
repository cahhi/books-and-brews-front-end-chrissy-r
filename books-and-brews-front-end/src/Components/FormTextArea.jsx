const FormTextArea = ({id, label, value, handleChange}) => {

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} value={value} className="w-full border-[3px] border-[#555] p-8 rounded-md" onChange={handleChange}/>
        </div>
    );

};

export default FormTextArea;