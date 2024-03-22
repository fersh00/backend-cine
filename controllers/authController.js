import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";

//funcion register

const register = async (req, res) => {
  try {
    //Validar que exitan parametros de email y password

    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        msg: "email or password is missing",
      });
    }

    //Hashear el password

    const newPassword = await bcrypt.hash(req.body.password, 5);

    // Actualizar password

    req.body.password = newPassword;

    //Crear User

    const newUser = await User.create(req.body);

    newUser.password = undefined;

    //Retornando nuevo usuario

    return res.json({
      msg: "user successfully created",
      user: newUser,
    });
    // Catch en caso de falla al registrar usuario, de parte del server
  } catch (error) {
    res.status(500).json({
      msg: "Internal server error, unregistered user",
    });
  }
};

// Funcion Login

const login = async (req, res) => {
  //Validamos que exista email y password

  if (!req.body.password || !req.body.email) {
    return res.status(400).json({
      msg: "Bad login",
    });
  }

  try {
    //Buscar usuario con correo del parametro
    const user = await User.findOne({
      email: req.body.email,
    });

    //Si no se encuentra usuario devolvemos error 404.
    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    //Comparamos que las contraseñas coincidan.

    const isPswCorrect = await bcrypt.compare(req.body.password, user.password);

    //En caso de coincidir, se crea token.

    if (isPswCorrect) {
      const payload = {
        email: user.email,
        role: user.role,
      };

      const token = jwt.encode(payload, process.env.SECRET);
      return res.json({
        msg: "logged in successfully",
        token,
      });
    } else {
      return res.status(401).json({
        msg: "Bad login",
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Error at login",
      error,
    });
  }
};

export { register, login };
