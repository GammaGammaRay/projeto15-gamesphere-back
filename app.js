import express from "express";
import cors from "cors";
import authRouter from "./src/routes/auth.routes.js";
 

const app = express();
app.use(cors());
app.use(express.json());
app.use(authRouter)


const PORT = 3000;
app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));
