import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
   @Post('/api/email')
    // createBook(@Body("title") title:string,@Body("author") author:string){
    // @UsePipes(new ValidationPipe())
   sendEmain(@Body() user:any){
        return 'Hello';
    }
}
