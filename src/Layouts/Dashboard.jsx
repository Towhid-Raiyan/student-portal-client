import { NavLink,  Outlet, useNavigate } from "react-router-dom";
import useAdmin from "../hook/useAdmin";
import useStudent from "../hook/useStudent";
import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import {
    FaHome,
    FaSignOutAlt,
    FaUserFriends,
    FaUserGraduate,
} from "react-icons/fa";
import {MdLibraryBooks } from "react-icons/md";
import setTitle from "../hook/setTitle";

const Dashboard = () => {
    setTitle("Dashboard");
    
    const [isAdmin] = useAdmin();
    const [isStudent] = useStudent();
    // console.log(isAdmin, isInstructor, isStudent);

    const { logOut, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.error("Logout Successful", { autoClose: 2000 });
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const navOptions = (
        <>
            {isStudent && (
                <>
                    <li>
                        <NavLink to="selectedClasses">
                            <MdLibraryBooks></MdLibraryBooks>Enrolled Class
                        </NavLink>
                    </li>
                </>
            )}
            
            {isAdmin && (
                <>
                    
                    <li>
                        <NavLink to="enrolledUser">
                            <FaUserGraduate></FaUserGraduate> Enrolled User
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="addCourse">
                            <FaUserFriends></FaUserFriends> Manage Courses
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div className="drawer lg:drawer-open ">
            <ToastContainer></ToastContainer>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                ></label>
                {/* Page content here */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-teal-700  text-white text-lg">
                    {/* Sidebar content here */}
                    {navOptions}
                    <div className="divider "></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome> Home Page
                        </NavLink>
                    </li>
                    {user && (
                        <li>
                            <button onClick={handleLogout}>
                                <FaSignOutAlt></FaSignOutAlt> Logout
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;