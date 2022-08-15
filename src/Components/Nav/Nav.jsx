import React from "react";
import s from "../Nav/Nav.module.css";
import NavItem from "./NavItem/NavItem";



const Nav = (props) => {
 
  

  let NavElements = props.state.NavData.map(nav => <NavItem name={nav.name}
    route={nav.route}
    id={nav.id}
   />);

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        {NavElements}
      </div>

    </nav>
  )

}
export default Nav;

