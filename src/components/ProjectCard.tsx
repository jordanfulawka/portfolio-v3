import { Cat, SquareArrowUpRightExit } from 'lucide-react';
import type { Project } from '../lib/types';

function ProjectTag({ name }: { name: string }) {
  return (
    <p className='bg-sky-soft font-fancy text-sky-ink text-xs py-1 px-2 rounded-lg'>
      {name}
    </p>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className='bg-surface-raised p-5 flex flex-col gap-3 border border-line rounded-xl shadow-sm hover:-translate-y-0.5'>
      <p className='font-fancy uppercase tracking-wider text-xs text-ink-muted'>
        {project.header}
      </p>
      <h1 className='font-heading text-lg font-semibold'>{project.name}</h1>
      <p className='text-ink-muted'>{project.description}</p>
      <div className='flex flex-wrap gap-3'>
        {project.tags.map((tag) => (
          <ProjectTag name={tag} />
        ))}
      </div>
      <div className='h-0 border-b border-line' />
      <div className='flex gap-5'>
        <span className='flex items-center gap-1 text-sky-deep'>
          <Cat size={20} />
          <p className='font-medium'>Code</p>
        </span>
        {project.liveLink && (
          <span className='flex items-center gap-1 text-sky-deep'>
            <SquareArrowUpRightExit size={20} />
            <p className='font-medium'>Live demo</p>
          </span>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
