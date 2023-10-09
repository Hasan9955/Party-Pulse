import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";


const PrivateRoute = ({ children }) => {

    const {user, loader} = useContext(AuthContext)
    const location = useLocation();
    

    if(loader){
        return <div className="flex justify-center py-48"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;