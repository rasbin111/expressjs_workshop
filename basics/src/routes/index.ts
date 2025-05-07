import express, { Express, Request, Response, NextFunction } from "express";


let IndexRouter = express.Router();

import {PrismaClient} from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

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

IndexRouter.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.render("index", { title: "Express" });
});

export default IndexRouter;
