"use server";
import { connectToDB } from "./utils";
import { User } from "./models";
import bcrypt from "bcryptjs";

export const register = async (formData) => {
  const { username, email, password, confirmPassword } =
    Object.fromEntries(formData);

  if (password !== confirmPassword) {
    return "Passwords do not match";
  }

  try {
    connectToDB();
    const user = await User.findOne({ username });
    if (user) {
      return "User name already exists";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("save to db");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
