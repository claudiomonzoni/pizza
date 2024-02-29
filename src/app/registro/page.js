"use client";

import Image from "next/image";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function handleFormSubmit(e) {
    console.log('first')
    e.preventDefault();
    fetch("/api/registro", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <section className=" pt-10">
      <h1 className="text-center text-4xl text-primary">Pagina de registro</h1>
      <form className="mx-auto block max-w-md" onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrate</button>
        <p className="text-center text-gray-300 my-2">
          loggeate con un proveedor
        </p>
        <button className="flex justify-center gap-2">
          <Image src={"/google.png"} alt="" width={24} height={24} />
          Entrar con google
        </button>
      </form>
    </section>
  );
}
