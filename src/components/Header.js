import React from "react";
import Avatar from './Avatar'

const Header = () => {
    return(
        <section style={styles.container}>
            <h1 style={styles.logoName}>Your Wallet</h1>
            <Avatar />
        </section>

    )
}

export default Header;

const styles={
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#77aca2',
        justifyContent: 'space-between',
        width: '100%',
    },

    logoName: {
        margin: '25px',
        color: '#031926'
    }
}