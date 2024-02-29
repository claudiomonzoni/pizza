import { User } from "../../models/User";
import mongoose from "mongoose";

export async function POST(req) {
    // tomamos los datos del body que mandan el usuario
    const body = await req.json();
    mongoose.connect(process.env.MONGO_URL)
    // mongoose.connect(process.env.MONGO_URL)

    // registramos el usuario USER prev definido en el squema
    const userCreado = await User.create(body)
    return Response.json(userCreado)

}