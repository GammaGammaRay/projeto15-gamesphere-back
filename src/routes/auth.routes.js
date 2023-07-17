import { Router } from "express";
import {
  signIn,
  signUp,
  purchaseGames,
  getLibrary,
} from "../controllers/auth.controller.js";
import { schemaValidation } from "../middlewares/schemaValidation.js";
import { signupSchema, signinSchema } from "../schemas/authSchema.js";

const authRouter = Router();

authRouter.post("/sign-up", schemaValidation(signupSchema), signUp);
authRouter.post("/sign-in", schemaValidation(signinSchema), signIn);
authRouter.post("/purchaseGames", purchaseGames);
authRouter.get("/library", getLibrary);

export default authRouter;
