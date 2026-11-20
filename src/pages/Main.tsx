import Experience from '../sections/experience/Experience';
import Hero from '../sections/Hero';
import Nav from '../sections/Nav';
import Projects from '../sections/projects/Projects';

function Main() {
  return (
    <div className='h-full bg-surface'>
      <Nav />
      <Hero />
      <Projects />
      <Experience />
    </div>
  );
}

export default Main;
