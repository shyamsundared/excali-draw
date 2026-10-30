import process from "node:process";

export const JWT_SECRET=process.env.JWT_SECRET||"secret123"