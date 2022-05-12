import React from "react";

const Avatar = (props) => {
    return(
        <img src={props.avatarImg} alt={props.ImageAlt} style={styles.Avatar} />   
    )
}

export default Avatar

const styles={
    
    Avatar: {
        height: '55px',
        cursor: 'pointer',
        border: '2px solid black',
        borderRadius: '50%',
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    }
}