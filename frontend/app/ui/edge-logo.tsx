import Image from 'next/image';
import Link from 'next/link';

export default function EdgeLogo () {
  return (
    <div className="flex">
      <Link href="/"><Image src="assets/logo-edge.svg" alt="SVG" width="50" height="50" /></Link>
      <Link href="/">EdGE</Link>
    </div>
  )
}
