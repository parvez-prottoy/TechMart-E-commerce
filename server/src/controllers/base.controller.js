const getHome = (req, res) => {
  res
    .status(200)
    .send(`<h1>Welcome to the TachMart E-commerce Shop BD server.</h1>`);
};
const getHealth = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Okay",
  });
};
module.exports = { getHome, getHealth };
