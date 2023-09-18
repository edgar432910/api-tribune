import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:`.${process.env.NODE_ENV}.env`,
      isGlobal:true,
    }),
    MailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
