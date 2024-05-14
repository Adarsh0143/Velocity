const Mostplayed = () => {
    return (
        <>
            <div>
                <div className="card  bg-base-100 shadow-xl image-full m-5">
                    <figure>
                        <img src="src\image\cs.jpeg" alt="CSgo" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-6xl card-title">Most played game!</h2>
                        <p className="text-5xl">Add Counter Strike Global Offensive 2.</p>
                        <div className="card-actions justify-center">
                            <button className="btn w-96 h-24 btn-primary text-3xl">Play</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export { Mostplayed };
