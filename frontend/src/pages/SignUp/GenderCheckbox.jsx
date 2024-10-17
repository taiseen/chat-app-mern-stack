const GenderCheckbox = ({ register, errors }) => {

    return (
        <div className='flex mt-2'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text'>Male</span>

                    <input
                        value='male'
                        type='radio'
                        {...register("gender", { required: true })}
                        className={`radio radio-success ${errors.gender ? 'border-red-500' : 'border-slate-600'} `}
                    />
                </label>
            </div>

            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text'>Female</span>

                    <input
                        value='female'
                        type='radio'
                        {...register("gender", { required: true })}
                        className={`radio radio-success ${errors.gender ? 'border-red-500' : 'border-slate-600'} `}
                    />
                </label>
            </div>

            {
                errors.gender && (
                    <span className="text-red-600 text-sm mt-2 ml-2">
                        Gender is required
                    </span>
                )
            }
        </div>
    );
};

export default GenderCheckbox;
