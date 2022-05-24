import React from "react";

function ChartDash() {
    return(
        <section style={styles.container}>
            <h1>ChartDash</h1>
            <p>Some Stuff Here</p>
            <p>Some Stuff Here</p>
        </section>
    )
}

export default ChartDash;

const styles={
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
    }
}