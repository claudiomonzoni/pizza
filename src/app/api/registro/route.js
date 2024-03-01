import { User } from "../../models/User";
import mongoose from "mongoose";

export async function POST(req) {
  // tomamos los datos del body que mandan el usuario
  const body = await req.json();
  // mongoose.connect(process.env.MONGO_URL)
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));
  // registramos el usuario USER prev definido en el squema
  const userCreado = await User.create(body);
  // esto solo es para checar en el la pestaña de network del navegador
  return Response.json(userCreado);
}
