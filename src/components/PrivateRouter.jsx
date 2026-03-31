import { useContext } from "react";
import Login from "./Login";
import { AuthContext } from "../context/AuthContext";

export default function PrivateRouter({children}) {
    const {user} = useContext(AuthContext);
    const isAuth = user ?((user.email == "karma.rout@gmail.com" && user.password == "password")? true: false): false;
    return(
        <>
            {isAuth ? children : <Login />}
        </>
    )
}