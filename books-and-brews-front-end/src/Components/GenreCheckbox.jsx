//reusbale component that allows the passing of customizable props
const GenreCheckbox = ({id, name, label, isChecked, handleChange}) => {
    return(
        <div>
            <input
            id={id}
            name={name}
            value={id}
            className="checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
            >
            </input>
            <label htmlFor="{id}">{label}</label>
        </div>
    )

}

export default GenreCheckbox;