//this is a reusable select component
const FormSelect = ({id, label, children, handleChange}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <select id={id} name={id} onChange={handleChange}>
                {children}
            </select>
        </div>
    );
};

export default FormSelect;