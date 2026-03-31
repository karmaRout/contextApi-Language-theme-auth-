import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

export default function Profile() {
  const { theme } = useContext(ThemeContext);
  const { text } = useContext(LanguageContext);

  return (
    <div className={`page-bg ${theme}`}>
      <div className="profile-wrapper">
        <h2>{text.profileTitle}</h2>

        <p>{text.profileDesc1}</p>
        <p>{text.profileDesc2}</p>
        <p>{text.profileDesc3}</p>
        <p>{text.profileDesc4}</p>
        <p>{text.profileDesc5}</p>

        <div className="theme-box">
          {text.currentTheme}: <strong>{theme}</strong>
        </div>
      </div>
    </div>
  );
}
