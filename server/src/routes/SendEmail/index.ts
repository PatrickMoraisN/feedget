import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from '../../prisma';

export const sendEmailRoute = express.Router();

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '0ba5ea66b6f0e2',
    pass: '039da0d7bcefa5',
  },
});

sendEmailRoute.post('/feedback', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedBack.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Patrick Morais <patrick.nunes@remessaonline.com.br>',
    subject: 'Novo Feedback',
    html: [
      '<div style="font-family: sans-serif; font-size: 16px; color: #222;">',
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      '</div>',
    ].join('\n'),
  });

  return res.status(201).json({ data: feedback });
});
