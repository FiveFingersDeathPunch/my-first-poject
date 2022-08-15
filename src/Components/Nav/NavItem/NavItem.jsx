import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Nav.module.css";



const NavItem = (props) => {

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to={"/" + props.route + "/"} key={props.route + "_key"} className={navData => navData.isActive ? s.active : s.item}>{props.name}</NavLink>
      </div>
    </nav>

  )
}
export default NavItem;