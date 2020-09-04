//Imports
import express from 'express';
import { studentRouter } from './routes/studentRouter.js';
import mongoose from 'mongoose';


const app = express();

require('dotenv').config();
//Conexão ao MongoDB pelo Mongoose
(async () => {
  
  try {
    await mongoose.connect(
    `mongodb+srv:// {
    $process.env.USERDB}
    ':'
    {$process.env.PWDDB}
    @cluster0.hvm3v.mongodb.net/grades?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Conectado ao MongoDB com sucesso"); 
  } catch (error) {
    console.log("Erro ao conectar ao MongoDb Atlas "+error);
  }
})();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => {
  console.log("API iniciada");
});
