import User from '../models/User.js'

const createUser = async (req, res) => {
    const newUser = await User.create(req.body);
    res.json(newUser);
};

const getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

const finaldeleteUser = async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    res.json(deletedUser);
}

export { createUser, getAllUsers, finaldeleteUser }