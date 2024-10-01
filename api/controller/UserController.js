const bcrypt = require("bcrypt");
const DB = require("../db");
const jwt = require("jsonwebtoken");


const signupUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "provide all area" });
  }

  try {
    const findUser = "select * from users where username =? or email=?";
    const userExists = await new Promise((resolve, reject) => {
      DB.query(findUser, [username, email], (err, result) => {
        if (err) {
          return reject({ message: "database error" });
        }
        resolve(result);
      });
    });

    if (userExists.length > 0) {
      return res
        .status(400)
        .json({ message: "username or email already exist" });
    }

   
    const hashPW = await bcrypt.hash(password, 10);

    const query = "insert into users (username,email,password) values(?,?,?)";
    await new Promise((resolve, reject) => {
      DB.query(query, [username, email, hashPW], (err, result) => {
        if (err) {
          return reject({ message: "database error" });
        }
        resolve(result);
      });
    });

    return res.status(200).json({ message: "successful" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "provide all area" });
  }

  try {
    const query = "select * from users where username=?";
    DB.query(query, [username], async (err, result) => {
      if (err) {
        return res.status(500).json({ message: "database error" });
      }
      if (result.length < 0) {
        return res.status(400).json({ message: "user not found" });
      }
      const user = result[0];

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "password does not match" });
      }

      const token = jwt.sign(
        {
          id: user.id,
          username: user.username,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.cookie("token",token,{
        httpOnly:true,
        secure:true,
        maxAge:3600000
      })
      return res.status(200).json({ message: "login successfull "});
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  signupUser,
  loginUser,
};
