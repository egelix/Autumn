import { useContext } from "react";
import UserContext from "../../user/UserContext";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({component: Component, ...restOfProps}) => {
    const [currentUser, setCurrentUser] = useContext(UserContext);
    return(<>
        {currentUser !== null? <Component />
        :<Navigate to="/" />}
        </>
    )
}
export default ProtectedRoute;