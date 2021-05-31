import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './routes/users.js'

const app =  express();
const PORT = 3001;
app.use(bodyParser.json());

app.use('/users', userRouter);
app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
})