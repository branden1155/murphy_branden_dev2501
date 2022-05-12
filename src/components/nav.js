import React from "react";

const Nav = (props) => {
    return(
        <div style={styles.navContainer}>
            <button style={styles.navBtn}>Newsfeed</button>
            <button style={styles.navBtn}>Messages</button>
            <button style={styles.navBtn}>Watch</button>
        </div>
    )
}

export default Nav

const styles={
    navContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        marginBottom: '30%',
    },

    navBtn:{
        margin: '5px',
        padding: '5%',
        width: '150px',
        backgroundColor: '#2ec4b6',
        color: 'white',
        borderStyle: 'none',
        textAlign: 'center',
        cursor: 'pointer',
        fontWeight: 'bold', 
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    },
}