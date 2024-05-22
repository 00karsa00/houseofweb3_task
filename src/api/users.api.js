import express from 'express';
const router = express.Router();
import { userRegister, userInfo, updateUserInfo, getUserList, userLogin, deleteUser } from "../controller/users.controller.js"
import { userRegisterValidate, userUpdateValidate } from '../validation/user.validation.js';

router.post("/register",userRegisterValidate, userRegister);

router.get("/:userId", userInfo);

router.patch("/:userId", userUpdateValidate, updateUserInfo);

router.delete("/:userId", deleteUser);

router.post("/list", getUserList);

router.post("/login", userLogin);


export default router;