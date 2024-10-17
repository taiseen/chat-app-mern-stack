const BtnAuth = ({ isBtnDisable, label }) => {
    return (
        <div>
            <button className='btn btn-block mt-2 border border-slate-700' disabled={isBtnDisable}>
                {isBtnDisable ? <span className='loading loading-spinner'></span> : label}
            </button>
        </div>
    )
}

export default BtnAuth