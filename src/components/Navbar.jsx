import { useState, useEffect } from "react"
import styles from "../css/Navbar.module.css"
import { Link, Outlet} from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar.jsx"

function Navbar() {
  
  const [showSearch, setShowSearch] =useState(false);
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => { 
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
    setShowSearch(false)
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  
  const handleShowSearch = () => {
    setShowSearch(prevState => !prevState);
  };
  
  
  return (
    <div className={`${styles.App}`}>
      <header className={`${styles.App_header}`}>
        <nav className={`${styles.navbar}`}>
        {!showSearch ? (
        <button className={`${styles.searchbtn}`} onClick={handleShowSearch}>
          <FaSearch className={`${styles.search_icon}`} size={18} />
        </button>
         ) : (
       <div className={`${styles.hamsearch}`} onClick={handleShowSearch}>
           <span className={`${styles.barSearch}`}></span>
           <span className={`${styles.barSearch}`}></span>
           <span className={`${styles.barSearch}`}></span>
        </div>
)}

          {/* logo */}
          <Link to='/'onClick={removeActive} className={`${styles.logo}`}>Exclusivefab</Link>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link to='/' className={`${styles.navLink}`}>Home</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/teen' className={`${styles.navLink}`}>Teen</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/blowjob' className={`${styles.navLink}`}>Blowjob</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/lesbian' className={`${styles.navLink}`}>Lesbian</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/celebrities' className={`${styles.navLink}`}>Celebrities</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/masturbation' className={`${styles.navLink}`}>Masturbation</Link>
            </li>
          </ul>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
      <div className={`${showSearch ? styles.active_search : styles.inactive_search}`}>
        <SearchBar />
      </div>
      <Outlet />
    </div>
  );
}
export default Navbar;