import z from "zod"
export const user_schema=z.object({username:z.string().min(1,"missing username"),
    password:z.string().min(1,"need password")
})