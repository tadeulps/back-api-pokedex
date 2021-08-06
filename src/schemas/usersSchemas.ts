import joi from "joi";

const SignUpSchema=joi.object({
    email: joi.string().min(3).email().required(),
    password: joi.string().min(6).required().regex(/^[a-zA-Z0-9]*$/)
  });



export {SignUpSchema}