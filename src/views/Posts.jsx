import Link from 'next/link';
import PageHeader from '../components/PageHeader';

export default function Posts() {
  return (
    <>
      <PageHeader title={"Posts"}/>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}