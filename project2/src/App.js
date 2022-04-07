import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data'

function App() {
  const event = data.map(event => {return (
    <Card 
      key={event.id}
      event={event}
    />
)})
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='card--lists'>
        {event}
      </section>
    </div>
  );
}

export default App;
