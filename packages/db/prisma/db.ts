import "dotenv/config";
import postgres, {
  type PostgresClient,
} from "@prisma/orm-postgres/runtime";
import { contractFromJson } from "@prisma/orm-postgres/static";
import type { Contract } from "./schema.d.ts";
import schemaJson from "./schema.json" with { type: "json" };

export const contract = contractFromJson<Contract>(schemaJson);

export const db: PostgresClient<Contract> = postgres({
  contract,
  url: process.env.DATABASE_URL!,
});
