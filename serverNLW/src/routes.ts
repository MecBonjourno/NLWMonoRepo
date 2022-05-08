import express from "express";
import nodemailer from "nodemailer";
import { NodemailerAdapter } from "./adapters/nodemailer/nodemailerAdapter";
import { prisma } from "./prisma";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prismaFeedbacks";
import { SubmitFeedbackServiceUseCase } from "./services/SubmitFeedbackService";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerAdapter();
  const submitFeedbackService = new SubmitFeedbackServiceUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  await submitFeedbackService.execute({ type, comment, screenshot });

  return res.status(201).send();
});

routes.get("/users", (req, res) => {
  return res.send("Hello World!");
});
