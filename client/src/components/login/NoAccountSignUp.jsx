import { Link } from "react-router-dom";

const NoAccountSignUp = () => {
    return (
        <>
            {/* <div className="card-body card-bordered border-base-300 rounded-box flex flex-row justify-evenly">
                <span className="text-center text-lg font-semibold">
                    No Account?
                </span>
                <div>
                    <Link to='/signup'>
                        <button className="btn btn-outline">Sign Up</button>
                    </Link>
                </div>
            </div> */}
            <div className="card-body border-gray-500 bg-base-100 rounded flex flex-row justify-evenly p-4">
    <span className="text-center text-2xl font-semibold text-white-800">
        No Account?
    </span>
    <div>
        <Link to='/signup'>
            <button className="btn bg-gray-500 text-lg hover:bg-blue-500 text-white font-bold py-2 px-4 rounded ">Sign Up</button>
        </Link>
    </div>
</div>
        </>
    );
};

export default NoAccountSignUp;
