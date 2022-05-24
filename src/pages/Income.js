import React from "react";

function Income(){
    return(
        <section style={styles.container}>
            <h1>Income</h1>
            <p>Some Stuff Here</p>
            <p>Some Stuff Here</p>
        </section>
    )
}

export default Income;

const styles={
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
    }
}