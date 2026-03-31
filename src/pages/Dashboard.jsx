import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { LanguageContext } from "../context/LanguageContext"

export default function Dashboard(){
    const {theme} = useContext(ThemeContext)
    const {text} = useContext(LanguageContext)
    return(
        <div className={`page-bg ${theme}`}>
            <p>
                {text.dashboardDesc1}
            </p>
            <p>
                {text.dashboardDesc2}
            </p>
            <p>
                {text.dashboardDesc3}
            </p>
        </div>
    )
}