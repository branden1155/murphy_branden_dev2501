import React from "react";
// import PostImg from '../images/postImages/ReactLogo.jpg';
import Avatar from "./Avatar";
import ImageUrl from '../images/avatarImages/MaleAvatar2.png';
import {GoPlus, GoX} from 'react-icons/go';

const FormCard = (props) => {
    return(
        <article key={props.id} style={styles.previouscont}>
            <div style={styles.previousAvatar}>
                <Avatar avatarImg={ImageUrl} />
                <p style={styles.previousavatarInfo}>Branden</p>
            <div style={styles.editandDelete}>
                <span style={styles.editIcons}><GoPlus /></span>
                <span style={styles.editIcons} onClick={props.delMe}><GoX /></span>
            </div>
            </div>
            <div style={styles.previousPost}>
                <h1>{props.val.pTitle}</h1>
                <p>{props.val.pDesc}</p>
                <img src={props.val.pImg} alt={props.val.pAlt} height="300" widht="400" />
            </div>
        </article>
    )
}

export default FormCard

const styles = {

    previouscont: {
        display: 'flex',
        flexDirection: 'column',
        width: '900px',
        height: '500px',
        margin: '0% auto',
        marginTop: '35px',
        backgroundColor: '#cbf3f0',
        borderRadius: '8px 8px 8px',
        overflow: 'none',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    },

    previousAvatar: {
        display: 'flex',
        flexDirection: 'row',
        margin: '10px'
    },

    previousavatarInfo: {
        marginLeft: '15px',
    },

    editandDelete: {
        display: 'flex',
        marginLeft: '75%'
    },

    editIcons: {
        borderStyle: 'none',
        border: 'none',
        padding: '10px',
        cursor: 'pointer',
    },

    previousPost: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '25px',
        marginRight: '25px',
        marginBottom: '25px',
        borderRadius: '5px 5px 5px',
        overflow: 'hidden',
    },

}