import { Router } from "express";
import { singIn, signUp } from "../controllers/auth.controller.js";
import { schemaValidation } from "../middlewares/schemaValidation.js";
import { signupSchema, signinSchema } from "../schemas/authSchema.js";



const authRouter = Router();

authRouter.post("/sign-up", schemaValidation(signupSchema), signUp);
authRouter.post("/sign-in", schemaValidation(signinSchema), singIn);

export default authRouter;