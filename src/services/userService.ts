import { Request, Response } from "express";
import SignUpInterface from "../interfaces/signUpInterface";
import SignInInterface from "../interfaces/signInInterface";
import { getRepository } from "typeorm";
import bcrypt from "bcrypt";
import {v4 as uuid} from "uuid"; 

import User from "../entities/User";
import Session from "../entities/Session"

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

export async function signIn(user:SignInInterface) {
  const check=await checkIfEmailAlreadyExists(user.email);

  if(!check) return false;

  if(bcrypt.compareSync(user.password,check.password)){
    const token=uuid();
    await getRepository(Session).insert({userId:check.id,token});

    return {token,userId:check.id};
  }
  return false;
}
