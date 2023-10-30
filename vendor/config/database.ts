import { Mongoose, connect} from 'mongoose';

export const dbconnect = async (): Promise<Mongoose> => {
    try {
        const connection = await connect(process.env.MONGODB_URI!);
        console.log("db connected");
        return connection;
    } catch (error) {
        console.error("db not connected:", error);
        throw error;
    }
};