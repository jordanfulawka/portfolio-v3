function Tag({ name }: { name: string }) {
  return (
    <p className='bg-sky-soft font-fancy text-sky-ink text-xs py-1 px-2 rounded-lg'>
      {name}
    </p>
  );
}

export default Tag;
