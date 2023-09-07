import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ background: "url('https://wallpapers.com/images/hd/rick-and-morty-unamused-rick-agpuysmhk3lhdl4p.jpg')" ,backgroundSize: "cover"}}>
      <main className="flex flex-col items-center justify-between p-24 bg-opacity-80 ">
        <h1 className="text-4xl font-semibold text-white">Home Page</h1>
        <Link href="/posts" className="text-white-500 hover:text-red text-2xl ">All posts</Link>
      </main>
    </div>
  )
}
