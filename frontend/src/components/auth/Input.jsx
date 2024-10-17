const Input = ({ inputKey, label, type = "text", placeholder, register, required = false, errors, minLength }) => {
    return (
        <div className="mb-1 flex flex-col gap-1">
            <div>
                <label className='label p-1' htmlFor={label}>
                    <span className='text-base label-text'>{label}</span>
                </label>

                <input
                    id={label}
                    type={type}
                    placeholder={placeholder}
                    {...register(inputKey, { required, minLength: minLength && { value: minLength, message: `${label} must be at least ${minLength} characters long` } })}
                    className={`w-full input h-10 ${errors[inputKey] ? 'input-error' : 'input-bordered'}`}
                />
            </div>

            {
                errors[inputKey] && (
                    <span className="text-red-600 text-sm">
                        {errors[inputKey].message || `${label} is required`}
                    </span>
                )
            }
        </div>
    );
};

export default Input;