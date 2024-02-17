import Link from "next/link";
export default function Header() {
  return (
    <header className="flex items-center justify-between">
    <Link className="text-primary font-bold text-2xl" href=""> Golondrinas Pizzas</Link>
    <nav className="flex items-center gap-8 text-gray-500">
      <Link href={''}>Menu</Link>
      <Link href={''}>About</Link>
      <Link href={''}>Contact</Link>
      <Link className="px-5 py-2 rounded-full text-white bg-primary" href={''}>Login</Link>
    </nav>
   </header>
  )
}
