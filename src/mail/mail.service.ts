import { Injectable } from '@nestjs/common';
import { MailAuthCodeDto } from './dto/mail-auth-code.dto';
import { MailerCustomService } from './mailer-custom.service';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerCustomService) {}

  async sendAuthCode(mailDto: MailAuthCodeDto) {
   
      const {  startDate, endDate, nameUser , id, versionApp} = mailDto;
      const email= process.env.USER_TOSEND;
      console.log({email})
      await this.mailerService.sendMail(
        {
          to: email,
          subject: 'Bienvenido/a a Tribune App! Verificación de código.',
          template: './send-auth-code',
          context: {
            nameUser,
            startDate, endDate , id, versionApp
          },
        },
      );
      return {status:200, mensaje:'Correo enviado con exito!'}

  }

}
