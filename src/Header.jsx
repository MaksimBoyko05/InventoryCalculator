import './App.css'
import {useTheme} from "./context/ThemeContext.jsx";
import { Moon, Sun } from 'lucide-react';

export default function Header(){
  const { theme, toggleTheme } = useTheme();
  return(
    <>
      <div className={"header"}>
      <div>
        <h4>Crafter's Nexus</h4>
      </div>
      <div>
        <button className={"switchthemebtn"} onClick={toggleTheme}>{theme === 'light' ? <Sun/> : <Moon/>}</button>
      </div>
      </div>
    </>
  )
}