import { useState } from 'react';
import Link from 'next/link';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h1 className="title">
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
    </div>
  );
}