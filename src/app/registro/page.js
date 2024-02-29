"use client";

import Image from "next/image";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  function handleFormSubmit(e) {
    e.preventDefault();
    fetch("/api/registro", {
      method: "POST",
      body: JSON.stringify({ email, pass }),
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
          name="pass"
          id="pass"
          placeholder="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
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
