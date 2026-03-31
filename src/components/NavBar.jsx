import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { LanguageContext } from "../context/LanguageContext";

export default function NavBar() {
  const { handleTheme } = useContext(ThemeContext);
  const { handleLogout, user } = useContext(AuthContext);
  const {handleLangChange,lang} = useContext(LanguageContext);

  return (
    <div className="nav-container">
      <div className="nav-left">
        <div className="nav-bar">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>

      <div className="nav-right">
        {user && <span className="user-name">Hi, {user.email}</span>}
        <button onClick={handleTheme} className="toggle">
          🌙
        </button>
        <button onClick={handleLogout} className="logout">
          Logout
        </button>
        <button onClick={handleLangChange} className="language">
          {lang}
        </button>
      </div>
    </div>
  );
}
