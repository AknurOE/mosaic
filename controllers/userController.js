import User from "../models/User.js";
import bcrypt from "bcryptjs"; 

export const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    res.json(user);
  } catch (error) {
    next(error);
  }
};


export const updateProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    if (req.body.password && req.body.password.trim() !== "") {

      const salt = await bcrypt.genSalt(10);
 
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      user.password = hashedPassword;
      
      console.log("Password has been hashed manually!"); 
    }


    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already in use" });
    }
    next(error);
  }
};