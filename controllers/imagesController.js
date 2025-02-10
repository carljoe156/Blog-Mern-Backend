// const url = "http://localhost:8080"; // our location for our images
const Image = require("../database/imageUrl");

const imageController = async (req, res) => {
  try {
    const image = new Image({ imgUrl: req.url });
    await image.save();
    res.status(200).json({ url: req.url });
  } catch (e) {
    res.status(501).json({ msg: "Internal server error!" });
  }
};

module.exports = { imageController };
