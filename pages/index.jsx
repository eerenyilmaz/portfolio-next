import { useState } from 'react';
import Link from 'next/link';
import HomePage from '../src/views/HomePage';
import Header from '../src/components/Header';
import Intro from '../src/components/Intro';

export default function Home() {
  return (
    <>
      <Intro />
      <HomePage />
    </>
  )
}