import { Request, Response } from "express";
import SignUpInterface from "../interfaces/signUpInterface";
import { getRepository } from "typeorm";
import bcrypt from "bcrypt";

import User from "../entities/User";

export async function signUp (user:SignUpInterface) {
  const check=await checkIfEmailAlreadyExists(user.email);
  if(check) return false;

  const hash=bcrypt.hashSync(user.password,10);

  await getRepository(User).insert({email:user.email,password:hash});
  
  return true;
};

export async function checkIfEmailAlreadyExists(email:string) {
  const user = await getRepository(User).findOne({email})
  return user;
}


