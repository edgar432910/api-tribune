import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { MailAuthCodeDto } from './mail/dto/mail-auth-code.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly emailService: MailService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
   @Post('/api/email')
   async sendEmail(@Body() user:MailAuthCodeDto){
    console.log({user})
      await this.emailService.sendAuthCode(user);
    }

    @Get('/api/email')
    async getEmail(@Body() user:MailAuthCodeDto){
         console.log({user})
         return this.emailService.getAuthCode(user);
     }
    
}
