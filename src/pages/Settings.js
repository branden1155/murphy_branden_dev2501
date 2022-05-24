import React from "react";

function Settings(){
    return(
        <section style={styles.container}>
            <h1>Settings</h1>
            <p>Some Stuff Here</p>
            <p>Some Stuff Here</p>
        </section>
    )
}

export default Settings;

const styles={
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
    }
}