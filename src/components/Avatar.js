import React from "react";
import AvatarImg from '../images/Avatar.png'
import {FiSettings} from "react-icons/fi"
import { Link } from "react-router-dom";


const Avatar = () => {
    return(
        <div style={styles.container}>
            <Link to="/Settings" style={styles.imgSettings}><FiSettings /></Link>
            <img style={styles.img} src={AvatarImg} alt="Avatar Icon"></img>
            <p style={styles.avatarName}>Branden Murphy</p>
        </div>
    )
}

export default Avatar;

const styles={
    container: {
        display: 'flex',
        flexDirection: 'row',
        margin: '15px',
        justifyContent: 'center',
        alignItems: 'center',

    },

    img: {
        display: 'flex',
        flexDirection: 'row',
        width: '25px',
        height: '25px',
        marginRight: '25px',
    },

    imgSettings: {
        marginRight: '20px',
    }
}

