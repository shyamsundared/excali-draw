import z from "zod"
export const createuserschema=z.object({
    username:z.string().min(3).max(20),
    password:z.string(),
    name:z.string()
})

export const signinschema=z.object({
    username:z.string().min(3).max(20),
    password:z.string()
})
export const createroomschema=z.object({
    name:z.string().min(4)
})