import React from "react";

//function/component for the spending page
function Spending(){
    return(
        <section style={styles.container}>
            <h1>Spending</h1>
            <p>Some Stuff Here</p>
            <p>Some Stuff Here</p>
        </section>
    )
}

export default Spending;
//styles for the spending page
const styles={
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
    }
}