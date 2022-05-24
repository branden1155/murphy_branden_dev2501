import React from "react";

//function/component for the Settings Page
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
//styles for the settings page
const styles={
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
    }
}