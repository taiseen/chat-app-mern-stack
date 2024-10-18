const BtnAuth = ({ isBtnDisable, label }) => {

    return (
        <div>
            <button
                disabled={isBtnDisable}
                className='btn btn-block mt-2 border border-slate-700'
            >
                {
                    isBtnDisable
                        ? <span className='loading loading-spinner'></span>
                        : label
                }
            </button>
        </div>
    )
}

export default BtnAuth