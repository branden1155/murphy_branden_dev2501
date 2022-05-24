import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import ChartDash from './pages/ChartDash';
import FormDash from './pages/FormDash';

function App() {
  return(
    <div>
      <Header />
      <main style={styles.container}>
        <nav style={styles.nav} />
        <section>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="chartDash" element={<ChartDash />} />
          </Routes>
        </section>
      </main>
    </div>
  )
}

export default App;
  
const styles={
  container: {

  },
}

