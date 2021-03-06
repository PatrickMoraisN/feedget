import express from 'express';
import { NodemailerMailAdapter } from '../../adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbackRepository } from '../../repositories/prisma/prisma-feedback-repository';
import { SubmitFeedbackService } from '../../services/SubmitFeedbackService/SubmitFeedbackService';

export const sendEmailRoute = express.Router();

sendEmailRoute.post('/feedback', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  try {
    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submitFeedbackService = new SubmitFeedbackService(
      prismaFeedbackRepository,
      nodemailerMailAdapter
    );

    await submitFeedbackService.execute({
      type,
      comment,
      screenshot,
    });

    return res.status(201).json({ data: 'Feedback sent!' });
  } catch (err) {
    return res.status(403).json({ err });
  }
});
