// // logica para autentificar con nextauth si existe el usuario en mongo atlas
// import NextAuth from "next-auth/next";
// import {User} from "@/app/models/User";
// import bcrypt from "bcryptjs";
// // proveedor de email desde la bd
// import CredentialsProvider from "next-auth/providers/credentials";
// import mongoose from "mongoose";
// const handler = NextAuth({
//   secret: process.env.SECRET,
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       id: "credentials",
//       credentials: {
//         username: {
//           label: "email",
//           type: "email",
//           placeholder: "nombre@correo.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         const email = credentials?.email;
//         const password = credentials?.password;
//         mongoose.connect(process.env.MONGO_URL);
//         const user = await User.findOne({ email });
//         const passwordOk = user && bcrypt.compareSync(password, user.password);
//         console.log(passwordOk);
//         if(passwordOk){
//           return user
//         }

//         return null;
//       },
//     }),
//   ],
// });

// export { handler as Get, handler as Post };



import bcrypt from "bcryptjs";
import * as mongoose from "mongoose";
import {User} from "@/app/models/User";
import NextAuth, {getServerSession} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
  secret: process.env.SECRET,
  providers: [
 
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        mongoose.connect(process.env.MONGO_URL);
        const user = await User.findOne({email});
        const passwordOk = user && bcrypt.compareSync(password, user.password);

        if (passwordOk) {
          return user;
        }

        return null
      }
    })
  ],
};

// export async function isAdmin() {
//   const session = await getServerSession(authOptions);
//   const userEmail = session?.user?.email;
//   if (!userEmail) {
//     return false;
//   }
//   const userInfo = await UserInfo.findOne({email:userEmail});
//   if (!userInfo) {
//     return false;
//   }
//   return userInfo.admin;
// }

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }