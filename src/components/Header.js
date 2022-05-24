import React from "react";
import Avatar from './Avatar'

//component for the header
const Header = () => {
    return(
        <section style={styles.container}>
            <h1 style={styles.logoName}>Your Wallet</h1>
            <Avatar />
        </section>

    )
}

export default Header;
//styles for the header
const styles={
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#77aca2',
        justifyContent: 'space-between',
        width: '100%',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    },

    logoName: {
        margin: '25px',
        color: '#031926',
        textShadow: '.5px .5px .5px black',
    }
}