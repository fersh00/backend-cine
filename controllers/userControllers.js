import User from '../models/User.js'

const createUser = async (req, res) => {
    const newUser = await User.create(req.body);
    res.json(newUser);
};

export { createUser }