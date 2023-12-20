import {
    createBrowserRouter,
  } from "react-router-dom";
  import Dashboard from "../Layouts/Dashboard";
  import Main from "../Layouts/Main";
  import Classes from "../Pages/Class/Classes";
import AddCourse from "../pages/Dashboard/Admin/AddCourse";
  import EnrolledUser from "../Pages/Dashboard/Admin/EnrolledUser";
  import SelectedClass from "../Pages/Dashboard/Student/SelectedClass";
  import StudentDashboard from "../Pages/Dashboard/Student/StudentDashboard";
  import Errorpage from "../Pages/Errorpage/Errorpage";
  import Home from "../Pages/Home/Home/Home";
  import Login from "../Pages/Login/Login";
  import Register from "../Pages/Register/Register";
  import AdminRoute from "./AdminRoute";
  import PrivateRoute from "./PrivateRoute";
  import StudentRoute from "./StudentRoute";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/classes',
          element: <Classes></Classes>
        },
        
      ]
    },
    {
      path: 'dashboard',
      element: (<PrivateRoute><Dashboard></Dashboard></PrivateRoute>),
      children: [
  
        // for students
        {
          path: "student",
          element: (<StudentRoute><StudentDashboard></StudentDashboard></StudentRoute>),
        },
        {
          path: "selectedClasses",
          element: (<StudentRoute><SelectedClass></SelectedClass></StudentRoute>),
        },
  
        
        // for admin
        {
              path: 'addCourse',
              element: (<AdminRoute><AddCourse></AddCourse></AdminRoute>)
            },
        {
          path: "enrolledUser",
          element: (<AdminRoute><EnrolledUser></EnrolledUser></AdminRoute>),
        }
      ]
    }
  ]);