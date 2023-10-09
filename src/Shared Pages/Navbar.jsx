import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";


const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        {
            user && 
            <>
                <li><NavLink to='/shop'>Shop</NavLink></li>
                <li><NavLink to='/gallery'>Gallery</NavLink></li>
                
            </>
        }
    </>
    return (
        <div className="navbar bg-base-100 px-5 mb-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="w-40"><img src="https://i.ibb.co/R7QG8Cq/Whats-App-Image-2023-10-08-at-23-34-32-6b8740e0.jpg" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user &&
                    <div className="flex">
                        <p className="border-2 my-auto p-2 rounded hidden md:flex">{user.displayName}</p>
                        <label tabIndex={0} className="mx-2 btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt="user"/>
                            </div>
                        </label>
                    </div>
                }
                {
                    user ? <a className="text-white bg-pink-500 sm:p-2 p-1 rounded-lg " onClick={handleSignOut}>Log Out</a> : <Link to='/login'><button className="text-white btn btn-secondary">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;