import Hero from '../components/Hero';
import Nav from '../components/Nav';

function Main() {
  return (
    <div className='h-screen bg-surface border border-red'>
      <Nav />
      <Hero />
    </div>
  );
}

export default Main;
