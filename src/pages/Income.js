import React from "react";

//function/component for the Income Page
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
//styles for Income page
const styles={
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
    }
}