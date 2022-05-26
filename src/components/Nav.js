import React from "react";
import { Link } from "react-router-dom";
import {RiGridFill, RiBriefcaseLine} from "react-icons/ri"
import {MdAttachMoney } from "react-icons/md"
import {BsFillPiggyBankFill} from "react-icons/bs"
import {GiPayMoney} from "react-icons/gi"
import NavLogo from '../images/navLogo.png'

//component for the navigation links displayed on left side of screen
//these include React Routes
const Nav = () => {
    return(
        <nav style={styles.nav}>
            <img style={styles.img} src={NavLogo} alt="Webpage Logo"/>
            <Link to="/dashboard" style={styles.links}><RiGridFill /></Link>
            <Link to="/reports" style={styles.links}><RiBriefcaseLine /></Link>
            <Link to="/income" style={styles.links}><MdAttachMoney /></Link>
            <Link to="/saving" style={styles.links}><BsFillPiggyBankFill /></Link>
            <Link to="/spending" style={styles.links}><GiPayMoney /></Link>
        </nav>
    )
}

export default Nav;
//styles for the navigation
const styles={
    nav: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1.5rem',
        alignItems: 'center',
        backgroundColor: '#031926',
        padding: '2rem',
    },
    img: {
        height: '25px',
        width: '25px',
        marginBottom: '50px'
    },
    links: {
        padding: '10px',
        color: '#f4e9cd'
    }
}