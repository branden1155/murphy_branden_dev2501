import React, {Component} from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import TheForm from './components/TheForm';
import Ads from './components/Ads';
import WorkingMan from './images/adsImages/WorkingMan.jpg';
import Flowers from './images/adsImages/FlowersImage.jpg';

class App extends Component {
  render(){

    return (
      <div>
        <Header style={styles.headerCustom} pgTitle='Chatbook' placeholder="Search..." />
        <main style={styles.container}>
          <Nav style={styles.nav} />
          <section style={styles.main}>
            <TheForm />
            This is where the list component should go.
          </section>
          <aside style={styles.ads}>
            Advertisers
            <Ads 
            img={WorkingMan}
            adsTitle="Need Work?"
            adsContent="Have you been looking for work? Look no more!" />
            <Ads 
            img={Flowers}
            adsTitle="Need Flowers?"
            adsContent="Need to give that special someone a wonderful gift? Look no more!" />
          </aside>
        </main>
      </div>
    );
  }
}
export default App;


const styles={
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
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
