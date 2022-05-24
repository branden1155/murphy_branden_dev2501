import React from "react";

function FormDash() {
    return(
        <section style={styles.container}>
            <h1>ChartDash</h1>
            <p>Some Stuff Here</p>
            <p>Some Stuff Here</p>
        </section>
    )
}

export default FormDash;

const styles={
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
    }
}