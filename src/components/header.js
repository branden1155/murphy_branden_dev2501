import React from "react";
import {GoSearch} from 'react-icons/go'
import {GoGear} from 'react-icons/go';
import Avatar from './avatar';
import ImageUrl from '../images/avatar images/Male Avatar2 (1).png';


const MyHeader = (props) => {
    return(
        <header style={styles.myHeader}>
            <div style={styles.leftSide}>
                <h1>ChatBook</h1>
            </div>
            <div style={styles.searchArea}>
                <span style={styles.inputIcon}><GoSearch /></span>
                <input type='text' style={styles.inputwithIcons} placeholder="Search..."/>
            </div>
            <div style={styles.rightSide}>
                <Avatar avatarImg={ImageUrl} />
                <p style={styles.profileName}>Hello,<br></br> Branden</p>
                <buttons style={styles.rightIcons}><GoGear /></buttons>
            </div>
        </header>
    )
}

const styles={
    myHeader:{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        color: 'black',
        padding: '1%',
        alignItems: 'center',
    },
    
    leftSide:{
        display: 'flex',
        flexDirection: 'row',
    },

    searchArea:{
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '2px',
        width: '40%'
    },

    inputIcon:{
        background: 'white',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.15rem',
    },

    inputwithIcons:{
        borderStyle: 'none',
        border: 'none',
        padding: '10px',
        flex: 1
    },

    rightSide: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '3%',
        color: 'black'
    },

    rightIcons: {
        display: 'flex',
        flexDirection: 'row',
        padding: '10px',
        marginLeft: '10px',
        cursor: 'pointer',
    },

    profileName: {
        marginLeft: '8px'
    }

}


export default MyHeader