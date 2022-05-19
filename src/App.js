import React, {Component} from 'react';
import Header from './components/MyHeader';
import Nav from './components/Nav';
import TheForm from './components/TheForm';
import Ads from './components/Ads';
import WorkingMan from './images/adsImages/WorkingMan.jpg';
import Flowers from './images/adsImages/FlowersImage.jpg';
import PostImg from './images/postImages/ReactLogo.jpg';
import CodingGuy from './images/postImages/codingGuy.jpg';
import FormCard from './components/FormCard';

class App extends Component {
  //State Objects for form card components
  state = {
    blogPost: [{
      pTitle: 'React',
      pDesc: 'Today I started Learning about React, and all of its fundamentals!',
      pImg: PostImg,
      pAlt: 'React Logo'
    },
    {
      pTitle: 'My Day',
      pDesc: 'Today I had a great day!',
      pImg: CodingGuy,
      pAlt: 'Man Coding'
  }],
    color: 'red',
  }

  //componentdidMount section, changing the chatbook to blue.
  componentDidMount() {
    console.log('ComponentDidMount() Lifecycle')
    setTimeout(() => {
      this.setState({ color: 'blue'});
    }, 5000);
  }

//getting the input from inside the Title and post Input field.
  getInput = e => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
    });
  }
  //adding Blog Card to Webpage
  addItem = e => {
    e.preventDefault()
      this.setState({
        blogPost: [...this.state.blogPost,{pTitle: this.state.pTitle, pDesc: this.state.pDesc}]
      });
      e.target.reset();
  }

  //THIS MY ATTEMPT AT FILTER METHOD. COULD NOT GET TO WORK. KEEPS DELETING ALL POST.
  removeItem = key => {
    // const newPost = this.state.blogPost.filter(postId => postId.id !== postId.key) 
    // arrayObject.filter(callback, contextObject);
    const newPost = this.state.blogPost.filter((element,post) => post !== key) 
    this.setState({
      blogPost: newPost
    })

    console.log(newPost)
    console.log(key)
  }
      
  //removing blog post via splice method, this effects and modifys the state, which is a no go. -----------------
  // removeItem = key => {
  //   const newPost = [...this.state.blogPost];
  //   newPost.splice(key, 1);
  //   this.setState(() => ({
  //     blogPost: newPost
  //   }));
  // }

  //rendering webpage.
  render(){
    let blogList = this.state.blogPost.map((element, i) => {
      return (
        <FormCard
          key={i}
          val={element}
          delMe={() =>this.removeItem(i)}
        /> 
      )
    })
    console.log('Rendered Lifecycle')
    return (
      <div>
        <Header style={[styles.customHeader, {color: this.state.color}]} pgTitle='Chatbook' placeholder="Search..." />
        <main style={styles.container}>
          <Nav style={styles.nav} />
          <section style={styles.main}>
            <TheForm 
              getInput={this.getInput}
              addItem={this.addItem}/>
            {blogList}
          </section>
          <aside style={styles.ads}>
            <p style={{color: this.state.color}}>Advertisers</p>
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

//styling for webpage.
const styles={
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#ff9f1c'
  },

  nav: {
    display: 'flex',
  },

  p: {
    position: 'absoulute',
    fontSize: '5px',
    top: '50px'
  },

  customHeader: {
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',

  },

  main: {
    backgroundColor: '#2ec4b6',
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
    padding: '25px',
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
