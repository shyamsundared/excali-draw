import { definePrismaConfig } from "prisma/config";
import { defineConfig as ormConfig } from "@prisma/orm-postgres/config";
import "dotenv/config"
const config: ReturnType<typeof definePrismaConfig> = definePrismaConfig({
  orm: ormConfig({
    contract: "./prisma/schema.prisma",
  
db:{
    connection:process.env["DATABASE_URL"]
  }}),
  
});

export default config;
