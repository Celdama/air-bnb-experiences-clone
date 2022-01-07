import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './data';

function App() {
  const cards = data.map((card) => {
    const { id, coverImg, location, title, price, openSpots } = card;
    const { rating, reviewCount } = card.stats;
    return (
      <Card
        key={id}
        img={coverImg}
        rating={rating}
        reviewCount={reviewCount}
        location={location}
        title={title}
        price={price}
        openSpots={openSpots}
      />
    );
  });

  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <section className='cards-list'>{cards}</section>
    </div>
  );
}

export default App;
