const Error= ({mensaje}) => {

    return (
        <>
            <div className="text-center mb-4 text-red-500 rounded-sm uppercase font-semibold text-xs">
                <p>{mensaje}</p>
            </div>
        </>
    )
}

export default Error