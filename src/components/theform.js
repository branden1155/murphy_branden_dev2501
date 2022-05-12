import React from "react";
import Avatar from "./avatar";
import ImageUrl from '../images/avatar images/Male Avatar2 (1).png';
import PostImg from '../images/post images/React Logo.jpg';
import {GoPlus, GoX} from 'react-icons/go';

const TheForm = (props) => {
    return(
        <div style={styles.formCont}>
            <div style={styles.postCont}>
                <input style={styles.inputTitle} placeholder="Your Post Title..."></input>
                <input style={styles.inputDescription} placeholder="Your Post Here..."></input>
                <div style={styles.belowForm}>
                    <Avatar avatarImg={ImageUrl} />
                    <p style={styles.belowformP}>What would you like to post, Branden?</p>
                    <button style={styles.postButton}>Post</button> 
                </div>
            </div>
                <div style={styles.previouscont}>
                    <div style={styles.previousAvatar}>
                        <Avatar avatarImg={ImageUrl} />
                        <p style={styles.previousavatarInfo}>Branden</p>
                    <div style={styles.editandDelete}>
                        <span style={styles.editIcons}><GoPlus /></span>
                        <span style={styles.editIcons}><GoX /></span>
                    </div>
                    </div>
                    <div style={styles.previousPost}>
                        <p>React</p>
                        <p>Today I started Learning about React, and all of its fundamentals!</p>
                        <img src={PostImg} height="300" widht="400" alt="React Logo"></img>
                    </div>
            
                </div>
        </div>
    )
}


export default TheForm

const styles = {

    formCont: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0% auto',
    },

    postCont: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#cbf3f0',
        color: 'black',
        width: '900px',
        height: '200px',
        margin: '0% auto',
        marginTop: '20px',
        borderRadius: '8px 8px 8px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    },

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

    previousPost: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '25px',
        marginRight: '25px',
    },

    inputTitle: {
        display: 'flex',
        textAlign: 'center',
        height: '35px',
        width: '35%',
        fontWeight: 'bold',
        color: 'black',
        margin: '10px',
        backgroundColor: 'white',
        borderStyle: 'none',
        borderRadius: '5px 5px 5px',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'

    },

    inputDescription: {
        display: 'flex',
        textAlign: 'center',
        height: '35px',
        width: '95%',
        fontWeight: 'bold',
        color: 'black',
        marginLeft: '10px',
        marginTop: '-5px',
        backgroundColor: 'white',
        borderStyle: 'none',
        borderRadius: '5px 5px 5px',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
    },
    
    belowForm: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: '25px',
    },

    belowformP: {
        marginLeft: '5px',
        marginTop: '15px'

    },

    postButton: {
        width: '100px',
        height: '35px',
        fontWeight: 'bold',
        marginLeft: '35%',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#ff9f1c',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        borderRadius: '5px 5px 5px'
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
    }
}