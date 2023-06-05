import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }

    const navOption = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        {
            isAdmin ? <li><Link to='/dashboard/adminhome'>Dashboard</Link></li> :
                <li><Link to='/dashboard/userhome'>Dashboard</Link></li>
        }
        <li><Link to='/dashboard/mycart'>
            <div className="indicator">
                <span className="indicator-item badge badge-secondary -left-2">{cart?.length || 0}+</span>
                <FaShoppingCart className="text-2xl"></FaShoppingCart>
            </div>
        </Link></li>
        {
            user ? <>
                <button onClick={handleLogout} className="btn btn-ghost">Log Out</button>
                <span>{user?.displayName}</span>
            </> : <li><Link to='/login'>Login</Link></li>
        }


    </>
    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-30 max-w-screen-lg mx-auto text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Header;