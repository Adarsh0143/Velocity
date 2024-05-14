import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/features/authSlice.js";

import Cookies from "js-cookie";

const Navbar = () => {
    const isAuthenticated = useSelector((state) => state.auth.isLoggedIn); //Get the state from redux store to check if user is logged in or not
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const token = Cookies.get("token");

    if (!token) {
        dispatch(logout()); //Set the state to false if token is not present in cookies in case of page refresh
    } else {
        dispatch(login()); //Set the state to true if token is present in cookies in case of page refresh
    }
    const setLogout = () => {
        Cookies.remove("token");
        dispatch(logout()); //Set the state to false if user clicks on logout button
        navigate("/login");
    };

    return (
        <>

            <header className="bg-dark">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="md:flex md:items-center md:gap-12">
                            <div className="md:flex md:items-center text-white transition hover:text-blue-500 block text-3xl">
                                Velocity
                            </div>
                        </div>

                        <div className="hidden md:block ">
                            <nav aria-label="Global">
                                <ul className="flex items-center gap-6 text-xl">
                                    <li>
                                        <Link
                                            to={"/"}
                                            className="text-white transition hover:text-blue-500"
                                            href="#"
                                        >
                                            Home
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to={"/products"}
                                            className="text-white transition hover:text-blue-500"
                                        >
                                            Games
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to={"/"}
                                            className="text-white transition hover:text-blue-500"
                                            href="#"
                                        >
                                            Category
                                        </Link>
                                    </li>

                                    <li>
                                        {isAuthenticated && (
                                            <>
                                                <li>
                                                    <Link to="/orders">
                                                        Library
                                                    </Link>
                                                </li>
                                            </>
                                        )}
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                {isAuthenticated ? (
                                    <button
                                        className="rounded-md bg-slate-500 px-5 py-2.5 text-xl font-medium text-white shadow hover:bg-blue-500"
                                        onClick={() => setLogout()}
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <Link to="/login">
                                        <button className="rounded-md bg-slate-500 px-5 py-2.5 text-xl font-medium text-white shadow hover:bg-blue-500">
                                            Login
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
