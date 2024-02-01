const User = require("../model/userModel.js");
const register = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(409).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    const user = await User.create({
      userName,
      email,
      password,
    });

    if (!user) {
      return res.status(500).json({
        success: false,
        message: "Failed to register user",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.error("Error in user registration:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(500).json({
        success: false,
        message: "User not exists",
      });
    }
    if (password !== user.password) {
      return res.status(500).json({
        success: false,
        message: "password not matched",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User logged in Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const getCetificateData = async (req, res) => {
  try {
    console.log(req.body);
    const { userName, fatherName, roll, regNo, id } = req.body;
    if (!userName || !fatherName || !regNo || !roll) {
      return res.status(500).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findById(id);

    user.certificate.userName = userName;
    user.certificate.fatherName = fatherName;
    user.certificate.regNo = regNo;
    user.certificate.roll = roll;
    user.certificate.status = false;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Form submitted Successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const user = await User.find({});
    return res.status(200).json({
      success: true,
      message: "User logged in Successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
const approveForm = async (req, res) => {
  try {
    const id = req.body.id;
    const user = await User.findById(id);
    user.certificate.status = true;
    await user.save();
    const allusers = await User.find({});
    return res.status(200).json({
      success: true,
      message: "Approved Successfully",
      allusers,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  register,
  login,
  getCetificateData,
  getAllUser,
  approveForm,
};
