import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  isActive: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;