import React from "react";

//function/component for the Savings page
function Savings(){
    return(
        <section style={styles.container}>
            <h1>Savings</h1>
            <p>Some Stuff Here</p>
            <p>Some Stuff Here</p>
        </section>
    )
}

export default Savings;
//styles for the savings page
const styles={
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
    }
}