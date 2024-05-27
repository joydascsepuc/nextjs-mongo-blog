import mongoose from "mongoose";

const connectToDB = async () => {
    const DATABASE_URL = process.env.DATABASE_URL;

    mongoose
        .connect(DATABASE_URL)
        .then(() => console.log("DB Connected!"))
        .catch((error) => console.log(error));
};

export default connectToDB;
