import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  port = this.configService.get('DB_PORT')
  constructor(private readonly mailerService: MailerService,private configService: ConfigService){}
  getHello(): string {
    return 'Hello World!';
  }
  sendEmail() {
    console.log(this.configService.get('MAIL_HOST'));
  }
}
