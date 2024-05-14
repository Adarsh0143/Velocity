const Topseller = () => {
    return (
        <div>
            <div>
				<div className="bg-[#B0BBBF] hover:bg-transparent m-4 p-4 flex justify-center rounded-xl ">
                <div className="  w-96 bg-base-100 shadow-xl rounded-lg m-4 border-4 border-black  hover:border-blue-500">
                    <figure className="px-15 pt-15">
                        <img
                            src="src\image\mortal.jpg"
                            alt="mortal"
                            
                        />
                    </figure>
                    <div className="card-body items-center text-center ">
                        <h2 className="card-title text-2xl">Mortal Combat</h2>
                        <p className="text-xl">Buy this month's top seller.</p>
                        <div className="card-actions mt-5">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
				</div>

            </div>
        </div>
    );
};
export { Topseller };
