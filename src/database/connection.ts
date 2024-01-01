import mongoose from 'mongoose'
const url = process.env.MONGO_URL


export const connectedDB = mongoose.connect(url as string).then(() => {
    console.log("connected DB");
}
)
