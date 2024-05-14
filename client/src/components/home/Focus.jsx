const Focus = () => {
    return (
        <>
            <div
                tabIndex={0}
                className=" collapse m-2 text-primary-content focus:bg-white focus:text-gray-900 w-1/2 ml-[460px] border-2 border-blue-500 bg-slate-500"
            >
                <div className="collapse-title m-2 text-2xl"><h2>Click to know more about 'PALWORLD'</h2></div>
                <div className="collapse-content">
                    <p className="text-2xl "> Palworld is an upcoming action-adventure, survival, and monster-taming game created and
                        published by Japanese developer Pocket Pair.</p>
                </div>
            </div>
        </>
    )
}

export {Focus};