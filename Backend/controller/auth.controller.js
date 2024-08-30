import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenandSetCookie from "../utils/generateTokenandSetCookie.js";

export const signup = async (req, res) => {
  try {
    const { adharNo, password, userRole } = req.body;
    if (!adharNo || !password || !userRole) {
      return res.status(400).json({ error: "All fields are required!" });
    }
    const userExists = await User.findOne({ adharNo });
    if (userExists) {
      return res.status(400).json({ error: "User already exists!" });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({
      adharNo,
      password: hashedPassword,
      userRole,
    });
    if (newUser) {
      generateTokenandSetCookie(newUser._id, res);
      await newUser.save();
      const { password: pass, ...rest } = newUser._doc;
      return res.status(201).json({
        user: rest,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error is server!",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { adharNo, password } = req.body;
    if (!adharNo || !password) {
      return res
        .status(400)
        .json({ error: "AdharNo and password are required" });
    }
    const user = await User.findOne({ adharNo });
    if (!user) {
      return res.status(404).json({ error: "User not found, please Signup!" });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }
    generateTokenandSetCookie(user._id, res);
    const { password: pass, ...rest } = user._doc;
    return res.status(200).json({
      user: rest,
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    return res.status(500).json({ error: "Internal Server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({ message: "Logged out successfully!" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    return res.status(500).json({ error: "Internal Server error" });
  }
};
