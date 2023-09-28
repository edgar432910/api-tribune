/* eslint-disable require-await */

import { MailerModule } from '@nestjs-modules/mailer';
import { Global, Module } from '@nestjs/common';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailService } from './mail.service';
import { MailerCustomService } from './mailer-custom.service';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        transport: {
          host:config.get('MAIL_HOST'),
          port: parseInt(config.get('MAIL_PORT')),
          secure: false,
          auth: {
            user: config.get('MAIL_USER'),
            pass:  config.get('MAIL_PASSWORD'),
          },

        },
        defaults: {
          from: `Tribune App <admintribune@tribune.pe>`,
        },
        template: {
          dir: join(__dirname, './templates/emails'),
          adapter: new HandlebarsAdapter(undefined, {
            inlineCssEnabled: true,
            inlineCssOptions: {
              url: ' ',
              preserveMediaQueries: true,
            },
          }),
          options: {
            strict: true,
          },
        },
        previe: true,
        options: {
          partials: {
            dir: join(__dirname, './templates/partials'),
            options: {
              strict: true,
            },
          },
        },
      }),

    }),
  ],
  providers: [MailService, MailerCustomService],
  exports: [MailService, MailerCustomService],
})
export class MailModule {}
