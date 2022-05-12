import React, {Component} from 'react';
import Header from './components/header';
import Nav from './components/nav';
import TheForm from './components/theform';
import Ads from './components/ads';
import WorkingMan from './images/Working Man.jpg';
import Flowers from './images/Flowers Image.jpg';

class App extends Component {
  render(){

    return (
      <div>
        <Header style={styles.headerCustom} pgTitle='Chatbook' placeholder="Search..." />
        <div style={styles.container}>
            <Nav style={styles.nav} />
          <div style={styles.main}>
            <TheForm />
          </div>
          <aside style={styles.ads}>
            Advertisers
            <Ads 
            img={WorkingMan}
            adsTitle="Need Work?"
            adsContent="Have you been looking for work? Look no more!"/>
            <Ads 
            img={Flowers}
            adsTitle="Need Flowers?"
            adsContent="Need to give that special someone a wonderful gift? Look no more!"/>
          </aside>
        </div>
      </div>
    );
  }
}
export default App;


const styles={
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    backgroundColor: '#ff9f1c'
  },

  headerCustom: {
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  },

  nav: {
    display: 'flex',
  },

  main: {
    backgroundColor: '#2ec4b6',
    display: 'flex',
    flex: 2,
  },

  ads: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    color: 'lightgray',
    backgroundColor: '#2ec4b6'
  },




}
