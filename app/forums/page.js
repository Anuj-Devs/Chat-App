'use client';

import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

const topics = [
  {
    text: 'Python',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    desc: 'Python is a versatile language for web, AI, and automation.',
    slug: 'python'
  },
  {
    text: 'JavaScript',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    desc: 'JavaScript powers the web with dynamic content and interactivity.',
    slug: 'javascript'
  },
  {
    text: 'C++',
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
    desc: 'C++ is a powerful language for system programming and game dev.',
    slug: 'cpp'
  },
  {
    text: 'GoLang',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg',
    desc: 'GoLang is efficient for cloud and backend applications.',
    slug: 'golang'
  },
  {
    text: 'Rust',
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg',
    desc: 'Rust ensures safety and performance for system-level coding.',
    slug: 'rust'
  }
];

export default function Forums() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-8">
      {topics.map((topic, index) => (
        <div key={index} className="bg-white shadow-lg rounded-2xl p-6 w-64 text-center">
          <Image src={topic.img} alt={topic.text} width={80} height={80} className="mx-auto" />
          <h3 className="text-lg font-bold mt-4">{topic.text}</h3>
          <p className="text-gray-600 text-sm mt-2">{topic.desc}</p>
          <Link href={`/forum/${topic.slug}`}>
            <Button className="mt-4">Join Now</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
