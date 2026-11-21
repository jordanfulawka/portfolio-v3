import type { Experience } from '../../lib/types';
import Tag from '../ui/Tag';

function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div>
      <div className='flex flex-col md:flex-row'>
        <div className='md:flex-1 md:pt-2'>
          <p className='font-fancy text-ink-muted uppercase text-xs tracking-wider mb-2'>
            {item.header}
          </p>
        </div>
        <div className='flex flex-col gap-1.5 md:flex-3'>
          <h3 className='font-fancy text-lg md:text-xl font-bold '>
            {item.title}
          </h3>
          {item.minor && (
            <p className='text-ink-muted text-sm'>{item?.minor}</p>
          )}
          <p className='text-ink-muted'>{item.description}</p>
          {item.tags !== undefined && (
            <div className='flex flex-wrap gap-3'>
              {item.tags?.map((tag) => (
                <Tag name={tag} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='h-0 border-b border-line mt-5' />
    </div>
  );
}

export default ExperienceItem;
