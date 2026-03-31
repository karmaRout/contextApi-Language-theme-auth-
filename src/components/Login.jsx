import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const {theme} = useContext(ThemeContext)
  const {handleLogin} = useContext(AuthContext)
  const [password,setPassword] = useState();
  const [email,setEmail] = useState();
  const handleSubmit = (e) =>{
    e.preventDefault()
    debugger
    console.log(password)
    console.log(email)
    handleLogin({
        email:email,
        password:password
    })
  }
  return (
    <div className={`page-bg ${theme}`}>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className={`login-container ${theme}`}>
            <div className="login-card">
                <h2>Login</h2>

                <input type="text" placeholder="Email" className="input-field" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" className="input-field" onChange={(e)=>setPassword(e.target.value)}/>

                <button className="login-btn" type="submit" >Login</button>
            </div>
            </div>
        </form>

    </div>
  );
}
