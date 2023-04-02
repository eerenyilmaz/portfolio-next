import Link from 'next/link';

export default function Posts() {
  return (
    <>
      <h1 className='text-3xl text-red-600'>Posts</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}