import { NavbarItem } from "./NavbarItem";

import "./Navbar.css";
export function Navbar(){

    const navItems = ["Home", "About", "Contact"]
    return(
      <div>
        <div className="navbar">
          <div className="navbar-logo"><h2>React.js</h2></div>
          <div className="navbar-menu">
            <ul className="navbar-menu-list">
              {
                navItems.map((navItem) => <NavbarItem title={navItem}/>)
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }