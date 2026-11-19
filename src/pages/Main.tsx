import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Projects from '../components/Projects';

function Main() {
  return (
    <div className='h-screen bg-surface'>
      <Nav />
      <Hero />
      <Projects />
    </div>
  );
}

export default Main;
