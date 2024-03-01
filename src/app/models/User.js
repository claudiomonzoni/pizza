import {model, models, Schema} from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {
    type: String,
    required: true,
    // validate:pass => {
    //   if(!pass?.length || pass.length < 5) {
    //     new Error("Invalid password")
    //   }
    // },
  },
}, {timestamps: true});
UserSchema.post('validate', function(user){
  const notHashedPass = user.password
  const  salt = bcrypt.genSaltSync(10)
  user.password = bcrypt.hashSync(notHashedPass, salt)
  // console.log({arguments})
})

export const User = models?.User || model('User', UserSchema);
