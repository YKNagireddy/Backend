import User from "../models/User.js";

export const createUser = async (userData) => {
  const { email } = userData;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("A user with this email already exists");
  }

  return await User.create(userData);
};

export const getAllUsers = async () => {
  return await User.find();
};

export const updateUserById = async (id, updateData) => {
  return await User.findByIdAndUpdate(id, updateData, {
    new: true,
  });
};

export const deleteUserById = async (id) => {
  return await User.findByIdAndUpdate(
    id,
    { isActive: false },
    { new: true }
  );
};