import React, { useContext } from 'react'; 
import { Navigate, useLocation } from 'react-router-dom'; 
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';
const PrivateRoute = ({children}) => {

    const { user, loader } = useContext(AuthContext);
    const location = useLocation() 
    if(loader){
        return <Loading></Loading>
    }
    if (user) {
        return children
    }
    
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );

};

export default PrivateRoute;