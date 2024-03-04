// logica para autentificar con nextauth si existe el usuario en mongo atlas
import NextAuth from "next-auth/next";
// proveedor de email desde la bd
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "email",
          type: "email",
          placeholder: "nombre@correo.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log({ credentials });
        return null;
      },
    }),
  ],
});

export { handler as Get, handler as Post };
