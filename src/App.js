import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Reports from './pages/Reports';
import Income from './pages/Income';
import Saving from './pages/Saving';
import Spending from './pages/Spending'
import Nav from './components/Nav';
import Settings from './pages/Settings'

function App() {
  return(
    <div>
      <main style={styles.container}>
        <Nav style={styles.nav} />
        <section style={styles.items}>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Reports" element={<Reports />} />
            <Route path="Income" element={<Income />} />
            <Route path="Saving" element={<Saving />} />
            <Route path="Spending" element={<Spending />} />
            <Route path="Settings" element={<Settings />} />
          </Routes>
        </section>
      </main>
    </div>
  )
}

export default App;
  
const styles={
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#9dbebb',
    width: '100%',
  },

  items: {
    width: '100%',
    
  },

  nav: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '150px',
  },

  
  
}

