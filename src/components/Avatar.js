import React from "react";
import AvatarImg from '../images/Avatar.png'
import {FiSettings} from "react-icons/fi"
import { Link } from "react-router-dom";

//Component - profile avatar for the header with working link on profile image
const Avatar = () => {
    return(
        <div style={styles.container}>
            <Link to="/Settings" style={styles.imgSettings}><FiSettings /></Link>
            <Link to="/Settings">
                <img style={styles.img} src={AvatarImg} alt="Avatar Icon"></img>
            </Link>
            <p style={styles.avatarName}>Branden Murphy</p>
        </div>
    )
}

export default Avatar;
//styling for avatar
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        // margin: '15px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%'
    },
    img: {
        display: 'flex',
        flexDirection: 'row',
        width: '25px',
        height: '25px',
        marginRight: '15px',
        borderRadius: '50%',
        color: 'white'
    },
    imgSettings: {
        marginRight: '20px',
        textDecoration: 'none',
        color: 'inherit',
    },
    avatarName: {
        color: '#031926',
        fontWeight: 'bold',
    }
}

