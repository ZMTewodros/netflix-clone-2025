import "../Header/header.css"
import netflixLogo from "../../assets/images/netflix_logo_icon.svg"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
    <>
    
     <div className="header-outer-container">
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li><img src={netflixLogo} alt="netflixLogo" width="100"/></li>
            <li>Netflix</li>
            <li>home</li>
            <li>Tvshow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li><SearchIcon/></li>
            <li><NotificationsNoneIcon/></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>
          </ul>






        </div>
      </div>
     </div>
    
    
    </>
  )
}

export default Header