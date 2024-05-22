import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from "cors"

const app = express();



import connectDb from "./db/mongoose.js";
const port = 8082;
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';

dotenv.config();



app.use(cookieParser());
app.use(cors());
app.use(express.json());


app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use("/api/listing", listingRouter);





connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is Running on Port:${port}`);
    });
  })
  .catch((error) => {
    console.log("MONGO db connection failed !!! ", err);
  });
