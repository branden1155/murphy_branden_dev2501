import React from "react";

const Ads = (props) => {
    return (
        <article style={styles.adsContainer}>
            <img style={styles.imageStyle} src={props.img} alt="{props.imageAlt}"/>
            <h1>{props.adsTitle}</h1>
            <p>{props.adsContent}</p>
            <div style={styles.adButtons}>
                <span type="submit" style={styles.selectButtons}>Share!</span>
                <span type="submit" style={styles.selectButtons}>Learn More!</span>
            </div>
        </article>
    )
}

export default Ads

const styles={
    adsContainer:{
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        height: '325px',
        padding: '20px',
        backgroundColor: '#ff9f1c',
        color: 'white',
        justifyContent: 'space-between',
        textAlign: 'center',
        margin: '10%',
        marginRight: '25px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius: '3px 3px 3px',
    },

    imageStyle:{
        height: '150px',
        width: '250px'
    },

    selectButtons:{
        margin: '5px',
        padding: '2%',
        width: '75px',
        backgroundColor: '#2ec4b6',
        color: 'white',
        borderStyle: 'none',
        textAlign: 'center',
        cursor: 'pointer',
        fontWeight: 'bold',
        borderRadius: '3px 3px 3px', 
    }
}