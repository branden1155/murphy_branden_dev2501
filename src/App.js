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

//app function to run webpage
function App() {
  return(
    <div style={styles.container}>
      <Nav />
      <section style={styles.items}>
        <Header />
        <main style={styles.routes}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Reports" element={<Reports />} />
            <Route path="Income" element={<Income />} />
            <Route path="Saving" element={<Saving />} />
            <Route path="Spending" element={<Spending />} />
            <Route path="Settings" element={<Settings />} />
          </Routes>
        </main>
      </section>
    </div>
  )
}

export default App;

//styling for sections above
const styles={
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#9dbebb',
    width: '100%',
    height: '100vh',
    overflow: 'hidden'
  },
  items: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  routes: {
    overflow: 'scroll',
  }
}

