import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        //database Name
        const databaseName='demomern';
        const user = 'user';
        const password = 'LFg3MSSlkKxUE7gn';
        const connectString = `mongodb+srv://${user}:${password}@database.mxris.gcp.mongodb.net/${databaseName}?retryWrites=true&w=majority`
        const con = await mongoose.connect(connectString, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB