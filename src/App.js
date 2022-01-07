import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './data';

function App() {
  const cardElements = data.map((card) => {
    return (
      <Card
        img={card.coverImg}
        key={card.id}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
      />
    );
  });

  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <section>{cardElements}</section>
    </div>
  );
}

export default App;
