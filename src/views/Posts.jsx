import Link from 'next/link';

export default function Posts() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}