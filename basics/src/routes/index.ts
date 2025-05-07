import express, { Express, Request, Response, NextFunction } from "express";
import { User } from "../generated/prisma/index";

let router = express.Router();

const { PrismaClient } = require("../../generated/prisma");

const prisma = new PrismaClient();

let users: User[];

async function main(): Promise<void> {
  const allUsers = await prisma.user.findMany();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.render("index", { title: "Express" });
});

export default router;
