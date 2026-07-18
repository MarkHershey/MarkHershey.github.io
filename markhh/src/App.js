import Navbar from './sections/Navbar'
import Footer from './sections/Footer'
import HomePage from './pages/HomePage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
