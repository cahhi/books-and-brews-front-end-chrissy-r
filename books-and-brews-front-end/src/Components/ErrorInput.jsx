//created an error message input component for reusability
const ErrorInput = ({hasError, message}) => {
    return (
        <div>
            {hasError && <p className="error">{message}</p>}
        </div>
    )
}
 
export default ErrorInput;