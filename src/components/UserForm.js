import React from "react";

//this is the user form used to display information regarding the user
const userForm = (props) => {
    return(
        <section style={styles.container}>
            <div style={styles.Header}>
                <img style={styles.avatar} src={props.userPicture} alt="the user"></img>
                <p style={styles.rowContainer}>
                    <span style={styles.labels}>Username:</span>
                    <input style={styles.myInput} value={props.userName} placeholder="Username"></input>
                </p>
                <p style={styles.rowContainer}>
                    <span style={styles.labels}>Password:</span>
                    <input style={styles.myInput} value={props.passWord} placeholder="Password"></input>
                </p>
            </div>
            <form>
                <div style={styles.seperateContainer}>
                    <p style={styles.rowContainer}>
                        <span style={styles.labels}>First Name:</span>
                        <input type="text" style={styles.myInput} value={props.firstName} placeholder="First Name"></input>
                    </p>
                    <p style={styles.rowContainer}>
                        <span style={styles.labels}>Last Name:</span>
                        <input type="text" style={styles.myInput} value={props.lastName} placeholder="Second Name"></input>
                    </p>
                </div>
                <div style={styles.seperateContainer}>
                    <p style={styles.rowContainer}>
                        <span style={styles.labels}>City Name:</span>
                        <input type="text" style={styles.myInput} value={props.cityName} placeholder="City Name"></input>
                    </p>
                    <p style={styles.rowContainer}>
                        <span style={styles.labels}>State Name:</span>
                        <input type="text" style={styles.myInput} value={props.stateName} placeholder="State Name"></input>
                    </p>
                    <p style={styles.rowContainer}>
                        <span style={styles.labels}>Post Code:</span>
                        <input type="text" style={styles.myInput} value={props.postCode} placeholder="Post Code"></input>
                    </p>
                    <p style={styles.rowContainer}>
                        <span style={styles.labels}>Phone Number:</span>
                        <input type="text" style={styles.myInput} value={props.phoneNumber} placeholder="Phone Number"></input>
                    </p>
                </div>
            </form>
            <div style={styles.buttonContainer}>
                <button type="submit" style={styles.btn}>Submit</button>
                <button type="submit" style={styles.btn}>Edit</button>
            </div>
        </section>
    )
}
export default userForm;
//styles for the UserForm needed in the settings page
const styles={
    container:{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        width: '600px',
        height: '600px',
        margin: '0 auto',
        borderRadius: '15px 15px 15px',
        
    },
    Header:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '0 auto',
        marginLeft: '20px',
        marginRight: '20px',
        borderBottomStyle: 'solid',
        borderColor: '#77aca2',
    },
    avatar:{
        border: '3px solid #77aca2',
        borderRadius: '50%',
        width: '75px',
        height: '75px',
        marginTop: '25px',
        marginLeft: '25px',
        marginRight: '25px',
        
    },
    labels:{
        display: 'block',
        fontWeight: 'bold',
        fontSize: '.90rem',
        letterSpacing: '1.5px',
        color: '#031926',
    },
    btn:{
        margin: '25px',
        width: '75px',
        height: '25px',
        border: '1px black',
        borderRadius: '5%',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        backgroundColor: '#77aca2',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    buttonContainer:{
        display: 'flex',
        flexDirection: 'row',
        margin: '0 auto',

    },
    rowContainer:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '35px',
        marginRight: '25px',
        textAlign: 'center',

    },
    seperateContainer:{
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        marginLeft: '100px',
        flexWrap: 'wrap',
    },
    myInput:{
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        border: 'none',
        borderRadius: '4px',
        margin: '10px',
        padding: '10px',
        width: '150px',
        textAlign: 'center',
        backgroundColor: 'light-grey',
    },  
}