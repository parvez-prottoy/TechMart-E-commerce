const colors = require("colors");
const connectDB = require("./config/db");
connectDB();
const users = require("./data/users");
const products = require("./data/products");
const UserModel = require("./src/models/user.model");
const ProductModel = require("./src/models/product.model");

const importData = async () => {
  try {
    await UserModel.deleteMany();
    await ProductModel.deleteMany();
    const createdUsers = await UserModel.insertMany(users);
    const adminId = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminId };
    });
    await ProductModel.insertMany(sampleProducts);
    console.log("Data Imported Successfully.".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await UserModel.deleteMany();
    await ProductModel.deleteMany();
    console.log("Data Destroyed Successfully!".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
