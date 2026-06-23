import express from "express" //to use router
import { signupUser ,login} from "../controller/authController.js"
const router = express.Router();
 router.post('/signup',signupUser); //made route for signup
 router.post('/login',login);//made route for signin
 export default router
