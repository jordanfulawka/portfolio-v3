import { experience } from '../../lib/experience';
import ExperienceItem from './ExperienceItem';

function Experience() {
  return (
    <div className='p-5 max-w-300 mx-auto'>
      <h2 className='font-heading font-bold text-2xl'>Experience</h2>
      <div className='h-0 border-b border-line my-5' />
      <div className='flex flex-col gap-5'>
        {experience.map((experienceItem) => (
          <ExperienceItem item={experienceItem} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
