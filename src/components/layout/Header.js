"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
export default function Header() {
  const sessions = useSession();
  const status = sessions.status;
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-bold text-2xl" href="/">

        Golondrinas Pizzas
      </Link>
      <nav className="flex items-center gap-8 text-gray-500">
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-8 text-gray-500">
        {status == "authenticated" && (
          <Link
            onClick={() => signOut()}
            className="px-5 py-2 rounded-full text-white bg-primary"
            href={"/registro"}>
            Logout{" "}
          </Link>
        )}
        {status == "unauthenticated" && (
          <>
            <Link href={"/login"}>login </Link>
            <Link
              className="px-5 py-2 rounded-full text-white bg-primary"
              href={"/registro"}>
              Registrate
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
