import React from "react";

//function/component for the Reports page
function Reports() {
    return(
        <section style={styles.container}>
            <h1>Reports</h1>
            <p>Some Stuff Here</p>
            <p>Some Stuff Here</p>
        </section>
    )
}

export default Reports;
//styles for the reports page
const styles={
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
    }
}