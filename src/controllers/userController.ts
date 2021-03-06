import { Request, Response } from "express";
import SignUpInterface from "../interfaces/signUpInterface";
import SignInInterface from "../interfaces/signInInterface";

import {SignUpSchema} from "../schemas/usersSchemas";

import * as userService from "../services/userService";

export async function signUp (req: Request, res: Response) {
  try {
    const user:SignUpInterface=req.body;
    if(user.password!==user.confirmPassword) return res.sendStatus(408);

    const validation=SignUpSchema.validate({email:user.email,password:user.password});
    if(validation.error){
      return res.sendStatus(400);
    };
    
    const users = await userService.signUp(user); 

    if(!users) return res.sendStatus(409);

    return res.sendStatus(201);

  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function signIn(req: Request, res: Response) {
  try{
    const user:SignInInterface=req.body;
    const validation=SignUpSchema.validate({email:user.email,password:user.password});
    if(validation.error){
      return res.sendStatus(400);
    };
    const users = await userService.signIn(user);

    if(!users) return res.sendStatus(409);

    return res.send(users).status(200);

  }catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}