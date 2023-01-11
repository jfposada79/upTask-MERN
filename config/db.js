import mongoose from "mongoose";

const conectarBD = async () => {

    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        })
        const url = `${connection.connection.host}:${connection.connection.host} `
        console.log(`MongoDB conectado en: ${url}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1)
    }
}

export default conectarBD