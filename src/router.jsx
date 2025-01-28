import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import PatientForm from "./components/PatientForm";
import DoctorForm from "./components/DoctorForm";
// import ForgotPassword from "./components/ForgotPassword";
// import ResetPass from "./components/ResetPass";

export const router = createBrowserRouter([
    {path: "/",element: <App/>},
    {path: "/signup",element: <Signup/>},
    {path: "/signin",element: <Signin/>},
    {path: "/patientform",element:<PatientForm/>},
    {path: "/dashboard",element: <PrivateRoute> <Dashboard/> </PrivateRoute>  },
    {path: "/doctorform",element:<DoctorForm/>},
    // {path: "/forgotpass",element: <ForgotPassword/>},
    // {path: "/resetpass",element: <ResetPass/>},
])