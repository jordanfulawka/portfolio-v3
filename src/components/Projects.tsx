import { projects } from '../lib/projects';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <div className='p-5'>
      <div className='flex items-center justify-between mb-3'>
        <h2 className='font-heading font-bold text-2xl'>What I've built</h2>
        <a
          href='https://github.com/jordanfulawka'
          className='text-sky-deep font-medium text-sm underline'
        >
          All projects on Github
        </a>
      </div>
      <div className='flex flex-col gap-3'>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
