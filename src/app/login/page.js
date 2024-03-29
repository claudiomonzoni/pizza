"use client";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const [loginEnProgreso, setloginEnProgreso] = useState(false);
  const [usuarioCreado, setUsuarioCreado] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setloginEnProgreso(true);

    await signIn("credentials", { email, password, callbackUrl: "/" });

    setloginEnProgreso(false);
  }

  return (
    <section className=" pt-10">
      <h1 className="text-center text-4xl text-primary">Login</h1>

      <form className="mx-auto block max-w-md" onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          disabled={loginEnProgreso}
          onChange={e => setEmail(e.target.value)}
          />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          disabled={loginEnProgreso}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p className="text-center text-gray-300 my-2">
          loggeate con un proveedor
        </p>
        <button onClick={() => signIn('google', {callbackUrl:'/'})} className="flex justify-center gap-2">
          <Image src={"/google.png"} alt="" width={24} height={24} />
          Entrar con google
        </button>
      </form>
    </section>
  );
}
