import React, {useState, useEffect} from "react";
import UserForm from "../components/UserForm";

//function/component for the Settings Page
function Settings(){

    //React Hooks for random user API
    const [userData, setuserData] = useState(null);

    //effect function/method that is fetching from the randomuser api
    //this also inclues the await.
    useEffect(() =>{
        async function fetchAPI(){
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const [user] = data.results;
            console.log(user)
            setuserData(user);
        }
        fetchAPI();   
    }, []);

    return(
        //the layout for the setting page
        <section style={styles.container}>
            <h1 style={styles.title}>Profile Settings</h1>
            {userData && <UserForm
                firstName={userData.name.first}
                lastName={userData.name.last}
                userName={userData.login.username}
                passWord={userData.login.password}
                cityName={userData.location.city}
                stateName={userData.location.state}
                postCode={userData.location.postcode}
                phoneNumber={userData.phone}
                userPicture={userData.picture.medium}
            />}
        </section>
    )
}

export default Settings;
//styles for the settings page
const styles={
    container:{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
    },
    title:{
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: '2px',
        margin:'45px',
    },


}