import React from "react";

function Dashboard(){
    return(
        <section style={styles.container}>
            <p>Logo PlaceHolder</p>
            <h1>Dashboard</h1>
            <p>Place Your Charts Here</p>
        </section>
    )
}

export default Dashboard;

const styles={
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 2,
        height: '100vh',
    }
}