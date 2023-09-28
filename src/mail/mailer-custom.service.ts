import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';


interface IMailCustomOptions {
    to: string;
    subject: string;
    template: string;
    context: any;
}

@Injectable()
export class MailerCustomService {

  constructor(private readonly mailerService: MailerService) {}

  async sendMail({
    to, subject, template, context,
  }: IMailCustomOptions) {
    try {
      await this.mailerService.sendMail({
        to,
        subject,
        template,
        context,
      });
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException(e)
    }
  }
}
