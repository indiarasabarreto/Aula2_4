import express from 'express';
import { studentRouter } from './routes/studentRouter.js';
import mongoose from 'mongoose';

//Conectar ao MongoDB pelo Mongoose
(async () => {
  
  try {
    await mongoose.connect(
    'mongodb+srv://indiarasabarreto:Xp8rs9b1@cluster0.hvm3v.mongodb.net/grades?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Conectado ao MongoDB com sucesso"); 
  } catch (error) {
    console.log("Erro ao conectar ao MongoDb Atlas "+error);
  }
})();

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => {
  console.log("API iniciada");
});
