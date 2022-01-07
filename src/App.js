import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <section>
        <Card />
      </section>
    </div>
  );
}

export default App;
