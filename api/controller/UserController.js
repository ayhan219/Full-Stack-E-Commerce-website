const bcrypt = require("bcrypt");
const DB = require("../db");
const jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
  const { name, surname, phone, email, password, birthday } = req.body;

  if (!name || !surname || !phone || !email || !password || !birthday) {
    return res.status(400).json({ message: "provide all area" });
  }

  try {
    const findUser = "select * from users where email=?";
    const userExists = await new Promise((resolve, reject) => {
      DB.query(findUser, [email], (err, result) => {
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

    const query =
      "insert into users (name,surname,phone,email,password,birthday) values(?,?,?,?,?,?)";
    await new Promise((resolve, reject) => {
      DB.query(
        query,
        [name, surname, phone, email, hashPW, birthday],
        (err, result) => {
          if (err) {
            return reject({ message: "database error", err });
          }
          resolve(result);
        }
      );
    });

    return res.status(200).json({ message: "successful" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "provide all area" });
  }

  try {
    const query = "select * from users where email=?";
    DB.query(query, [email], async (err, result) => {
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
          name: user.name,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        maxAge: 3600000,
      });
      return res.status(200).json({
        message: "login successfull ",
        user: {
          id: user.id,
          name: user.name,
          surname: user.surname,
          email: user.email,
        },
      });
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getCurrentUser = async (req, res) => {
  const user = req.user;
  try {
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "server error", error });
  }
};

const logoutUser = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "logout successfull" });
};

const addProduct = async (req, res) => {
  const { user_id, product_id, size, price } = req.body;

  const query =
    "insert into shopping_cart_items (user_id,product_id,size,price) values(?,?,?,?)";

  DB.query(query, [user_id, product_id, size, price], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "database error" });
    }
    return res.status(200).json({ message: "product added" });
  });
};

const getShoppingCart = async (req, res) => {
  const { user_id } = req.query;

  const query = `select p.*, sci.size from shopping_cart_items sci join products p on sci.product_id = p.id where sci.user_id = ?`;

  DB.query(query, [user_id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "database error" });
    }
    return res.status(200).json(result);
  });
};

const deleteShoppingCart = async (req, res) => {
  const { shoppingCartId, user_id } = req.body;

  const query = "delete from shopping_cart_items where id = ? and user_id = ?";

  DB.query(query, [shoppingCartId, user_id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "database error" });
    }
    return res.status(200).json({ message: "item removed!" });
  });
};
module.exports = {
  signupUser,
  loginUser,
  getCurrentUser,
  logoutUser,
  addProduct,
  getShoppingCart,
  deleteShoppingCart,
};
