import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link href="/services">services</Link></li>
        <li><Link href="/contact">contact</Link></li>
      </ul>
    </div>
  );
}
