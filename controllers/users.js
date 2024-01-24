const createUser = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  res.status(201).json({ success: true, message: "User created successfully" });
};
const loginUser = (req, res) => {
  res.status(200).send("login");
};
module.exports = { createUser, loginUser };
