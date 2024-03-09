"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const [creadoUsuario, setCreandoUsuario] = useState(false);
  const [usuarioCreado, setUsuarioCreado] = useState(false);
  
  async function handleFormSubmit(e) {
    e.preventDefault();
    setError(false)
    setUsuarioCreado(false);
    setCreandoUsuario(true);

      const resp = await fetch("/api/registro", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      
      if(resp.ok){
        setUsuarioCreado(true);
      }else{
        setError(true)
      }
   
    setCreandoUsuario(false);
  }

  return (
    <section className=" pt-10">
      <h1 className="text-center text-4xl text-primary">Pagina de registro</h1>
      {usuarioCreado && (
        <div className="my-6 text-center">
          Usuario creado, ya puedes ingresar a{" "}
          <Link href={"/login"} className="underline">
            {" "}
            Login{" "}
          </Link>
        </div>
      )}
      {error && (
        <div className="my-6 text-center bg-primary text-white">
          Error
        </div>
      )}
      <form className="mx-auto block max-w-md" onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={creadoUsuario}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          disabled={creadoUsuario}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrate</button>
        <p className="text-center text-gray-300 my-2">
          loggeate con un proveedor
        </p>
        <button onClick={() => signIn('google', {callbackUrl:'/'})} className="flex justify-center gap-2">
          <Image src={"/google.png"} alt="" width={24} height={24} />
          Entrar con google
        </button>
      </form>
      <div className="text-center my-5">
        Ya tengo una cuenta, ir a <Link href={'/login'}>Login </Link>
      </div>
    </section>
  );
}
