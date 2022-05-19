import React from "react";
import Avatar from "./Avatar";
import ImageUrl from '../images/avatarImages/MaleAvatar2.png';

const TheForm = (props) => {
    return(
        <form
            style={styles.formCont}
            onSubmit={props.addItem}>
            <div style={styles.postCont}>
                <input
                    style={styles.inputTitle}
                    value={props.pTitle}
                    placeholder="Your Post Title..."
                    name="pTitle"
                    onChange={props.getInput} />
                <input
                    name="pDesc"
                    value={props.pDesc}
                    onChange={props.getInput}
                    style={styles.inputDescription}
                    placeholder="Your Post Here..." />
                <div style={styles.belowForm}>
                    <Avatar avatarImg={ImageUrl} />
                    <p style={styles.belowformP}>What would you like to post, Branden?</p>
                    <button style={styles.postButton}>Post</button> 
                </div>
            </div>
        </form>
    )
}


export default TheForm

const styles = {

    formCont: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0% auto',
    },
    
    postCont: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#cbf3f0',
        color: 'black',
        width: '900px',
        height: '200px',
        margin: '0% auto',
        marginTop: '20px',
        borderRadius: '8px 8px 8px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    },

    inputTitle: {
        display: 'flex',
        height: '35px',
        width: '35%',
        fontWeight: 'bold',
        color: 'black',
        margin: '10px',
        backgroundColor: 'white',
        borderStyle: 'none',
        borderRadius: '5px 5px 5px',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'

    },

    inputDescription: {
        display: 'flex',
        textAlign: 'center',
        height: '150px',
        width: '95%',
        fontWeight: 'bold',
        color: 'black',
        marginLeft: '10px',
        marginTop: '-5px',
        backgroundColor: 'white',
        borderStyle: 'none',
        borderRadius: '5px 5px 5px',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
    },
    
    belowForm: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: '25px',
    },

    belowformP: {
        marginLeft: '5px',
        marginTop: '15px'

    },

    postButton: {
        width: '100px',
        height: '35px',
        fontWeight: 'bold',
        marginLeft: '35%',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#ff9f1c',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        borderRadius: '5px 5px 5px'
    },
}