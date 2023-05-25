const { userModel } = require('../Schema/userSchema');

// Get User
const getUser = async (req, res) => {
    try {
        const result = await userModel.findById(req.params.id);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = getUser;