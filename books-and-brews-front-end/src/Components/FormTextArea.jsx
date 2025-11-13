//resuable text area component for a form
const FormTextArea = ({id, label, value, handleChange}) => {

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} value={value} className="w-full h-32 border-[3px] border-[#555] p-3 rounded-md" onChange={handleChange}/>
        </div>
    );

};

export default FormTextArea;