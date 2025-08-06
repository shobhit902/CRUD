import bcrypt from "bcrypt";
import  jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // existing user check

    const existingUser = await User.findOne({ email });

    if (existingUser) {
     return res.status(400).json({ message: "This email is already registered" });
    }

    // password

    const hashPassword = await bcrypt.hash(password, 10);

    // user

    const user = new User({
      username,
      password: hashPassword,
      email,
      role,
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user]

    const user = await User.findOne({ email });

    if (!user) {
    return  res.status(400).json({ message: "User not found" });
    }

    // compare paasword

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
    return  res.status(400).json({ message: "Invalid password" });
    }

    // JWT

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1day",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};







