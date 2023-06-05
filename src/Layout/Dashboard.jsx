import { Helmet } from "react-helmet-async";
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Dashboard</title>
            </Helmet>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-5 lg:p-10">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">

                        {
                            isAdmin ? <>
                                <li><NavLink to='/dashboard/adminhome'><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/addItem'><FaUtensils></FaUtensils> Add an item</NavLink></li>
                                <li><NavLink to='/dashboard/manageitems'><FaWallet></FaWallet> Manage Items</NavLink></li>
                                <li><NavLink to='/'><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers> All Users</NavLink></li>
                            </> : <>
                                <li><NavLink to='/dashboard/userhome'><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to='/'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                                <li><NavLink to='/dashboard/mycart'>
                                    <div className="indicator">
                                        <span className="indicator-item badge badge-secondary -left-2">{cart?.length || 0}+</span>
                                        <FaShoppingCart className="text-2xl"></FaShoppingCart>
                                    </div> My Cart</NavLink></li>
                                <li><NavLink to='/'><FaWallet></FaWallet> Payment History</NavLink></li>
                            </>
                        }



                        <div className="divider"></div>

                        <li><NavLink to='/'><FaHome></FaHome> User Home</NavLink></li>
                        <li><NavLink to='/menu'> Our Menu</NavLink></li>
                        <li><NavLink to='/order/salad'>Order Food</NavLink></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;